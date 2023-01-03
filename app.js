const express = require('express');
const app = express();
app.use(express.json());

const todosRouter = require('./src/todos');

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.use(todosRouter);

module.exports = app;

