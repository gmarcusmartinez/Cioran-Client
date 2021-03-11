import request from 'supertest';
import { app } from '../../app';
import { fakeAuthCookie } from '../../test/auth-helper';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';

describe('Unsuccessful Project Update', () => {
  it('returns a 404 if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
      .put(`/api/projects/${id}`)
      .set('Cookie', fakeAuthCookie())
      .send({ title: 'Update Test', slug: 'UPTST' })
      .expect(404);
  });

  it('returns 401 if the user is not authenticated', async () => {
    await request(app)
      .post('/api/projects')
      .send({ title: 'Update Test', slug: 'UPTST' })
      .expect(401);
  });

  it('returns 401 if the user does not own the project', async () => {
    const malicousUser = fakeAuthCookie();

    const response = await request(app)
      .post('/api/projects/')
      .set('Cookie', fakeAuthCookie())
      .send({ title: 'Test Project', slug: 'TEST' })
      .expect(201);

    await request(app)
      .get(`/api/projects/${response.body.id}`)
      .set('Cookie', malicousUser)
      .expect(401);
  });

  it('returns 400 if the user owns the project but inputs are invalid', async () => {
    const projectOwner = fakeAuthCookie();

    const response = await request(app)
      .post('/api/projects/')
      .set('Cookie', projectOwner)
      .send({ title: 'Test Project', slug: 'TEST' })
      .expect(201);

    await request(app)
      .put(`/api/projects/${response.body.id}`)
      .set('Cookie', projectOwner)
      .send({ title: '', slug: '' })
      .expect(400);
  });
});

describe('Successful Project Update', () => {
  it('updates a project with valid form inputs and project owner valid', async () => {
    const projectOwner = fakeAuthCookie();
    const response = await request(app)
      .post('/api/projects/')
      .set('Cookie', projectOwner)
      .send({ title: 'Test Project', slug: 'TEST' })
      .expect(201);

    await request(app)
      .put(`/api/projects/${response.body.id}`)
      .set('Cookie', projectOwner)
      .send({ title: 'Updated Title', slug: 'UPTST' })
      .expect(204);
  });

  it('publishes an event', async () => {
    await request(app)
      .post('/api/projects/')
      .set('Cookie', fakeAuthCookie())
      .send({ title: 'Test Project', slug: 'TEST' })
      .expect(201);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
  });
});
