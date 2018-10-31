const SystemJSPlugin = require('webpack-systemjs-bundle-plugin/');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
let nodeExternals = require('webpack-node-externals');

const config = {
    entry: {
        'vuejs': [
            path.resolve(__dirname, 'src/main/javascript/app/main.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/javascript/bundles/'),
        filename: "[name].js",
        libraryTarget: "amd",
        library: "[name]_[hash]"
    },

    externals: [
        nodeExternals( { importType:'amd'})
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        mainFields: ["module", "main", "browser"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new SystemJSPlugin({
            path: path.resolve(__dirname + "/src/main/resources/javascript/bundles/[name].config.json"),
            name: "[name]_[hash]"
        })
    ],

    mode: "development",
    devtool: 'source-map'
};

module.exports = [config];