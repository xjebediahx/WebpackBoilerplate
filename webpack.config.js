const settings = require('./buildconfig/settings');
const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/ts/main.ts', // path.resolve(__dirname, settings.entryFile),

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      configFile: '../../tsconfig.json'
                    }
                  }
                ]
            }
        ]
    }
};
