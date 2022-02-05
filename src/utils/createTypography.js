import deepmerge from './deepmerge';

const caseAllCaps = {
    textTransform: 'uppercase',
};
const defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */
export default function createTypography(typography = {}) {
    const {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14, // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        lineHeight = 1.5,
        pxToRem: pxToRem2,
        ...other
    } = typography;

    if (process.env.NODE_ENV !== 'production') {
        if (typeof fontSize !== 'number') {
            console.error('MUI: `fontSize` is required to be a number.');
        }

        if (typeof htmlFontSize !== 'number') {
            console.error('MUI: `htmlFontSize` is required to be a number.');
        }
    }

    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${(size / htmlFontSize) * coef}rem`);
    const buildVariant = (fontWeight, size, height, casing) => ({
        fontFamily,
        fontWeight,
        fontSize: pxToRem(size),
        originalFontSize: size,
        lineHeight: height || lineHeight,
        ...casing,
    });

    const variants = {
        h1: other.h1 || buildVariant(fontWeightLight, 96, null),
        h2: other.h2 || buildVariant(fontWeightLight, 60, null),
        h3: other.h3 || buildVariant(fontWeightRegular, 48, null),
        h4: other.h4 || buildVariant(fontWeightRegular, 34, null),
        h5: other.h5 || buildVariant(fontWeightRegular, 24, null),
        h6: other.h6 || buildVariant(fontWeightMedium, 20, null),
        subtitle1: other.subtitle1 || buildVariant(fontWeightRegular, 16, null),
        subtitle2: other.subtitle2 || buildVariant(fontWeightMedium, 14, null),
        body1: other.body1 || buildVariant(fontWeightRegular, 16, null),
        body2: other.body2 || buildVariant(fontWeightRegular, 14, null),
        button: other.button || buildVariant(fontWeightMedium, 18, null, caseAllCaps),
        caption: other.caption || buildVariant(fontWeightRegular, 12, null),
        overline: other.overline || buildVariant(fontWeightRegular, 12, null, caseAllCaps),
    };

    return deepmerge(
        {
            htmlFontSize,
            pxToRem,
            fontFamily,
            fontSize,
            fontWeightLight,
            fontWeightRegular,
            fontWeightMedium,
            fontWeightBold,
            lineHeight,
            ...variants,
        },
        other,
        {
            clone: false, // No need to clone deep
        },
    );
}
