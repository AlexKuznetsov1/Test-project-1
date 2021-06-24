const webpack = require('webpack');
const path = require('path');
// const glob = require('glob');
const argv = require('yargs').argv;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/dist');
const StylelintPlugin = require('stylelint-webpack-plugin');

const config = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                'eslint-loader',
            ]
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')(),
                        ],
                    }
                },
            ],
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')(),
                        ],
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                    }
                },
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [path.join(__dirname, '/src/sass/base/_mixins.scss'), path.join(__dirname, '/src/sass/base/_variables.scss')]
                    },
                },
            ]
        },{
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$'
            }],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new StylelintPlugin({
            files: 'src/**/*.(s(c|a)ss|css)',
        }),
    ],
    optimization: isProduction ? {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false,
                        drop_console: true
                    },
                },
            }),
        ],
    } : {},
};

module.exports = config;