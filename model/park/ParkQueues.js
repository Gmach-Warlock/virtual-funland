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
    console.log(`Rides and their current riders. `);
    this.#queues.forEach((queue) => {
      console.log(`= = = = = = = = = = = = = = = = = = = = =
          ${queue.rideName}
      `);
      let current = queue.head;
      while (current) {
        console.log(`${current.name}`);
        current = current.next;
      }
    });
  }
}

export const parkQueues = new ParkQueues();
