export class RideManager {
  #ride;
  #queue;
  #counter;
  constructor(ride, queue, counter) {
    this.#ride = ride;
    this.#queue = queue;
    this.#counter = counter;
  }

  get ride() {
    return this.#ride;
  }
  get queue() {
    return this.#queue;
  }
  get counter() {
    return this.#counter;
  }
  set queue(newQueue) {
    this.#queue = newQueue;
  }
  set ride(newRide) {
    this.#ride = newRide;
  }
  set counter(newCounter) {
    this.#counter = newCounter;
  }
}
