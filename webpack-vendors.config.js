const SystemJSPlugin = require('webpack-systemjs-bundle-plugin/');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


let config = {
    //The vendor bundle will be constructed and tracked by javascript loader in order to prevent loading the
    // same dependency twice
    entry: {
        "vendor-bundle": [
            "css-loader",
            "vue",
            "vue-router",
            "vue-style-loader",
            "vue-template-compiler",
            "lodash",
            "moment",
            "rxjs"
        ]
    },

    externals: {},

    output: {
        path         : __dirname + '/src/main/resources/javascript/bundles/',
        filename     : "[name].js",
        libraryTarget: "amd",
        library      : "[name]_[hash]"
    },

    resolve:{
       mainFields:["browser","main"]
    },
    plugins: [
        new SystemJSPlugin({
            path: __dirname + "/src/main/resources/javascript/bundles/[name].config.json",
            name: "[name]_[hash]"
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
        }),
        // new UglifyJsPlugin({
        //     parallel: true,
        //     sourceMap: true,
        //     uglifyOptions: { ecma: 8 }
        // })
    ],

    devtool: 'source-map'
};

module.exports = [config];