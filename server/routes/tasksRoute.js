const express = require('express');
const { tasksController } = require('../controllers/tasksController');
const { validate } = require('../middleware/validation');
const { body } = require('express-validator');
const tasksRoute = express.Router();


tasksRoute.get('/', tasksController.getAll)
tasksRoute.get('/:id', tasksController.getById)
tasksRoute.post('/',
body('task').notEmpty().withMessage('Name musnt be empty'),
validate,
tasksController.add)
tasksRoute.delete('/:id', tasksController.deleteById)
tasksRoute.put('/:id', tasksController.update)


module.exports = {
    tasksRoute
}