import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');
const path = require('path');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        alias({
            entries: [
                {
                    find: '#',
                    replacement: path.resolve(__dirname, 'src'),
                },
                {
                    find: '#components',
                    replacement: path.resolve(__dirname, 'src/components'),
                },
            ],
        }),
        peerDepsExternal(),
        resolve({ extensions }),
        babel({ extensions, include: ['src/**/*'] }),
        commonjs(),
    ],
};
