// database layer - all queries here (had to fix the pool twice lol)

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_NAME
  // local mac socket auth - no host/port/password needed
});

async function getEmployees() {
  const result = await pool.query('SELECT * FROM employees ORDER BY id');
  return result.rows;
}

async function getEmployee(id) {
  const result = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
  return result.rows[0];
}

async function createEmployee(name) {
  const result = await pool.query(
    'INSERT INTO employees (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
}

async function updateEmployee(id, name) {
  const result = await pool.query(
    'UPDATE employees SET name = $2 WHERE id = $1 RETURNING *',
    [id, name]
  );
  return result.rows[0];
}

async function deleteEmployee(id) {
  const result = await pool.query(
    'DELETE FROM employees WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
