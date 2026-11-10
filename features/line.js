import { guestsList } from "../model/guest/GuestsList.js";
import { parkQueues } from "../model/park/ParkQueues.js";
import { denyAndReturn, mainMenu } from "../view/menu.js";
import {
  getStringInput,
  getNumericInput,
} from "../controller/general/validation.js";
import { clcObj, fcObj, mtpObj } from "./ride.js";
import { ridePrompts } from "../controller/terminal/prompts.js";

export async function addToRideLine(guest) {
  const ride = await getNumericInput(ridePrompts("add"), 3);
  const guestName = await getStringInput(
    `What is the name of the guest to add to the line? `,
  );
  if (!guestsList.guests.some((guest) => guest.name === guestName)) {
    denyAndReturn(
      "There is no guest here with that name at this time. Returning. ",
    );
  }
  const lookup = {
    1: () =>
      clcObj["Command Line Coaster Queue"].add(
        guest,
        clcObj["Command Line Coaster Counter"],
      ),
    2: () =>
      fcObj["Frozen Channel Queue"].add(guest, fcObj["Frozen Channel Counter"]),
    3: () =>
      mtpObj["Multi Threaded Processor Queue"].addGuest(
        guest,
        mtpObj["Multi Threaded Processor Counter"],
      ),
  };
  console.log("Need to add and use, ", clcObj["Command Line Coaster Queue"]);
  lookup[ride]();
  mainMenu();
}

export function checkLine() {
  parkQueues.log();
  mainMenu();
}

export function lineRushPrompt() {
  console.log(`
The current guests race to their favorite rides!
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
