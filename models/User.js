const pool = require('../config/database');

class User {
  static async create(userData) {
    const { name, email, password } = userData;
    const query = 'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, password];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findAll() {
    const query = 'SELECT id, name, email, created_at FROM Users';
    const result = await pool.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = 'SELECT id, name, email, created_at FROM Users WHERE id = $1';
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async update(id, userData) {
    const { name, email, password } = userData;
    const query = `
      UPDATE Users SET name = $1, email = $2, password = $3
      WHERE id = $4 RETURNING id, name, email, created_at`;
    const values = [name, email, password, id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async delete(id) {
    const query = 'DELETE FROM Users WHERE id = $1 RETURNING *';
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }
}

module.exports = User;