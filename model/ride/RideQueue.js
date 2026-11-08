import { Rider } from "./Rider.js";

export class RideQueue {
  #rideName;
  #count;
  #max;
  #head = null;
  #tail = null;

  constructor(rideName, max) {
    this.#rideName = rideName;
    this.#max = max;
    this.#count = 0;
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
  get count() {
    return this.#count;
  }
  set count(newCount) {
    this.#count = newCount;
  }

  enqueue(guest) {
    if (this.#count === this.#max) {
      console.log(
        `The line is currently full for ${this.#rideName}. Please try again later.`,
      );
    }
    const newRider = new Rider(guest.name);
    if (this.#head === null && this.#tail === null) {
      this.#head = newRider;
      this.#tail = newRider;
      this.#count++;
      return;
    }
    const temp = this.#tail;
    if (temp) this.#tail = newRider;
    temp.next = newRider;
    this.#count++;
  }

  dequeue() {
    console.log(
      `It's now ${this.#head.name}'s turn to ride the ${this.#rideName}`,
    );

    this.#head = this.#head.next;
    this.#count--;
  }

  log() {
    let current = this.#head;
    while (current) {
      console.log(`rider: ${current.name}`);
      current = current.next;
    }
  }
}
