import { Subjects } from "../subjects";
//testing npm publish
export interface ProjectUpdatedEvent {
  subject: Subjects.ProjectUpdated;
  data: {
    id: string;
    title: string;
    slug: string;
    projectOwner: string;
  };
}
