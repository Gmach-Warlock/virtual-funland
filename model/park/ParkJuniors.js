import { addItemToArray } from "../../controller/general/CRUDHelpers.js";

export class ParkJuniors {
  #managers;
  constructor() {
    this.#managers = [];
  }

  get managers() {
    return this.#managers;
  }
  set managers(newManagers) {
    this.#managers = newManagers;
  }

  add(manager) {
    this.#managers = addItemToArray(this.#managers, manager);
  }

  log() {
    console.log(this.#managers);
  }
}

export const juniorManagers = new ParkJuniors();
