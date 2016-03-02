var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: {
        app: "./src/index",
        vendor: [
            "classnames", "history", "immutable", "lodash", "moment",
            "nprogress", "react", "react-bootstrap", "react-dom", "react-redux",
            "react-router", "redux", "redux-logger", "redux-thunk",
            "reselect", "superagent"
        ],
    },
    resolve: {
        modulesDirectories: ["src", "node_modules"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["babel"],
            include: path.join(__dirname, "src")
        }]
    }
};
