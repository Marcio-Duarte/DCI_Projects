const express = require('express');
const controller = require('../controllers/todo_controller');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/edit/:id', controller.renderEditPage);
router.post('/', controller.add);
router.put('/:id', controller.edit);
router.delete('/:id', controller.remove);

module.exports = router;