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
            { test: /\.(less|css)(\?.+)?$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader' },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
    ],
    devtool: "inline-source-map"
};
