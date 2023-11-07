const supertest = require('supertest');
const app = require("../src/index");
const api = supertest(app);


describe('Pruebas para la ruta /', () => {
  it('debería manejar una solicitud sin parámetros de consulta', async () => {
    const response = await api.get("/api/people");
    expect(response.statusCode).toBe(200);
  }, 70000);

  it('debería manejar una solicitud con parámetros de consulta', async () => {
    const response = await api.get("/api/people").query({ name: 'Luke Skywalker' });
    expect(response.statusCode).toBe(200);
  }, 70000);
});