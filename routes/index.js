const express = require("express");
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/CategoryController');

// Rota raiz da API
router.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à API do Taskly!" });
});

// Rotas para usuários
router.post('/users', UserController.createUser);
router.get('/users', UserController.listUsers);
router.get('/users/:id', UserController.getUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

// Rotas para categorias
router.post('/categories', CategoryController.createCategory);
router.get('/categories', CategoryController.listCategories);
router.get('/categories/:id', CategoryController.getCategory);
router.put('/categories/:id', CategoryController.updateCategory);
router.delete('/categories/:id', CategoryController.deleteCategory);

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