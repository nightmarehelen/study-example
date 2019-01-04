import ConsoleLogOnBuildWebpackPlugin from './ConsoleLogOnBuildWebpackPlugin.js'
const path = require("path")

//import Styles from 'style-loader!css-loader?modules!./styles.css';
//webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
module.exports = {
    entry: {
        app : './src/index.js',
        main: './src/hello.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash].js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {test:/[ -~]/, use:'ConsoleLogOnBuildWebpackPlugin'}
        ]
    },
    mode:'development',
    plugins:[
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}
