import { StyleSheet, Style } from '@master/style';

import { FontWeight } from './font-weight';
import { FontFamily } from './font-family';
import { FontSize } from './font-size';
import { Spacing } from './spacing';
import { Width } from './width';
import { Height } from './height';
import { MinWidth } from './min-width';
import { MinHeight } from './min-height';
import { LetterSpacing } from './letter-spacing';
import { FontSmoothing } from './font-smoothing';
import { FontStyle } from './font-style';
import { FontVariantNumeric } from './font-variant-numeric';
import { LineHeight } from './line-height';
import { ObjectFit } from './object-fit';
import { ObjectPosition } from './object-position';
import { TextAlign } from './text-align';
import { TextDecoration } from './text-decoration';
import { TextTransform } from './text-transform';
import { VerticalAlign } from './vertical-align';
import { Lines } from './lines';
import { TransformOrigin } from './transform-origin';
import { TransformStyle } from './transform-style';
import { TransformBox } from './transform-box';
import { Transform } from './transform';
import { Transition } from './transition';
import { TransitionDelay } from './transition-delay';
import { TransitionDuration } from './transition-duration';
import { TransitionProperty } from './transition-property';
import { TransitionTimingFunction } from './transition-timing-function';
import { MaxHeight } from './max-height';
import { MaxWidth } from './max-width';
import { Display } from './display';
import { BoxSizing } from './box-sizing';
import { Opacity } from './opacity';
import { Visibility } from './visibility';
import { Clear } from './clear';
import { Float } from './float';
import { Isolation } from './isolation';
import { Overflow } from './overflow';
import { OverscrollBehavior } from './overscroll-behavior';
import { ZIndex } from './z-index';
import { AnimationDelay } from './animation-delay';
import { AnimationDirection } from './animation-direction';
import { AnimationFillMode } from './animation-fill-mode';
import { AnimationIterationCount } from './animation-iteration-count';
import { AnimationName } from './animation-name';
import { AnimationPlayState } from './animation-play-state';
import { AnimationTimingFunction } from './animation-timing-function';
import { Animation } from './animation';
import { BorderColor } from './border-color';
import { BorderRadius } from './border-radius';
import { BorderStyle } from './border-style';
import { BorderWidth } from './border-width';
import { Border } from './border';
import { BackgroundAttachment } from './background-attachment';
import { BackgroundBlendMode } from './background-blend-mode';
import { BackgroundClip } from './background-clip';
import { BackgroundColor } from './background-color';
import { BackgroundOrigin } from './background-origin';
import { BackgroundPosition } from './background-position';
import { BackgroundRepeat } from './background-repeat';
import { BackgroundSize } from './background-size';
import { BackgroundImage } from './background-image';
import { Background } from './background';
import { MixBlendMode } from './mix-blend-mode';
import { Position } from './position';
import { Placement } from './placement';
import { BackdropFilter } from './backdrop-filter';
import { Fill } from './fill';
import { Stroke } from './stroke';
import { StrokeWidth } from './stroke-width';
import { Filter } from './filter';
import { Cursor } from './cursor';
import { PointerEvents } from './pointer-events';
import { Resize } from './resize';
import { TouchAction } from './touch-action';
import { UserDrag } from './user-drag';
import { UserSelect } from './user-select';
import { BoxShadow } from './box-shadow';
import { TextShadow } from './text-shadow';
import { TextSize } from './text-size';
import { WordBreak } from './word-break';
import { GridColumns } from './grid-columns';
import { GridRows } from './grid-rows';
import { Gap } from './gap';
import { WordSpacing } from './word-spacing';
import { Variable } from './variable';
import { AspectRadio } from './aspect-radio';
import { BoxDecorationBreak } from './box-decoration-break';
import { BreakAfter } from './break-after';
import { BreakBefore } from './break-before';
import { BreakInside } from './break-inside';
import { FlexShrink } from './flex-shrink';
import { FlexDirection } from './flex-direction';
import { FlexGrow } from './flex-grow';
import { FlexWrap } from './flex-wrap';
import { FlexBasis } from './flex-basis';
import { Flex } from './flex';
import { Order } from './order';
import { GridColumn } from './grid-column';
import { ColumnSpan } from './column-span';
import { GridRow } from './grid-row';
import { FontColor } from './font-color';
import { AlignContent } from './align-content';
import { AlignItems } from './align-items';
import { AlignSelf } from './align-self';
import { GridAutoColumns } from './grid-auto-columns';
import { GridAutoFlow } from './grid-auto-flow';
import { GridAutoRows } from './grid-auto-rows';
import { JustifyContent } from './justify-content';
import { JustifyItems } from './justify-items';
import { JustifySelf } from './justify-self';
import { PlaceContent } from './place-content';
import { PlaceItems } from './place-items';
import { PlaceSelf } from './place-self';
import { Padding } from './padding';
import { Margin } from './margin';
import { TextOverflow } from './text-overflow';
import { ListStylePosition } from './list-style-position';
import { ListStyleType } from './list-style-type';
import { ListStyle } from './list-style';
import { TextDecorationColor } from './text-decoration-color';
import { TextDecorationStyle } from './text-decoration-style';
import { TextDecorationThickness } from './text-decoration-thickness';
import { TextIndent } from './text-indent';
import { Content } from './content';
import { OutlineColor } from './outline-color';
import { OutlineOffset } from './outline-offset';
import { OutlineStyle } from './outline-style';
import { OutlineWidth } from './outline-width';
import { Outline } from './outline';
import { BorderCollapse } from './border-collapse';
import { BorderSpacing } from './border-spacing';
import { TableLayout } from './table-layout';
import { AccentColor } from './accent-color';
import { Appearance } from './appearance';
import { CaretColor } from './caret-color';
import { ScrollBehavior } from './scroll-behavior';
import { ScrollMargin } from './scroll-margin';
import { ScrollPadding } from './scroll-padding';
import { ScrollSnapAlign } from './scroll-snap-align';
import { ScrollSnapStop } from './scroll-snap-stop';
import { ScrollSnapType } from './scroll-snap-type';
import { WillChange } from './will-change';
import { TextUnderlineOffset } from './text-underline-offset';
import { Inset } from './inset';
import { Columns } from './columns';
import { WhiteSpace } from './white-space';
import { TextOrientation } from './text-orientation';
import { WritingMode } from './writing-mode';
import { Contain } from './contain';
import { AnimationDuration } from './animation-duration';
import { TextRendering } from './text-rendering';
import { Direction } from './direction';
import { TextDecorationLine } from './text-decoration-line';
import { GridColumnStart } from './grid-column-start';
import { ListStyleImage } from './list-style-image';
import { ShapeOutside } from './shape-outside';
import { ShapeMargin } from './shape-margin';
import { ShapeImageThreshold } from './shape-image-threshold';
import { ClipPath } from './clip-path';
import { Grid } from './grid';
import { Font } from './font';
import { Quotes } from './quotes';
import { GridTemplate } from './grid-template';
import { GridRowStart } from './grid-row-start';
import { GridTemplateAreas } from './grid-template-areas';
import { GridTemplateColumns } from './grid-template-columns';
import { GridTemplateRows } from './grid-template-rows';
import { GridArea } from './grid-area';
import { GridColumnEnd } from './grid-column-end';
import { GridRowEnd } from './grid-row-end';
import { MaskImage } from './mask-image';
import { TextFillColor } from './text-fill-color';
import { TextStroke } from './text-stroke';
import { TextStrokeWidth } from './text-stroke-width';
import { TextStrokeColor } from './text-stroke-color';
import { StrokeDasharray } from './stroke-dasharray';
import { StrokeDashoffset } from './stroke-dashoffset';

const hasWindow = typeof window !== 'undefined';

export const Styles = [
    Variable,
    FontWeight,
    FontFamily,
    FontColor,
    Spacing,
    Margin,
    Padding,
    FontSize,
    // flex
    FlexBasis,
    FlexWrap,
    FlexGrow,
    FlexShrink,
    FlexDirection,
    Flex, // last
    Display, // after FlexStyle
    Width,
    Height,
    MinWidth,
    MinHeight,
    Contain,
    Content,
    LetterSpacing,
    FontSmoothing,
    FontStyle,
    FontVariantNumeric,
    Font,
    LineHeight,
    ObjectFit,
    ObjectPosition,
    TextAlign,
    TextDecorationColor,
    TextDecorationStyle,
    TextDecorationThickness,
    TextDecorationLine,
    TextDecoration,
    TextUnderlineOffset,
    TextOverflow,
    TextOrientation,
    TextTransform,
    TextRendering,
    TextIndent,
    VerticalAlign,
    Columns,
    WhiteSpace,
    Inset,
    Lines,
    MaxHeight,
    MaxWidth,
    BoxSizing,
    Opacity,
    Visibility,
    Clear,
    Float,
    Isolation,
    Overflow,
    OverscrollBehavior,
    ZIndex,
    Position,
    Placement,
    Cursor,
    PointerEvents,
    Resize,
    TouchAction,
    WordBreak,
    WordSpacing,
    UserDrag,
    UserSelect,
    TextShadow,
    TextSize,
    TextFillColor,
    TextStrokeWidth,
    TextStrokeColor,
    TextStroke,
    BoxShadow,
    TableLayout,
    // transform
    TransformBox,
    TransformStyle,
    TransformOrigin,
    Transform, // last
    // transition
    TransitionProperty,
    TransitionTimingFunction,
    TransitionDuration,
    TransitionDelay,
    Transition, // last
    // animation
    AnimationDelay,
    AnimationDirection,
    AnimationDuration,
    AnimationFillMode,
    AnimationIterationCount,
    AnimationName,
    AnimationPlayState,
    AnimationTimingFunction,
    Animation,
    // border
    BorderColor,
    BorderRadius,
    BorderStyle,
    BorderWidth,
    BorderCollapse,
    BorderSpacing,
    Border,
    // background
    BackgroundAttachment,
    BackgroundBlendMode,
    BackgroundClip,
    BackgroundColor,
    BackgroundOrigin,
    BackgroundPosition,
    BackgroundRepeat,
    BackgroundSize,
    BackgroundImage,
    Background,
    // effect
    MixBlendMode,
    BackdropFilter,
    Filter,
    // svg
    Fill,
    StrokeDasharray,
    StrokeDashoffset,
    StrokeWidth,
    Stroke,
    // grid
    GridColumnStart,
    GridColumnEnd,
    GridColumn,
    GridColumns,
    GridRowStart,
    GridRowEnd,
    GridRow,
    GridRows,
    GridAutoColumns,
    GridAutoFlow,
    GridAutoRows,
    GridTemplateAreas,
    GridTemplateColumns,
    GridTemplateRows,
    GridTemplate,
    GridArea,
    Grid,
    Gap,
    Order,
    // break
    BreakInside,
    BreakBefore,
    BreakAfter,
    BoxDecorationBreak,
    AspectRadio,
    ColumnSpan,
    // align
    AlignContent,
    AlignItems,
    AlignSelf,
    // justify
    JustifyContent,
    JustifyItems,
    JustifySelf,
    // place
    PlaceContent,
    PlaceItems,
    PlaceSelf,
    ListStylePosition,
    ListStyleType,
    ListStyleImage,
    ListStyle,
    // outline
    OutlineColor,
    OutlineOffset,
    OutlineStyle,
    OutlineWidth,
    Outline,
    AccentColor,
    Appearance,
    CaretColor,
    // scroll
    ScrollBehavior,
    ScrollMargin,
    ScrollPadding,
    ScrollSnapAlign,
    ScrollSnapStop,
    ScrollSnapType,
    WillChange,
    WritingMode,
    Direction,
    ShapeOutside,
    ShapeMargin,
    ShapeImageThreshold,
    ClipPath,
    Quotes,
    MaskImage
] as Styles;

/**
 * @param query fontSize, 'font-size' 
 * */
const get = Styles.get = (query: string) => Styles.find((EachStyle) =>
    query === EachStyle.id || query === EachStyle.key?.replace(/-./g, (m) => m[1].toUpperCase()) || query === EachStyle.key
);

/**
 * @param property 'values', 'semantics' and all of the Style members
 * */
Styles.extend = (property, settings, refresh = true) => {
    for (const query in settings) {
        const EachStyle = get(property);
        if (EachStyle) {
            const eachSettings = settings[query];
            const oldSettings = EachStyle[property];
            oldSettings
                ? Object.assign(oldSettings, eachSettings)
                : EachStyle[property] = eachSettings;
        }
    }
    if (refresh) {
        StyleSheet.refresh();
    }
}

export const colors = {
    fade: '63697c',
    gray: '6a6a6c',
    brown: '8a604c',
    orange: 'a15717',
    gold: '906000',
    yellow: '7c6900',
    grass: '4e750e',
    green: '067b34',
    beryl: '007954',
    teal: '00776f',
    cyan: '007391',
    sky: '086eb3',
    blue: '2061e4',
    indigo: '5a5bd5',
    violet: '7949e5',
    purple: '9832e4',
    fuchsia: 'b61cbb',
    pink: 'ca1473',
    crimson: 'ce1a4b',
    red: 'd11a1e',
    black: '000000',
    white: 'ffffff'
}

export const singleColors = ['black', 'white'];

export function init() {
    StyleSheet.Styles.push(...Styles);
    Style.singleColors.push(...singleColors);
    Object.assign(Style.colors, colors);
    if (hasWindow) {
        const sheet = new StyleSheet(document.head);
        StyleSheet.root = sheet;
        sheet.observe(document.documentElement);
    }
}

const MASTER_STYLES = 'MasterStyles';
const MASTER_STYLES_MANUAL = MASTER_STYLES + 'Manual';
if (hasWindow) {
    window['init' + MASTER_STYLES] = init;
    window[MASTER_STYLES] = Styles;
    if (!window[MASTER_STYLES_MANUAL]) {
        init();
    }
} else if (process.env[MASTER_STYLES_MANUAL] !== 'true') {
    init();
}

declare global {
    interface Window {
        MasterStyles: typeof Styles;
    }
}

export interface Styles extends Array<typeof Style> {
    extend: (property: 'semantics' | 'values', settings: { [key: string]: { [key: string]: any } }, refresh?: boolean) => void;
    get: (query: string) => typeof Style
}
