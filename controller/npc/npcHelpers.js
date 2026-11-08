export async function formLine(guestsArr, queue) {
  console.log("forming line", guestsArr, queue);
  guestsArr.forEach((guest) => {
    queue.add(guest);
  });
}

export function rng(possible) {
  return Math.floor(Math.random() * possible);
}

export async function splitUpParty(arr) {
  const clcNPCs = [];
  const fcNPCs = [];
  const mtpNPCs = [];
  const arrayObj = {
    0: clcNPCs,
    1: fcNPCs,
    2: mtpNPCs,
  };
  arr.forEach((guest) => {
    arrayObj[String(rng(3))].push(guest);
  });
  const obj = {
    clcNPCs,
    fcNPCs,
    mtpNPCs,
  };
  console.log("Guest lines, ", obj);
  return obj;
}

export async function seedLines(arr) {
  splitUpParty(arr);
}
