export class Ride {
  #name;
  #isRunning;
  #duration;
  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
    this.#isRunning = false;
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

  startRide() {
    console.log(
      `Attention Guests, ${this.#name} has started. Step up and ride now. The length of the attraction is ${this.#duration} seconds`,
    );
    this.#isRunning = true;

    while (this.#isRunning) {
      setTimeout(() => {
        console.log(`The ${this.#name} has started!`);
      }, this.#duration * 1000);
    }
  }

  closeRide() {
    console.log(
      `Attention guests, ${this.#name} is now closed for the day. Thank you to all those who rode it.`,
    );
    this.#isRunning = false;
  }
}
export const commandLineCoaster = new Ride("Command line Coaster", 60000);
