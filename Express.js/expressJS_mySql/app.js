const express = require('express');
const path = require('path');
const chalk = require('chalk');

const routeHome = require('./src/routes/homeRoute');
const routeUser = require('./src/routes/userRoute');

const app = express();
const port = process.env.PORT || 8080;

app.use('/assets', express.static(path.join(__dirname, 'public')))
/* From node_modules */
app.use('/assets/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/assets/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

/* To set the views folder in express */
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', routeHome);
app.use('/user', routeUser);

app.listen(port, () => {
    console.log(`Server is listening on port ${chalk.green(port)}...`);
});

