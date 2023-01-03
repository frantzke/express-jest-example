const request = require('supertest');
const app = require('../app');

describe('Todos', () => {
  let newTodoId = '';
  const newTodo = {
    item: 'Drink water',
    completed: false,
  };

  it('should return 200', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
  });

  it('should return empty todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.body.length).toBe(0);
  });

  it('should return create todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send(newTodo);
    newTodoId = response.body.id;
    expect(newTodoId).not.toBeUndefined();
  });

  it('should return todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.body.length).toBe(1);
  });

  it('should update one todo', async () => {
    const response = await request(app).put(`/todos/${newTodoId}`).send({
      completed: true,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.completed).toBe(true);
  });

  it('should delete one item', async () => {
    const response = await request(app).delete(`/todos/${newTodoId}`);
    const todos = response.body;
    expect(todos.length).toBe(0);
  });
});
