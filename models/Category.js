const pool = require('../config/database');

class Category {
  static async create(categoryData) {
    const { name, description } = categoryData;
    const query = 'INSERT INTO Categories (name, description) VALUES ($1, $2) RETURNING *';
    const values = [name, description];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM Categories';
    const result = await pool.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM Categories WHERE id = $1';
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async update(id, categoryData) {
    const { name, description } = categoryData;
    const query = `
      UPDATE Categories SET name = $1, description = $2
      WHERE id = $3 RETURNING *`;
    const values = [name, description, id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async delete(id) {
    const query = 'DELETE FROM Categories WHERE id = $1 RETURNING *';
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }
}

module.exports = Category;