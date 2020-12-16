import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserCreatedEvent } from "@cioran/common";
import { User } from "../../models/User";
import { queueGroupName } from "../queue-group-name";

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: UserCreatedEvent["data"], msg: Message) {
    const { id, name, avatar } = data;
    const user = User.build({ id, name, avatar });

    await user.save();

    msg.ack();
  }
}
