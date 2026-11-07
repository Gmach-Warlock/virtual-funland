export class Ride {
  #name;
  #isRunning;
  #duration;
  #queue;
  constructor(name, duration, queue) {
    this.#name = name;
    this.#duration = duration;
    this.#isRunning = false;
    this.#queue = queue;
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
  get queue() {
    return this.#queue;
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
        console.log(
          `The ${this.#name} has started! ${this.#queue.head} is up next! `,
        );
        this.#queue.finishRider();
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

export const commmandLineCoaster = new Ride("Command Line Coaster", 120000);
