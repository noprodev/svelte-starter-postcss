const cssnano =  require("cssnano");
const postcss_color_mod  = require("postcss-color-mod-function");
const postcss_preset_env = require("postcss-preset-env");

module.exports = {
    plugins: [
        postcss_preset_env( {
            stage: 0,
            autoprefixer: {
                grid: true
            }
        } ),
        postcss_color_mod(),
        cssnano( {
            autoprefixer: false,
            preset: [ 'default' ]
        } )
    ]
};

