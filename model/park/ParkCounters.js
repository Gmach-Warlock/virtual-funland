import { addItemToArray } from "../../controller/general/CRUDHelpers.js";

export class ParkCounters {
  static #instance;
  #counters;
  constructor() {
    this.#counters = [];
  }

  get counters() {
    return this.#counters;
  }
  set counters(newCounters) {
    this.#counters = newCounters;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkCounters();
    }
  }
  add(counter) {
    this.#counters = addItemToArray(this.#counters, counter);
  }

  log() {
    console.log(this.#counters);
  }
}

export const parkCounters = new ParkCounters();
