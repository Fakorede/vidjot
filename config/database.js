if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://fakorede:fakorede12@ds217092.mlab.com:17092/vidjot'}
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}