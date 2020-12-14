import { Publisher, Subjects, ProjectCreatedEvent } from "@cioran/common";

export class ProjectCreatedPublisher extends Publisher<ProjectCreatedEvent> {
  readonly subject = Subjects.ProjectCreated;
}
