import { Guest } from "../../../model/guest/Guest.js";
import { guestsList } from "../../../model/guest/GuestsList.js";
import { denyAndReturn, mainMenu } from "../../../view/menu.js";
import { rl } from "../../../view/menu.js";
import { itemExists } from "../../general/validation.js";
import { parkUpdater } from "../../park/parkHelpers.js";
import { guestPrompt, ridePrompts } from "../prompts/responsePrompts.js";
import { getStringInput, getNumericInput } from "./getInputs.js";
import { clcObj, fcObj, mtpObj } from "../../ride/rideSeeding.js";

async function registerGuest() {
  const answer = await getStringInput(guestPrompt("add"));
  const newGuest = new Guest(answer);
  guestsList.addGuest(newGuest);
  parkUpdater("add");
}

async function findGuest(type) {
  const arr = guestsList.guests;
  const answer = await getStringInput(guestPrompt(type));
  console.log("checking in removeGuests", arr, answer);
  if (!itemExists(arr, "name", answer)) {
    denyAndReturn("There isn't a guest with that name in the park");
  }
  const itemToRemove = arr.find((item) => item.name === answer);
  return itemToRemove;
}

async function removeGuest() {
  const guestToRemove = findGuest("remove");
  if (!guestToRemove) return;
  guestsList.removeGuest(guestToRemove);
  mainMenu();
}

function viewGuestDirectory() {
  guestsList.logGuests();
  mainMenu();
}

async function addToRideLine(guest) {
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

function checkLine() {
  console.log("coming soon");
  mainMenu();
}

function viewAttractionDirectory() {
  console.log("coming soon");
  mainMenu();
}

function exitApp() {
  console.log(`Thank you for visiting! 
Please come again!`);
  rl.close();
}

export async function respondToMainMenu(stringedNumber) {
  const number = Number(stringedNumber);
  const lookup = {
    1: () => registerGuest(),
    2: () => removeGuest(),
    3: () => viewGuestDirectory(),
    4: () => addToRideLine(),
    5: () => checkLine(),
    6: () => viewAttractionDirectory(),
    7: () => exitApp(),
  };
  return lookup[number]();
}
