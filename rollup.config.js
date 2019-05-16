import cssnano from  "cssnano";
import postcss_color_mod from  "postcss-color-mod-function";
import postcss_preset_env from  "postcss-preset-env";
import commonjs from  "rollup-plugin-commonjs";
import livereload from  "rollup-plugin-livereload";
import postcss from  "rollup-plugin-postcss";
import resolve from  "rollup-plugin-node-resolve";
import svelte from  "rollup-plugin-svelte";
import { terser } from  "rollup-plugin-terser";
import svelte_preprocess_postcss from "svelte-preprocess-postcss";

const production = !process.env.ROLLUP_WATCH;

const postcss_plugins = [
    postcss_preset_env( { stage: 0 } ),
    postcss_color_mod()
];

if ( production ) postcss_plugins.push( cssnano() );

const style_preprocessor = svelte_preprocess_postcss( {
    useConfigFile: false,
    plugins: postcss_plugins
} );

export default {
    input: "src/main.js",
    output: {
        format: "iife",
        sourcemap: true,
        name: "app",
        file: "dist/main.js"
    },
    plugins: [
        svelte( {
            dev: !production,
            preprocess: {
                style: style_preprocessor
            },
            css: css => {
                css.write( 'dist/components.css' );
            }
        } ),
        resolve(),
        commonjs(),
        postcss( {
            extract: true,
            plugins: postcss_plugins
        } ),
        !production && livereload( 'dist' ),
        production && terser()
    ]
};