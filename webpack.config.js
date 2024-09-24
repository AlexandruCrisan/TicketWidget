const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: "./dist",
        port: 9000
    },
    mode: "development"
};

// const path = require("path");

// module.exports = {
//     entry: "./src/index.js", // Path to your main entry file
//     output: {
//         filename: "bundle.js", // Output file name
//         path: path.resolve(__dirname, "dist") // Output directory
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env", "@babel/preset-react"]
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader", "postcss-loader"]
//             }
//         ]
//     },
//     mode: "production" // For production build
// };
