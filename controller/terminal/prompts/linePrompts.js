export function lineRushPrompt() {
  console.log(`The guests race to their favorite line.
`);
}

export function waitingLinePrompt(obj) {
  console.log(`The ${obj.name} has ${obj.len} people in line after the rush. `);
  const names = [];
  obj.arr.forEach((guest) => {
    names.push(guest.name);
  });
  names[names.length - 1] = `and ${names[names.length - 1]}`;
  const string = names.join(`, `);
  console.log(
    string,
    `are lined up.
  `,
  );
}
