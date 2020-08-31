const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/', controller.get);
router.get('/register', controller.get);
router.get('/login', controller.get);
router.get('/data', controller.get);
router.get('/all', controller.get);
router.post('/register', controller.newUser);
router.put('/:id', controller.editUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;