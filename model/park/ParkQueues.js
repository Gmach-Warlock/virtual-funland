import { addItemToArray } from "../../controller/CRUDHelpers.js";

function parkQueueLogStartPrompt() {
  console.log(`Rides and their current riders
        `);
}

function parkQueuesLogHelper(queues) {
  parkQueueLogStartPrompt();
  queues.forEach((queue) => {
    console.log(`= = = = = = = = = = = = = = = = = = = = =
${queue.ride.name}
      `);
    let current = queue.head;
    while (current) {
      console.log(`${current.name}`);
      current = current.next;
    }
    console.log(
      `       
Total Wait Time: ${queue.duration * queue.counter.count} minutes`,
    );
  });
  console.log(`= = = = = = = = = = = = = = = = = = = = =`);
}

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
      (queue) => queue.ride.name === rideName,
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
