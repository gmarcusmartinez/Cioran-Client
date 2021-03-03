import { Message } from "node-nats-streaming";
import { Subjects, Listener, ProjectCreatedEvent } from "@cioran/common";
import { queueGroupName } from "../queue-group-name";
import { Project } from "../../models/Project";

export class ProjectCreatedListener extends Listener<ProjectCreatedEvent> {
  readonly subject = Subjects.ProjectCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProjectCreatedEvent["data"], msg: Message) {
    const { id, team } = data;
    const project = Project.build({ id, team });
    await project.save();

    console.log(project);
    msg.ack();
  }
}
