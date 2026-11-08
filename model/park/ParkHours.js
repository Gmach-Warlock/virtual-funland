export class ParkHours {
  #isOpen;
  constructor() {
    this.#isOpen = false;
  }

  get isOpen() {
    return this.#isOpen;
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

export const parkHours = new ParkHours();
