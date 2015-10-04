var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader' },
            { test: /\.png$/, loader: "url-loader?limit=100000" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    devtool: "inline-source-map"
};
