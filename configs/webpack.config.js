const path = require('path');
const webpack = require('webpack');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;

const config  = {
    entry: path.join(__dirname, '..', '/examples/', ENV, '/main.js'),
    output: {
        // path: __dirname,
        path: path.join(__dirname, '..', '/examples/', ENV, '/'),
        filename: 'bundler.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                    presets: ['env', 'omi'],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-object-rest-spread",
                        "syntax-dynamic-import"
                    ]
                }
            }
        ]
    },
    plugins: [
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    // devtool: 'source-map',
};

module.exports = config;
