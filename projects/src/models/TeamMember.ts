export enum RoleType {
  Admin = 'admin',
  Member = 'member',
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: RoleType;
}
