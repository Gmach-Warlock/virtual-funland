import { addItemToArray } from "../../controller/general/CRUDHelpers.js";

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

  log() {
    console.log(`Queues`);
    this.#queues.forEach((queue) => console.log(queue.head));
  }
}

export const parkQueues = new ParkQueues();
