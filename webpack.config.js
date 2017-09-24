module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging  webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as   resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules:[
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader.'
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            
            // All output '.js' files will have any sourcemaps re-processed by 'sourve-map-loader'
            { enforce: "pre", test: /\.js?$/, loader: "source-map-loader"}

        ]
    },

    // When importing a modules whose path matches one of the following, just
    // assume a corresponding global variable exists and use  that instrad. 
    // This is important becaue it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

};