const express = require('express');
const controller = require('../controllers/contact_controller');
const emailController = require('../controllers/email_controller');
const router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.add);
router.put('/:id', controller.edit);
router.delete('/:id', controller.remove);

router.post('/email', emailController.send)

module.exports = router;