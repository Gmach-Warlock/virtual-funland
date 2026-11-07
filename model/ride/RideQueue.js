import { Rider } from "./Rider.js";

export class RideQueue {
  #rideName;
  #head = null;
  #tail = null;

  constructor(rideName) {
    this.#rideName = rideName;
  }

  get head() {
    return this.#head;
  }
  get tail() {
    return this.#tail;
  }
  get rideName() {
    return this.#rideName;
  }
  set rideName(newRidename) {
    this.#rideName = newRidename;
  }

  addRider(name, counterInstance) {
    if (counterInstance.count === counterInstance.max) {
      console.log(
        `The line is currently full for ${this.#rideName}. Please try again later.`,
      );
    }
    const newRider = new Rider(name);
    if (this.#head === null && this.#tail === null) {
      this.#head = newRider;
      this.#tail = newRider;
      return;
    }
    const temp = this.#tail;
    if (temp) this.#tail = newRider;
    temp.next = newRider;
  }
  finishRider() {
    console.log(
      `It's now ${this.#head.name}'s turn to ride the ${this.#rideName}`,
    );
    this.#head = this.#head.next;
  }

  logRiders() {
    let current = this.#head;
    while (current) {
      console.log(`rider: ${current.name}`);
      current = current.next;
    }
  }
}

export const commandLineCoasterLine = new RideQueue("Command Line Coaster", 10);
