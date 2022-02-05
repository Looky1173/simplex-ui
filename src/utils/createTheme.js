import deepmerge from './deepmerge';
import createPalette from './createPalette';
import createSpacing from './createSpacing';
import createTypography from './createTypography';

function createTheme(options = {}, ...args) {
    const { palette: paletteInput, spacing: spacingInput, typography: typographyInput, ...other } = options;

    const palette = createPalette(paletteInput);
    const spacing = createSpacing(spacingInput);
    const typography = createTypography(typographyInput);

    let theme = { direction: 'ltr', spacing, palette, typography };

    theme = deepmerge(theme, other);
    theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);

    return theme;
}

export default createTheme;
