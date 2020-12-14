import { Publisher, Subjects, ProjectUpdatedEvent } from "@cioran/common";

export class ProjectUpdatedPublisher extends Publisher<ProjectUpdatedEvent> {
  readonly subject = Subjects.ProjectUpdated;
}
