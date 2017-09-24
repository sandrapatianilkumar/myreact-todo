module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules | bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}