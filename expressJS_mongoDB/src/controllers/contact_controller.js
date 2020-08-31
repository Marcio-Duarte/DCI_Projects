const Contact = require('../models/contact_model');
const HttpError = require('../handlers/http_error');
const HttpSuccess = require('../handlers/http_success');

const getAll = async (req, res, next) => {
    try {
        const contacts = await Contact.find({}, '-__v');
        res.render('contacts/contacts_index', { contacts });
    } catch (error) {
        let httpError = new HttpError('Fetching todo list failed', 500);
        res.json({ Error: httpError.status() })
    }
}

const add = async (req, res, next) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
    });
    try {
        await newContact.save();
        res.json(new HttpSuccess('The new resource has been created', 201).status())
    } catch (error) {
        res.json(new HttpError(error.message, 422).status());
    }
};

const edit = async (req, res) => {
    try {
        await Contact.updateOne({ _id: req.params.id }, req.body)
    } catch (error) {
        throw error;
    } finally {
        res.end();
    }
}

const remove = async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.params.id });
    } catch (error) {
        throw error;
    } finally {
        res.end();
    }
};


module.exports = { getAll, add, edit, remove }