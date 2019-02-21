export default {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.scss$/, // Can be: .scss or .styl or .less
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        // Enables CSS Modules
                        modules: true,
                        // Number of loaders applied before CSS loader
                        importLoaders: 1,
                        // Formatting CSS Class name
                        localIdentName: '[name]_[local]_[hash:base64]',
                        // Enable/disable sourcemaps
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader' // sass-loader or stylus-loader
                                          // or less-loader
                }
            ]
        }
    ]
};
