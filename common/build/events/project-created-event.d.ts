import { ITeamMember } from '../interfaces';
import { Subjects } from '../subjects';
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
