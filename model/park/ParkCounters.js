import { addItemToArray } from "../../controller/CRUDHelpers.js";

export class ParkCounters {
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

  add(counter) {
    if (!counter) {
      console.log(`counter wasn't provided in add`);
      return;
    }
    this.#counters = addItemToArray(counter);
  }
}

export const parkCounters = new ParkCounters();
