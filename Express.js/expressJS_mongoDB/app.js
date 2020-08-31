const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const mongoAtlasConnection = require('./config/mongoConf');
const homeRoutes = require('./src/routes/home_routes');
const todoRoutes = require('./src/routes/todo_routes');
const contactRoutes = require('./src/routes/contact_routes');

const app = express();
const port = process.env.PORT || 8080;

app.use('/assets', express.static(path.join(__dirname, 'public')))
/* From node_modules */
app.use('/assets/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/assets/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

/* To set the views folder in express */
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: false,
    limit: "15mb"
}));
app.use(express.json({ limit: "15mb" }));

app.use('/', homeRoutes);
app.use('/todo', todoRoutes);
app.use('/contacts', contactRoutes);

mongoose.connect(mongoAtlasConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${chalk.green(port)}...`);
    });
}).catch(err => {
    console.log(err);
});


