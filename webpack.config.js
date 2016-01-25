/**
 * Created by georgy on 17/01/16.
 */


var path = require('path');
var webpack = require('webpack');

module.exports =  {
    devtool: 'eval-source-map',

    watchOptions: {
        poll: true
    },


    entry: {
          main: [
              './src/main.js',

          ]
    },

    output: {

        path: path.resolve(__dirname, "public"),
        filename: '[name].js',


    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'


            },

            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'


            }
        ]
    }

}