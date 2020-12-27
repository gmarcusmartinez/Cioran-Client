import { Publisher, Subjects, UserCreatedEvent } from "@cioran/common";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
}