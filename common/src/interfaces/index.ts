import { RoleType } from '../events/project-created-event';

export interface IUserProject {
  _id: string;
  title: string;
}

export interface ITeamMember {
  _id: string;
  role: RoleType;
}
