const express = require('express');
const exphbs = require('express-handlebars');

// Initialize application
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
    res.render('index');
});

// About Route
app.get('/about', (req, res) => {
    res.send('ABOUT');
});

const port = 5000;

// call listen method
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});