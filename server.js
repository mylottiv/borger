// Import Express and Handlebars
const express = require('express');
const exphbs = require('express-handlebars');

// Init PORT variable
const PORT = process.env.PORT || 3000;

// Init Express and Handlebars
const app = express();
app.engine('handlebars', exphbs({
    helpers: {counter: (index) => index + 1}
}));

app.set('view engine', 'handlebars');

// Init express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import and set route controllers
const borgerRoutes = require('./controlllers/borgers_controller');
app.use(borgerRoutes);

app.listen(PORT, function() {
    console.log('Listening at PORT:', PORT);
})