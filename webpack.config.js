var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //run on localhost:3000
    devServer: {
        inline: true,
        port: 3000
    },
    //create mapping for debugging
    devtool: 'cheap-eval-source-map',
    entry: {
        main: './app/main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', include: path.resolve(__dirname, 'app') },
            { test: /\.html$/, use: ['html-loader'], include: path.resolve(__dirname, 'app') },
            { test: /\.css$/, use: ['to-string-loader', 'css-loader'], exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'], include: /node_modules/ },
            { test: /\.(gif|png|jpe?g)$/, loader: 'url-loader', query: { name: 'assets/images/[hash].[ext]', limit: 100000 } },
            { test: /\.(ttf|eot|svg|woff2?)$/, loader: 'file-loader', query: { name: 'assets/fonts/[hash].[ext]' } }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('DEV'),
            SERVER_URL: (process.env.NODE_ENV == 'DEV') ?
                JSON.stringify('http://localhost:53100/') ://if DEV env - with npm start script
                JSON.stringify('http://mrpservershiba.azurewebsites.net/')//if PROD env - with webpack script
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: false,
        //     compress: {
        //         drop_console: true
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ]
};