const pool = require('../config/database');

class Task {
  static async create(taskData) {
    const { user_id, category_id, title, description, status, due_date } = taskData;
    const query = `
      INSERT INTO Tasks (user_id, category_id, title, description, status, due_date)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [user_id, category_id, title, description, status, due_date];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findAll() {
    const query = `
      SELECT t.*, u.name as user_name, c.name as category_name 
      FROM Tasks t
      LEFT JOIN Users u ON t.user_id = u.id
      LEFT JOIN Categories c ON t.category_id = c.id`;
    
    const result = await pool.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = `
      SELECT t.*, u.name as user_name, c.name as category_name 
      FROM Tasks t
      LEFT JOIN Users u ON t.user_id = u.id
      LEFT JOIN Categories c ON t.category_id = c.id
      WHERE t.id = $1`;
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async update(id, taskData) {
    const { user_id, category_id, title, description, status, due_date } = taskData;
    const query = `
      UPDATE Tasks 
      SET user_id = $1, category_id = $2, title = $3, description = $4, status = $5, due_date = $6
      WHERE id = $7 RETURNING *`;
    const values = [user_id, category_id, title, description, status, due_date, id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async delete(id) {
    const query = 'DELETE FROM Tasks WHERE id = $1 RETURNING *';
    const values = [id];
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async findByUserId(user_id) {
    const query = `
      SELECT t.*, c.name as category_name 
      FROM Tasks t
      LEFT JOIN Categories c ON t.category_id = c.id
      WHERE t.user_id = $1`;
    const values = [user_id];
    
    const result = await pool.query(query, values);
    return result.rows;
  }

  static async findByCategoryId(category_id) {
    const query = 'SELECT * FROM Tasks WHERE category_id = $1';
    const values = [category_id];
    
    const result = await pool.query(query, values);
    return result.rows;
  }
}

module.exports = Task;