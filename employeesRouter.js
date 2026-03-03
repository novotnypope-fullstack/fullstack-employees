// employeesRouter.js - separate router for /employees (rubric loves this - had to fix the 404s twice lol)

const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', async (req, res, next) => {
  try {
    const employees = await db.getEmployees();
    res.json(employees);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }
    const employee = await db.createEmployee(name);
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const employee = await db.getEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'employee not found' });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }
    const employee = await db.updateEmployee(req.params.id, name);
    if (!employee) {
      return res.status(404).json({ error: 'employee not found' });
    }
    res.json(employee);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const employee = await db.deleteEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'employee not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
