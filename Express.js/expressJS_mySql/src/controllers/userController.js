const User = require('../models/userModel');

function get(req, res) {
    switch (req.route.path) {
        case '/':
            res.render('index');
            break;
        case '/all':
            let user = new User();
            user.getAll((err, data) => {
                if (err) {
                    throw err;
                } else {
                    res.render('user/userList', { data });
                }
            })
            break;
        case '/register':
            res.render('user/register');
            break;
        case '/login':
            res.render('user/login');
            break;
        default:
            break;
    }
}

function newUser(req, res) {
    let user = new User(
        req.body.inputName,
        req.body.inputSurname,
        req.body.inputPassword,
        req.body.inputEmail,
        req.body.inputPhoneNumber);
    user.new();
    res.redirect('/user/all');
    res.end();
}

function deleteUser(req, res) {
    let user = new User();
    user.delete(req.params.id);
    res.end();
}

function editUser(req, res) {
    let user = new User(
        req.body.inputName,
        req.body.inputSurname,
        req.body.inputPassword,
        req.body.inputEmail,
        req.body.inputPhoneNumber);
    user.edit(req.params.id);
    res.end();
}

module.exports = { get, newUser, deleteUser, editUser };