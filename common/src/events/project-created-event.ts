import { Subjects } from '../subjects';

export enum RoleType {
  Admin = 'admin',
  Member = 'member',
}

export interface ITeamMember {
  _id: string;
  role: RoleType;
}

export interface ProjectCreatedEvent {
  subject: Subjects.ProjectCreated;
  data: {
    id: string;
    title: string;
    slug: string;
    team: ITeamMember[];
    projectOwner: string;
  };
}
