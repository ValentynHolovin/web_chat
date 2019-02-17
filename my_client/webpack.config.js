const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/login.js'),
            path.resolve(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: path.join(__dirname, '/public/index.html'),
            chunks: ['index'],
            favicon: path.join(__dirname, '/public/favicon.ico')
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: path.join(__dirname, '/public/login.html'),
            chunks: ['login'],
            favicon: path.join(__dirname, '/public/favicon.ico')
        })
    ]
};