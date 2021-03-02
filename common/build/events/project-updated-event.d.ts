import { Subjects } from "../subjects";
export interface ProjectUpdatedEvent {
    subject: Subjects.ProjectUpdated;
    data: {
        id: string;
        title: string;
        slug: string;
        projectOwner: string;
    };
}
