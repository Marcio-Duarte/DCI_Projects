const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const chalk = require('chalk');
const routes = require('./routes/routes');

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, fs)
app.listen(port, () => {
  console.log(`Running on port ${chalk.green(port)}...`);
});
