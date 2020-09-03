const path = require('path')

module.exports = {
    entry: path.resolve(__diranme, '../src/main.ts'),
    output: {
        filename: 'bound',
        path: path.resolve(__dirname, 'build')
    }
}