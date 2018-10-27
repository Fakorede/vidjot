if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://<dbname>:<dbpass>@ds217092.mlab.com:17092/vidjot'}
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}
