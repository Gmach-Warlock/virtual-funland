export function lineRushPrompt() {
  console.log(`The guests race to their favorite line.
`);
}

export function waitingLinePrompt(obj) {
  console.log(`The ${obj.name} has ${obj.len} people in line after the rush. `);
  obj.arr.forEach((guest) => console.log(`${guest.name}`));
}
