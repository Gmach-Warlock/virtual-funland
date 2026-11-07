export class Ride {
  #name;
  #isRunning;
  #duration;
  #interval;
  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
    this.#isRunning = false;
    this.#interval = null;
  }
  get interval() {
    return this.#interval;
  }
  get name() {
    return this.#name;
  }
  get duration() {
    return this.#duration;
  }
  get isRunning() {
    return this.#isRunning;
  }

  set isRunning(newIsRunning) {
    this.#isRunning = newIsRunning;
  }

  open() {
    setTimeout(() => {
      console.log(
        `
        Attention Guests, ${this.#name} is now open to ride!! Everyone come on down. The length of the attraction is ${this.#duration} minutes
        `,
      );
      this.#isRunning = true;
    }, 6000);
  }

  close() {
    console.log(
      `Attention guests, ${this.#name} is now closed for the day. Thank you to all those who rode it.`,
    );
    this.#isRunning = false;
  }
}
