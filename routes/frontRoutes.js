const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');
const Category = require('../models/Category');

// Página inicial - Dashboard com lista de tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    const users = await User.findAll();
    const categories = await Category.findAll();
    
    res.render('pages/page1', { 
      title: 'Taskly - Dashboard',
      tasks: tasks,
      users: users,
      categories: categories
    });
  } catch (err) {
    res.render('pages/page1', { 
      title: 'Taskly - Dashboard',
      tasks: [],
      users: [],
      categories: [],
      error: 'Erro ao carregar dados'
    });
  }
});

// Página de gerenciamento - Criar nova tarefa
router.get('/manage', async (req, res) => {
  try {
    const users = await User.findAll();
    const categories = await Category.findAll();
    
    res.render('pages/page2', { 
      title: 'Taskly - Gerenciar Tarefas',
      users: users,
      categories: categories
    });
  } catch (err) {
    res.render('pages/page2', { 
      title: 'Taskly - Gerenciar Tarefas',
      users: [],
      categories: [],
      error: 'Erro ao carregar dados'
    });
  }
});

module.exports = router;