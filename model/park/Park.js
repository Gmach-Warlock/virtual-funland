export class Park {
  #rides;
  #isOpen;
  constructor() {
    this.#rides = [];
    this.#isOpen = false;
  }

  get rides() {
    return this.#rides;
  }
  get isOpen() {
    return this.#isOpen;
  }
  set rides(newRides) {
    this.#rides = newRides;
  }
  set isOpen(newVal) {
    this.#isOpen = newVal;
  }

  openPark() {
    this.#isOpen = true;
  }

  closePark() {
    this.#isOpen = false;
  }
}
