import request from 'supertest';
import { app } from '../../app';
import { fakeAuthCookie } from '../../test/auth-helper';
import mongoose from 'mongoose';

describe('Get Project Failure Cases', () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  it('Returns a 404 if the ticket is not found', async () => {
    const response = await request(app)
      .get(`/api/projects/${id}`)
      .set('Cookie', fakeAuthCookie());
    expect(response.status).toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    await request(app).get(`/api/projects/${id}`).expect(401);
  });
});

describe('Project Found', () => {
  const title = 'Test Project';
  const slug = 'TEST';

  it('Returns a project if the user belongs to the project team', async () => {
    const teamMember = fakeAuthCookie();

    const res = await request(app)
      .post('/api/projects/')
      .set('Cookie', teamMember)
      .send({ title, slug })
      .expect(201);

    await request(app)
      .get(`/api/projects/${res.body.id}`)
      .set('Cookie', teamMember)
      .expect(200);
  });

  it('Returns a 400 if the user does not belong to the project team', async () => {
    const malicousUser = fakeAuthCookie();

    const res = await request(app)
      .post('/api/projects/')
      .set('Cookie', fakeAuthCookie())
      .send({ title, slug })
      .expect(201);

    await request(app)
      .get(`/api/projects/${res.body.id}`)
      .set('Cookie', malicousUser)
      .expect(400);
  });
});
