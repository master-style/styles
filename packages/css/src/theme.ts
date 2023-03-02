import extend from 'to-extend'

export const defaultThemeConfig: ThemeConfig = {
    store: 'theme'
}

export declare type ThemeValue = 'dark' | 'light' | 'system' | string
const isBrowser = typeof window !== 'undefined'

export default class Theme {

    // 按照系統的主題切換，目前只支援 light dark
    private darkMQL: MediaQueryList = isBrowser ? window.matchMedia?.('(prefers-color-scheme:dark)') : undefined

    constructor(
        public host = typeof document !== 'undefined' ? document.documentElement : null,
        public options?: ThemeConfig
    ) {
        this.options = extend(defaultThemeConfig, options)
        if (this.options.store && this.storage) {
            this.syncWithStorage()
        } else if (this.options.default) {
            this.set(this.options.default, { emit: false, store: false })
        }
    }

    get storage() {
        const { store } = this.options
        if (store) {
            return localStorage.getItem(store)
        }
    }

    current: string
    value: ThemeValue

    set(value: ThemeValue, options: { store?: boolean, emit?: boolean } = { store: true, emit: true }) {
        if (value !== this.value) {
            let current: string
            if (value === 'system') {
                this.darkMQL?.addEventListener?.('change', this.onThemeChange)
                current = this.darkMQL?.matches ? 'dark' : 'light'
            } else {
                this.removeDarkMQLListener()
                current = value
            }
            if (current) {
                this.host.classList.remove(this.current)
                this.host.classList.add(current)
                if ((this.host as any).style) {
                    (this.host as any).style.colorScheme = current
                }
            }
            this.current = current
            this.value = value
            // 儲存 theme 到 localStorage
            if (options.store, this.storage !== value, this.options.store) {
                localStorage.setItem(this.options.store, value)
            }
            if (options.emit) {
                this.host.dispatchEvent(new CustomEvent('theme', { detail: this }))
            }
        }
    }

    syncWithStorage() {
        if (isBrowser && this.options.store) {
            let storage = this.storage
            if (storage === 'system' && (storage = this.darkMQL?.matches ? 'dark' : 'light') || storage) {
                this.host.classList.add(storage)
                this.host.style.colorScheme = storage
                this.set(storage, { emit: false, store: false })
            }
        }
    }

    private removeDarkMQLListener() {
        this.darkMQL?.removeEventListener('change', this.onThemeChange)
    }

    private onThemeChange = (mediaQueryList: MediaQueryListEvent) => {
        this.set(mediaQueryList.matches ? 'dark' : 'light')
    }

    destroy() {
        this.darkMQL?.removeEventListener('change', this.onThemeChange)
    }
}

export interface ThemeConfig {
    default?: ThemeValue
    store?: string | false
}