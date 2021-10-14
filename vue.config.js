module.exports = {
    publicPath: '/vue-deploy/',
    devServer: {
        proxy: 'http://api.back.end',
    }
}