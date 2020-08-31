const Todo = require('../models/todo_model');
const HttpError = require('../handlers/http_error');
const HttpSuccess = require('../handlers/http_success');

const getAll = async (req, res, next) => {
    try {
        const todos = await Todo.find({}, '-__v'); //Excluding one field (__v) from each todo.
        res.render('todo/todo_index', { todos });
    } catch (error) {
        let httpError = new HttpError('Fetching todo list failed', 500);
        res.json({ Error: httpError.status() })
    }
}

const add = async (req, res, next) => {
    const newToDo = new Todo({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        await newToDo.save();
        res.json(new HttpSuccess('The new resource has been created', 201).status())
    } catch (error) {
        res.json(new HttpError(error.message, 422).status());
    }
};

const edit = async (req, res) => {
    try {
        await Todo.updateOne({ _id: req.params.id }, req.body)
        //   { $set: req.body });
    } catch (error) {
        throw error;
    } finally {
        res.end();
    }
}

const renderEditPage = async (req, res) => {
    try {
        const results = await Todo.findById(req.params.id);
        res.render('todo/edit', { todo: results });
    } catch (error) {
        throw error;
    }
}

const remove = async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id });
    } catch (error) {
        throw error;
    } finally {
        res.end();
    }
};

module.exports = { getAll, add, edit, renderEditPage, remove }