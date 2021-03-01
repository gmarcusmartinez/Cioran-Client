import { Subjects } from "../subjects";

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
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
