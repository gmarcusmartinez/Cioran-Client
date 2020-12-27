import {
  ProjectCreatedEvent,
  Subjects,
  Listener,
  BadRequestError,
} from "@cioran/common";
import { Message } from "node-nats-streaming";
import { Project } from "../../models/Project";
import { User } from "../../models/User";
import { queueGroupName } from "../queue-group-name";

export class ProjectCreatedListener extends Listener<ProjectCreatedEvent> {
  readonly subject = Subjects.ProjectCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProjectCreatedEvent["data"], msg: Message) {
    const { id, title, projectOwner } = data;
    const project = Project.build({ id, title });
    await project.save();

    const user = await User.findById(projectOwner);
    if (!user) throw new BadRequestError("User not found");
    user.addProject(project);

    await user.save();

    msg.ack();
  }
}
