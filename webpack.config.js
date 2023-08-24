BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {

    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            scriptLoading: 'blocking',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8080/'
            },
            {
                reload: false
            }
        ),
        new CopyPlugin({
            patterns: [
                {from: 'src/particles.json', to: 'particles/particles.json'},
            ]
        },
        ),
        new FaviconsWebpackPlugin({
            logo: './src/img/favicon.png',
            cache: true,
            inject: true,
            favicons: {
                appName: 'Resume-Christopher Makarem',
                developerName: 'Christopher Makarem',
            }

        })
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: { quietDeps: true },
                        }

                    }
                ],
            }
        ]
    }

}