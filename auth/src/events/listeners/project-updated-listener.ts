import { ProjectUpdatedEvent, Subjects, Listener } from "@cioran/common";
import { Message } from "node-nats-streaming";
import { Project } from "../../models/Project";
import { queueGroupName } from "../queue-group-name";

export class ProjectUpdatedListener extends Listener<ProjectUpdatedEvent> {
  readonly subject = Subjects.ProjectUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProjectUpdatedEvent["data"], msg: Message) {
    const { id, title } = data;

    const project = Project.build({ id, title });
    await project.save();

    msg.ack();
  }
}
