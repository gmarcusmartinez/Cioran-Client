import { Subjects } from "../subjects";

export interface TeamMember {
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
    team: TeamMember[];
    projectOwner: string;
  };
}
