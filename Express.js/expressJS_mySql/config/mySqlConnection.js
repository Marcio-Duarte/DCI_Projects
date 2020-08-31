const mysql = require('mysql');

const mySqlConnector = mysql.createConnection({
    host: 'localhost',
    database: 'fbw10',
    port: 3306,
    user: 'nodeUser',
    password: '123456',
});

module.exports = mySqlConnector;