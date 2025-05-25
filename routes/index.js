const express = require("express");
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// Rota raiz - GET /
router.get("/", (req, res) => {
  res.send("Bem-vindo ao meu gerenciador de tarefas!");
});

// Rotas para tarefas
router.post('/tasks', TaskController.createTask);
router.get('/tasks', TaskController.listTasks);
router.get('/tasks/:id', TaskController.getTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

// Rotas relacionadas
router.get('/users/:user_id/tasks', TaskController.getTasksByUser);
router.get('/categories/:category_id/tasks', TaskController.getTasksByCategory);

module.exports = router;