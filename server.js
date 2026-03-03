// server.js - main entry (had to fix the error middleware twice lol)

const express = require('express');
const employeesRouter = require('./employeesRouter');

const app = express();

app.use(express.json()); // body parsing middleware

app.get('/', (req, res) => {
  res.send('Welcome to the Fullstack Employees API.');
});

app.use('/employees', employeesRouter);

// global error handler
app.use((err, req, res, next) => {
  console.error('ERROR:', err.message); // keep for debugging
  res.status(500).json({ error: 'something went wrong' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
