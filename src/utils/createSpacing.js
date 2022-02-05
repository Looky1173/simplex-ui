// Modified version of https://github.com/mui-org/material-ui/blob/eadb4765f10a89556929a550b4e79fda60380c05/packages/mui-system/src/createTheme/createSpacing.ts

import { createUnarySpacing } from './spacing';

function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
        return spacingInput;
    }

    // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons, can align to a 4dp grid.
    // https://material.io/design/layout/understanding-layout.html#usage
    const transform = createUnarySpacing({
        spacing: spacingInput,
    });

    const spacing = (...argsInput) => {
        if (process.env.NODE_ENV !== 'production') {
            if (!(argsInput.length <= 4)) {
                console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
            }
        }

        const args = argsInput.length === 0 ? [1] : argsInput;

        return args
            .map((argument) => {
                const output = transform(argument);
                return typeof output === 'number' ? `${output}px` : output;
            })
            .join(' ');
    };

    spacing.mui = true;

    return spacing;
}

export default createSpacing;