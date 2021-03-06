export enum RoleType {
  Admin = 'admin',
  Member = 'member',
}

export interface IUserProject {
  _id: string;
  title: string;
}
export interface IProjectSprint {
  _id: string;
  title: string;
  startDate: Date;
  endDate: Date;
}
export interface ITeamMember {
  _id: string;
  role: RoleType;
}
