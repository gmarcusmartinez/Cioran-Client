export declare enum RoleType {
    Admin = "admin",
    Member = "member"
}
export interface IUserProject {
    _id: string;
    title: string;
}
export interface ITeamMember {
    _id: string;
    role: RoleType;
}
