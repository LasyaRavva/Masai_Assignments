const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validation');

router.post('/', validateUser, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', validateUser, userController.updateUser); // Use same validation for update
router.delete('/:id', userController.deleteUser);

module.exports = router;