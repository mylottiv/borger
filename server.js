// Import Express and Handlebars
const express = require('express');
const exphbs = require('express-handlebars')

// Init PORT variable
const PORT = process.env.PORT || 3000;

// Init Express and Handlebars
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Import and set route controllers
const borgerRoutes = require('./controlllers/borgers_controller');
app.use(borgerRoutes);

app.listen(PORT, function() {
    console.log('Listening at PORT:', PORT);
})