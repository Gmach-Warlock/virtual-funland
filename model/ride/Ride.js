import { Rider } from "./Rider";

export class Ride {
  #name;
  #duration;
  #count;
  #maxPeople;
  #head = null;
  #tail = null;
  constructor(name, duration, maxPeople) {
    this.#name = name;
    this.#duration = duration;
    this.#count = 0;
    this.#maxPeople = maxPeople;
  }

  get name() {
    return this.#name;
  }
  get duration() {
    return this.#duration;
  }
  get maxPeople() {
    return this.#maxPeople;
  }
  set name(newName) {
    this.#name = newName;
  }
  set duration(newDuration) {
    this.#duration = newDuration;
  }

  addToLine(name) {
    const newRider = new Rider(name);
    if (this.#head === null && this.#tail === null) {
      this.#head = newRider;
      this.#tail = newRider;
      return;
    }
    const temp = this.#tail;
    if (temp) this.#tail = newRider;
    temp.next = this.#tail;
  }
  removeNextRider() {}
}
