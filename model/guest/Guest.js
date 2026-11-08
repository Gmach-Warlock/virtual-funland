export class Guest {
  #id;
  #name;
  #waiting;

  constructor(name) {
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#waiting = false;
  }
  get name() {
    return this.#name;
  }
  get id() {
    return this.#id;
  }
  get waiting() {
    return this.#waiting;
  }
  set name(newName) {
    this.#name = newName;
  }
  set waiting(newWaiting) {
    this.#waiting = newWaiting;
  }

  wait() {
    this.#waiting = true;
  }

  stopWaiting() {
    this.#waiting = false;
  }
}
