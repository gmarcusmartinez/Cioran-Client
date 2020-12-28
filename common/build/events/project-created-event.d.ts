import { Subjects } from "../subjects";
interface teamMember {
    id: String;
    name: String;
    avatar: String;
    role: String;
}
export interface ProjectCreatedEvent {
    subject: Subjects.ProjectCreated;
    data: {
        id: string;
        title: string;
        slug: string;
        team: teamMember[];
        projectOwner: string;
    };
}
export {};
