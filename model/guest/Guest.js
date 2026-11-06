export class Guest {
  #id;
  #name;

  constructor(name) {
    this.#id = crypto.randomUUID();
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  get id() {
    return this.#id;
  }
  set name(newName) {
    this.#name = newName;
  }
}
