var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "cheap-module-eval-source-map",
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
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["babel"],
            include: path.join(__dirname, "src")
        }]
    }
};
