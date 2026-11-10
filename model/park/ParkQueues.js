import { addItemToArray } from "../../controller/general/CRUDHelpers.js";
import { parkQueuesLogHelper } from "../../controller/terminal/actions/logHelpers.js";

export class ParkQueues {
  static #instance;
  #queues;
  constructor() {
    this.#queues = [];
  }

  get queues() {
    return this.#queues;
  }
  set queues(newQueues) {
    this.#queues = newQueues;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkQueues();
    }
    return this.#instance;
  }

  add(queue) {
    this.#queues = addItemToArray(this.#queues, queue);
  }

  find(rideName) {
    const queueToReturn = this.#queues.find(
      (queue) => queue.rideName === rideName,
    );
    if (!queueToReturn) {
      console.log("bad rideName for queue");
      return;
    }
    return queueToReturn;
  }

  log() {
    parkQueuesLogHelper(this.#queues);
  }
}

export const parkQueues = new ParkQueues();
