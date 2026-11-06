import { Rider } from "./Rider.js";

export class RideQueue {
  #rideName;
  #head = null;
  #tail = null;
  #count;
  #max;

  constructor(name, max) {
    this.#rideName = name;
    this.#count = 0;
    this.#max = max;
  }

  get rideName() {
    return this.#rideName;
  }
  get count() {
    return this.#count;
  }
  get max() {
    return this.#max;
  }
  set rideName(newRidename) {
    this.#rideName = newRidename;
  }
  set count(newCount) {
    this.#count = newCount;
  }
  set max(newMax) {
    this.#max = newMax;
  }

  addRider(name) {
    const newRider = new Rider(name);
    this.#count++;
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
    this.#count--;
  }

  logRiders() {
    let current = this.#head;
    console.log(`count: ${this.#count}, max: ${this.#max}`);
    while (current) {
      console.log(`rider: ${current.name}`);
      current = current.next;
    }
  }
}

export const coasterLine = new RideQueue("Roller Coaster", 10);
coasterLine.addRider("R1");
coasterLine.addRider("R2");
coasterLine.addRider("R3");
coasterLine.addRider("R4");
coasterLine.logRiders();
coasterLine.finishRider();
coasterLine.logRiders();
