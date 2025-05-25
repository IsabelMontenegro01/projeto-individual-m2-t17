const pool = require('../config/database');

// Criar uma nova tarefa
exports.createTask = async (req, res) => {
  const { user_id, category_id, title, description, status, due_date } = req.body;

  const query = `
    INSERT INTO Tasks (user_id, category_id, title, description, status, due_date)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
  const values = [user_id, category_id, title, description, status, due_date];

  try {
    const result = await pool.query(query, values);
    const task = result.rows[0];
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listTasks = async (req, res) => {
  const query = `
    SELECT t.*, u.name as user_name, c.name as category_name 
    FROM Tasks t
    LEFT JOIN Users u ON t.user_id = u.id
    LEFT JOIN Categories c ON t.category_id = c.id`;

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter uma tarefa específica
exports.getTask = async (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT t.*, u.name as user_name, c.name as category_name 
    FROM Tasks t
    LEFT JOIN Users u ON t.user_id = u.id
    LEFT JOIN Categories c ON t.category_id = c.id
    WHERE t.id = $1`;
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar uma tarefa
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { user_id, category_id, title, description, status, due_date } = req.body;

  const query = `
    UPDATE Tasks 
    SET user_id = $1, category_id = $2, title = $3, description = $4, status = $5, due_date = $6
    WHERE id = $7 RETURNING *`;
  const values = [user_id, category_id, title, description, status, due_date, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM Tasks WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar tarefas por usuário
exports.getTasksByUser = async (req, res) => {
  const { user_id } = req.params;

  const query = `
    SELECT t.*, c.name as category_name 
    FROM Tasks t
    LEFT JOIN Categories c ON t.category_id = c.id
    WHERE t.user_id = $1`;
  const values = [user_id];

  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar tarefas por categoria
exports.getTasksByCategory = async (req, res) => {
  const { category_id } = req.params;

  const query = 'SELECT * FROM Tasks WHERE category_id = $1';
  const values = [category_id];

  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};