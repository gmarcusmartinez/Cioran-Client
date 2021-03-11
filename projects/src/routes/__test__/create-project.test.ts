import request from 'supertest';
import { app } from '../../app';
import { Project } from '../../models/Project';
import { fakeAuthCookie } from '../../test/auth-helper';
import { natsWrapper } from '../../nats-wrapper';

describe('Route Access', () => {
  it('has a route handler listening to /api/projects for post requests', async () => {
    const response = await request(app).post('/api/projects').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    await request(app).post('/api/projects').send({}).expect(401);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/projects')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessful Project Creation', () => {
  const invalidTitle = '';
  const invalidSlug = '';

  it('throws an error if an invalid title is provided', async () => {
    await request(app)
      .post('/api/projects')
      .set('Cookie', fakeAuthCookie())
      .send({ title: invalidTitle, slug: 'TEST' })
      .expect(400);
  });

  it('throws an error if an invalid slug is provided', async () => {
    await request(app)
      .post('/api/projects')
      .set('Cookie', fakeAuthCookie())
      .send({ title: 'test project', slug: invalidSlug })
      .expect(400);
  });

  it('throws an error if an inputs are blank', async () => {
    await request(app)
      .post('/api/projects')
      .set('Cookie', fakeAuthCookie())
      .send({ title: '', slug: '' })
      .expect(400);
  });
});

describe('Successful Project Creation', () => {
  const title = 'Test Project';
  const slug = 'TEST';

  it('returns a project with valid form inputs', async () => {
    let projects = await Project.find({});
    expect(projects.length).toEqual(0);

    await request(app)
      .post('/api/projects/')
      .set('Cookie', fakeAuthCookie())
      .send({ title, slug })
      .expect(201);

    projects = await Project.find({});

    expect(projects.length).toEqual(1);
    expect(projects[0].title).toBe('Test Project');
    expect(projects[0].slug).toBe('TEST');
  });

  it('publishes an event', async () => {
    await request(app)
      .post('/api/projects/')
      .set('Cookie', fakeAuthCookie())
      .send({ title, slug })
      .expect(201);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
  });
});
