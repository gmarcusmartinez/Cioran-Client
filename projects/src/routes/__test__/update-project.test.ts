import request from 'supertest';
import { app } from '../../app';
import { Project } from '../../models/Project';
import { fakeAuthCookie } from '../../test/auth-helper';
import mongoose from 'mongoose';
// import { natsWrapper } from '../../nats-wrapper';

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

  //   it('returns 401 if the user is does not own the project', async () => {
  //     const response = await request(app)
  //       .post('/api/projects')
  //       .set('Cookie', fakeAuthCookie())
  //       .send({});
  //     expect(response.status).not.toEqual(401);
  //   });
});

describe('Successful Project Update', () => {
  //   const title = 'Test Project';
  //   const slug = 'TEST';
  //   it('updates a project with valid form inputs', async () => {
  //     let projects = await Project.find({});
  //     expect(projects.length).toEqual(0);
  //     await request(app)
  //       .post('/api/projects/')
  //       .set('Cookie', fakeAuthCookie())
  //       .send({ title, slug })
  //       .expect(201);
  //     projects = await Project.find({});
  //     expect(projects.length).toEqual(1);
  //     expect(projects[0].title).toBe('Test Project');
  //     expect(projects[0].slug).toBe('TEST');
  //   });
  //   it('publishes an event', async () => {
  //     await request(app)
  //       .post('/api/projects/')
  //       .set('Cookie', fakeAuthCookie())
  //       .send({ title, slug })
  //       .expect(201);
  //     expect(natsWrapper.client.publish).toHaveBeenCalled();
  //   });
});
