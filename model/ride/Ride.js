import { parkQueues } from "../park/ParkQueues.js";
import { openRidePrompt } from "../../features/ride.js";

export class Ride {
  #name;
  #isRunning;
  #duration;
  #interval;
  #counter;
  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
    this.#isRunning = false;
    this.#interval = null;
  }
  get interval() {
    return this.#interval;
  }
  set interval(newInterval) {
    this.#interval = newInterval;
  }
  get name() {
    return this.#name;
  }
  get duration() {
    return this.#duration;
  }
  get counter() {
    return this.#counter;
  }
  set counter(newCounter) {
    this.#counter = newCounter;
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
    openRidePrompt(this.#name, this.#duration, max ?? 10);
    this.#isRunning = true;
  }

  close() {
    console.log(
      `Attention guests, ${this.#name} is now closed for the day. Thank you to all those who rode it.`,
    );
    this.#isRunning = false;
  }
}
