export class RideTimer {
  #interval;
  #duration;

  constructor(duration) {
    this.#duration = duration;
  }

  get interval() {
    return this.#interval;
  }
  set interval(newInterval) {
    this.#interval = newInterval;
  }
  get duration() {
    return this.#duration;
  }
  set duration(newDuration) {
    this.#duration = newDuration;
  }
}
