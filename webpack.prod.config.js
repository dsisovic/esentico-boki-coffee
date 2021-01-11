const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        business: './src/js/modules/business-logic.js',
        form: './src/js/modules/form.js',
        googleMaps: './src/js/modules/google-maps.js',
        http: './src/js/modules/http.js',
        language: './src/js/modules/language.js',
        lazyLoad: './src/js/modules/lazy-load.js',
        translation: './src/js/modules/translation.js',
        ui: './src/js/modules/ui.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: [
                            'transform-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer'
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', path.join(process.cwd(), 'dist/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}
