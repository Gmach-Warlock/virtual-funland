export class RideCounter {
  #rideName;
  #count;
  #max;

  constructor(rideName, max) {
    this.#rideName = rideName;
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
  set count(newCount) {
    this.#count = newCount;
  }

  addRiderCount() {
    this.#count++;
  }
  removeRiderCount() {
    this.#count--;
  }
}

export const coasterCounter = new RideCounter("Roller Coaster", 10);
