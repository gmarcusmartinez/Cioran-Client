import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  get client() {
    const connectionErr = "Cannot access NATS client before connecting";
    if (!this._client) throw new Error(connectionErr);
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });
      this.client.on("error", (err) => {
        reject(err);
        console.log(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
