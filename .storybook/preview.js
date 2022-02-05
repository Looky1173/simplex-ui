import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeProvider } from 'styled-components';
import createTheme from '../src/utils/createTheme.js';
import Baseline from '../src/components/Baseline/Baseline.styled.js';

import '../src/fonts/Open Sans/global.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'centered',
};

const lightTheme = createTheme({ palette: { light: true, primary: '#006c47' }, typography: { fontFamily: 'Open Sans'} }, { name: 'Light' });
const darkTheme = createTheme({ palette: { light: false, primary: '#006c47' }, typography: { fontFamily: 'Open Sans'} }, { name: 'Dark' });

lightTheme.backgroundColor = lightTheme.palette.scheme.background;
darkTheme.backgroundColor = darkTheme.palette.scheme.background;

const themes = [lightTheme, darkTheme];
console.log(themes);

/**
 * Serialize and deserialize theme to work around `values is not defined` error.
 */
function providerFn({ theme, children }) {
    const serialTheme = JSON.parse(JSON.stringify(theme));
    const newTheme = createTheme(serialTheme);
    return (
        <ThemeProvider theme={newTheme}>
            <Baseline />
            {children}
        </ThemeProvider>
    );
}

export const decorators = [withThemesProvider(themes, { CustomThemeProvider: providerFn })];
