const request = require('supertest');
const app = require('./server');

// ── APIRelay465 TESTS ──

test('APIRelay465 → valid input returns 200', async () => {
  const response = await request(app)
    .post('/APIRelay465')
    .send({
      AuthenticateID: 'test@gmail.com',
      password: 'password123',
      SenderID: 'sender@gmail.com',
      Portnumber: 465
    });
  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
});

test('APIRelay465 → missing fields returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay465')
    .send({});
  expect(response.status).toBe(400);
  expect(response.body.success).toBe(false);
});

test('APIRelay465 → invalid email returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay465')
    .send({
      AuthenticateID: 'invalidemail',
      password: 'password123',
      SenderID: 'sender@gmail.com',
      Portnumber: 465
    });
  expect(response.status).toBe(400);
});

test('APIRelay465 → wrong port returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay465')
    .send({
      AuthenticateID: 'test@gmail.com',
      password: 'password123',
      SenderID: 'sender@gmail.com',
      Portnumber: 999
    });
  expect(response.status).toBe(400);
});

test('APIRelay465 → password not returned in response', async () => {
  const response = await request(app)
    .post('/APIRelay465')
    .send({
      AuthenticateID: 'test@gmail.com',
      password: 'password123',
      SenderID: 'sender@gmail.com',
      Portnumber: 465
    });
  expect(response.body.data.password).toBeUndefined();
});

// ── APIRelay25 TESTS ──

test('APIRelay25 → valid input returns 200', async () => {
  const response = await request(app)
    .post('/APIRelay25')
    .send({
      SenderID: 'sender@gmail.com',
      Portnumber: 25
    });
  expect(response.status).toBe(200);
  expect(response.body.success).toBe(true);
});

test('APIRelay25 → missing fields returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay25')
    .send({});
  expect(response.status).toBe(400);
  expect(response.body.success).toBe(false);
});

test('APIRelay25 → invalid email returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay25')
    .send({
      SenderID: 'invalidemail',
      Portnumber: 25
    });
  expect(response.status).toBe(400);
});

test('APIRelay25 → wrong port returns 400', async () => {
  const response = await request(app)
    .post('/APIRelay25')
    .send({
      SenderID: 'sender@gmail.com',
      Portnumber: 999
    });
  expect(response.status).toBe(400);
});

test('APIRelay25 → secure is false in response', async () => {
  const response = await request(app)
    .post('/APIRelay25')
    .send({
      SenderID: 'sender@gmail.com',
      Portnumber: 25
    });
  expect(response.body.data.secure).toBe(false);
});