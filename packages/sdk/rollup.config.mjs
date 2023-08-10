import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: ["src/index.ts"],
    output: [
        {
            file: 'dist/index.js', 
            format: "umd",
            name: 'MTFB',
        }
    ],
    plugins: [
        commonjs(),
        typescript(),
        resolve(),
        babel({ babelHelpers: 'bundled' }),
        // replace({
        //     BASEURL: JSON.stringify(process.env.BASE_URL) || ''
        // }),
        // serve({
        //     port: 9990,
        // })
    ]
};
