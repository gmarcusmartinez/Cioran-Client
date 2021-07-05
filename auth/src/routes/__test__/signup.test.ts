import request from 'supertest';
import { app } from '../../app';

describe('Successful Signup', () => {
  const name = 'Test User';
  const email = 'test@test.com';
  const password = 'password';

  it('returns a 201 on successful signup', async () => {
    return request(app)
      .post('/api/auth/signup')
      .send({ name, email, password })
      .expect(201);
  });

  it('set a cookie after successful signup', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ name, email, password })
      .expect(201);
    expect(response.get('Set-Cookie')).toBeDefined();
  });
});

describe('Unsuccessful, Signup', () => {
  const invalidEmail = 'test@test';
  const invalidPassword = 'short';

  it('returns a 400 w/ invalid email', async () => {
    return request(app)
      .post('/api/auth/signup')
      .send({ email: invalidEmail, password: 'password' })
      .expect(400);
  });
  it('returns a 400 w/ invalid password', async () => {
    return request(app)
      .post('/api/auth/signup')
      .send({
        email: 'test@test.com',
        password: invalidPassword,
      })
      .expect(400);
  });
  it('returns a 400 w/ missing email and  password', async () => {
    return request(app)
      .post('/api/auth/signup')
      .send({ email: '', password: '' })
      .expect(400);
  });
  it('does not allow duplicate emails', async () => {
    const name = 'test user';
    const email = 'test@test.com';
    const password = 'password';

    await request(app)
      .post('/api/auth/signup')
      .send({ name, email, password })
      .expect(201);
    await request(app)
      .post('/api/auth/signup')
      .send({ name, email, password })
      .expect(400);
  });
});
