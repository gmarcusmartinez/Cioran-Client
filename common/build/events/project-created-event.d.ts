import { Subjects } from '../subjects';
export declare enum RoleType {
    Admin = "admin",
    Member = "member"
}
export interface TeamMember {
    _id: string;
    name: string;
    avatar: string;
    role: RoleType;
}
export interface ProjectCreatedEvent {
    subject: Subjects.ProjectCreated;
    data: {
        id: string;
        title: string;
        slug: string;
        team: TeamMember[];
        projectOwner: string;
    };
}
