const mySqlConnector = require('../../config/mySqlConnection');

module.exports = class User {
    constructor(name, surname, password, email, phone) {
        this.first_name = name;
        this.surname = surname;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
    new = () => {
        mySqlConnector.query('INSERT INTO users ( first_name, surname, password, email, phone) values(?,?,?,?,?)',
            [this.first_name, this.surname, this.password, this.email, this.phone], (err, results) => {
                if (err) throw err;
            })
    }
    edit = (id) => {
        mySqlConnector.query("UPDATE users SET ? WHERE id = ?",
            [this, id], (err, results) => {
                if (err) throw err;
            });
    }
    delete = (id) => {
        mySqlConnector.query('DELETE FROM users WHERE id=?', [id], (err, results) => {
            if (err) throw err;
        })
    }
    getAll = (result) => {
        mySqlConnector.query('SELECT * FROM users', null, (err, results) => {
            if (err) {
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }
}