import { ProjectCreatedListener } from "../events/listeners/project-created-listener";
import { ProjectUpdatedListener } from "../events/listeners/project-updated-listener";
import { natsWrapper } from "../nats-wrapper";

export const connectNats = async () => {
  const { NATS_URL, NATS_CLIENT_ID, NATS_CLUSTER_ID } = process.env;
  if (!NATS_URL) throw new Error("NATS_URL must be defined");
  if (!NATS_CLIENT_ID) throw new Error("NATS_CLIENT_ID must be defined");
  if (!NATS_CLUSTER_ID) throw new Error("NATS_CLUSTER_ID must be defined");

  await natsWrapper.connect(NATS_CLUSTER_ID, NATS_CLIENT_ID, NATS_URL);
  natsWrapper.client.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });
  process.on("SIGINT", () => natsWrapper.client.close());
  process.on("SIGTERM", () => natsWrapper.client.close());

  new ProjectCreatedListener(natsWrapper.client).listen();
  new ProjectUpdatedListener(natsWrapper.client).listen();
};
