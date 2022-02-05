import { HCT, TonalPalette, intFromHex, hexFromInt, Scheme } from '../color';
import deepmerge from './deepmerge';

function createPalette(palette) {
    const { light = true, primary, secondary = null, tertiary = null, neutral = null, ...other } = palette;

    if (!primary) throw new Error('The `primary` parameter is required.');

    const hct = primary && HCT.fromInt(intFromHex(primary));
    const hue = hct && hct.hue;

    const secondaryHCT = secondary && HCT.fromInt(intFromHex(secondary));
    const tertiaryHCT = tertiary && HCT.fromInt(intFromHex(tertiary));
    const neutralHCT = neutral && HCT.fromInt(intFromHex(neutral));

    let a1 = (other.a1?.tone && other.a1) || TonalPalette.fromHueAndChroma(hue, Math.max(48, hct.chroma));
    let a2 = (other.a2?.tone && other.a2) || TonalPalette.fromHueAndChroma((secondary && secondaryHCT.hue) || hue, (secondary && secondaryHCT.chroma) || 16);
    let a3 = (other.a3?.tone && other.a3) || TonalPalette.fromHueAndChroma((tertiary && tertiaryHCT.hue) || hue + 60, (tertiary && tertiaryHCT.chroma) || 24);
    let n1 = (other.n1?.tone && other.n1) || TonalPalette.fromHueAndChroma((neutral && neutralHCT.hue) || hue, 4);
    let n2 = (other.n2?.tone && other.n2) || TonalPalette.fromHueAndChroma(hue, 8);
    let error = (other.error?.tone && other.error) || TonalPalette.fromHueAndChroma(25, 84);

    let scheme;

    if (light) {
        scheme = new Scheme({
            primary: a1.tone(40),
            onPrimary: a1.tone(100),
            primaryContainer: a1.tone(90),
            onPrimaryContainer: a1.tone(10),
            secondary: a2.tone(40),
            onSecondary: a2.tone(100),
            secondaryContainer: a2.tone(90),
            onSecondaryContainer: a2.tone(10),
            tertiary: a3.tone(40),
            onTertiary: a3.tone(100),
            tertiaryContainer: a3.tone(90),
            onTertiaryContainer: a3.tone(10),
            error: error.tone(40),
            onError: error.tone(100),
            errorContainer: error.tone(90),
            onErrorContainer: error.tone(10),
            background: n1.tone(99),
            onBackground: n1.tone(10),
            surface: n1.tone(99),
            onSurface: n1.tone(10),
            surfaceVariant: n2.tone(90),
            onSurfaceVariant: n2.tone(30),
            outline: n2.tone(50),
            shadow: n1.tone(0),
            inverseSurface: n1.tone(20),
            inverseOnSurface: n1.tone(95),
            inversePrimary: a1.tone(80),
        });
    } else {
        scheme = new Scheme({
            primary: a1.tone(80),
            onPrimary: a1.tone(20),
            primaryContainer: a1.tone(30),
            onPrimaryContainer: a1.tone(90),
            secondary: a2.tone(80),
            onSecondary: a2.tone(20),
            secondaryContainer: a2.tone(30),
            onSecondaryContainer: a2.tone(90),
            tertiary: a3.tone(80),
            onTertiary: a3.tone(20),
            tertiaryContainer: a3.tone(30),
            onTertiaryContainer: a3.tone(90),
            error: error.tone(80),
            onError: error.tone(20),
            errorContainer: error.tone(30),
            onErrorContainer: error.tone(80),
            background: n1.tone(10),
            onBackground: n1.tone(90),
            surface: n1.tone(10),
            onSurface: n1.tone(90),
            surfaceVariant: n2.tone(30),
            onSurfaceVariant: n2.tone(80),
            outline: n2.tone(60),
            shadow: n1.tone(0),
            inverseSurface: n1.tone(90),
            inverseOnSurface: n1.tone(20),
            inversePrimary: a1.tone(40),
        });
    }

    scheme = Object.keys(scheme.props).reduce((acc, el) => {
        acc[el] = hexFromInt(scheme.props[el]);
        return acc;
    }, {});

    return deepmerge({ primary, secondary, tertiary, neutral, scheme, a1, a2, a3, n1, n2, error }, other);
}

export default createPalette;
