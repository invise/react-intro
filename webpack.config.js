var webpack = require('webpack')

module.exports = {
    entry: [
        './js/main.js'
    ],
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}
