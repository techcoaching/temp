module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map'
};