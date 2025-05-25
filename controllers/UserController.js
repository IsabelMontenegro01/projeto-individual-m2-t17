const pool = require('../config/database');

// Criar um novo usuário
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const query = 'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, password];

  try {
    const result = await pool.query(query, values);
    const user = result.rows[0];
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os usuários
exports.listUsers = async (req, res) => {
  const query = 'SELECT id, name, email, created_at FROM Users';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter um usuário específico
exports.getUser = async (req, res) => {
  const { id } = req.params;

  const query = 'SELECT id, name, email, created_at FROM Users WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar um usuário
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const query = `
    UPDATE Users SET name = $1, email = $2, password = $3
    WHERE id = $4 RETURNING id, name, email, created_at`;
  const values = [name, email, password, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um usuário
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM Users WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};