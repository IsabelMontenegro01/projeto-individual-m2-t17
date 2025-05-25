const pool = require('../config/database');

// Criar uma nova categoria
exports.createCategory = async (req, res) => {
  const { name, description } = req.body;

  const query = 'INSERT INTO Categories (name, description) VALUES ($1, $2) RETURNING *';
  const values = [name, description];

  try {
    const result = await pool.query(query, values);
    const category = result.rows[0];
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as categorias
exports.listCategories = async (req, res) => {
  const query = 'SELECT * FROM Categories';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter uma categoria específica
exports.getCategory = async (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM Categories WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar uma categoria
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const query = `
    UPDATE Categories SET name = $1, description = $2
    WHERE id = $3 RETURNING *`;
  const values = [name, description, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma categoria
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM Categories WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Categoria não encontrada' });
    }
    res.status(200).json({ message: 'Categoria excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};