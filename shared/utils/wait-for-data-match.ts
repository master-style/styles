import { SpawndChildProcess, spawnd } from 'spawnd'
import stripAnsi from 'strip-ansi'

export default function (child: SpawndChildProcess, doesDataMatch: (data: string) => any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const handler = (data) => {
            const strippedData = stripAnsi(data.toString())
            if (doesDataMatch(strippedData)) {
                child.stdout.off('data', handler)
                child.stderr.off('data', errorHandler)
                resolve(strippedData)
            }
        }
        const errorHandler = (data) => {
            const strippedData = stripAnsi(data.toString())
            child.stdout.off('data', handler)
            child.stderr.off('data', errorHandler)
            reject(strippedData)
        }
        child.stdout.on('data', handler)
        child.stderr.on('data', errorHandler)
    })
}