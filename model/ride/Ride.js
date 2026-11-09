import { openRidePrompt } from "../../controller/terminal/prompts/ridePrompts.js";
import { parkQueues } from "../park/ParkQueues.js";

export class Ride {
  #name;
  #isRunning;
  #duration;
  #interval;
  #max;
  constructor(name, duration, max) {
    this.#name = name;
    this.#duration = duration;
    this.#max = max;
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
  get max() {
    return this.#max;
  }
  set max(newMax) {
    this.#max = newMax;
  }
  get isRunning() {
    return this.#isRunning;
  }

  set isRunning(newIsRunning) {
    this.#isRunning = newIsRunning;
  }

  open() {
    let max;
    const queueToUse = parkQueues.find(this.name);
    if (queueToUse) max = queueToUse.max;
    openRidePrompt(this.#name, this.#duration, this.#max ?? 10);
    this.#isRunning = true;
  }

  close() {
    console.log(
      `Attention guests, ${this.#name} is now closed for the day. Thank you to all those who rode it.`,
    );
    this.#isRunning = false;
  }
}
