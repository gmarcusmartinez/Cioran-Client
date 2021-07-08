import request from 'supertest';
import { app } from '../../app';
import { fakeAuthCookie } from '../../test/auth-helper';
import mongoose from 'mongoose';
import { Project } from '../../models/Project';
import { RoleType } from '@cioran/common/build';
import { Sprint } from '../../models/Sprint';

describe('Route Access', () => {
  it('has a route handler listening to /api/sprints for post requests', async () => {
    const response = await request(app).post('/api/sprints').send({});
    expect(response.status).not.toEqual(404);
  });

  it('can only be accessed if a user is signed in', async () => {
    await request(app).post('/api/sprints').send({}).expect(401);
  });

  it('returns a status other than 401 if the user is signed in', async () => {
    const response = await request(app)
      .post('/api/sprints')
      .set('Cookie', fakeAuthCookie())
      .send({});
    expect(response.status).not.toEqual(401);
  });
});

describe('Unsuccessfull Sprint Creation', () => {
  const title = 'Sprint A';
  const startDate = new Date(Date.now());
  const endDate = new Date(Date.now());

  it('returns an error if the Project does not exist', async () => {
    const projectId = mongoose.Types.ObjectId();

    const res = await request(app)
      .post('/api/sprints')
      .set('Cookie', fakeAuthCookie())
      .send({ projectId, title, startDate, endDate })
      .expect(404);
    expect(res.body.errors[0].message).toBe('Not Found');
  });

  it('returns an error if the User is not a project admin', async () => {
    const project = Project.build({
      team: [
        { _id: mongoose.Types.ObjectId().toHexString(), role: RoleType.Admin },
      ],
    });

    const { _id } = await project.save();
    await request(app)
      .post('/api/sprints')
      .set('Cookie', fakeAuthCookie())
      .send({ projectId: _id, title, startDate, endDate })
      .expect(401);
  });
});
