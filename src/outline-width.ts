import { DASH, OUTLINE, WIDTH } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class OutlineWidthStyle extends Style {
    static override matches = /^outline:[0-9]((?!;).)*$/;
    static override key = OUTLINE + DASH + WIDTH;
}