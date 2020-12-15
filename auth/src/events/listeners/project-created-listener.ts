import { ProjectCreatedEvent, Subjects, Listener } from "@cioran/common";
import { Message } from "node-nats-streaming";
import { Project } from "../../models/Project";
import { queueGroupName } from "./queue-group-name";

export class ProjectCreatedListener extends Listener<ProjectCreatedEvent> {
  readonly subject = Subjects.ProjectCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProjectCreatedEvent["data"], msg: Message) {
    const { id, title } = data;

    const project = Project.build({ id, title });
    await project.save();

    msg.ack();
  }
}
