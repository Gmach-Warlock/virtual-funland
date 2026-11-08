import { guestsList } from "../../../model/guest/GuestsList.js";
import { parkQueues } from "../../../model/park/ParkQueues.js";
import { denyAndReturn, mainMenu } from "../../../view/menu.js";
import { getNumericInput, getStringInput } from "./getInputs.js";
import { clcObj, fcObj, mtpObj } from "../../ride/rideSeeding.js";

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
