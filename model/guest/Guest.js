export class Guest {
  id;
  name;
  passes;

  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.passes = [];
  }
}
