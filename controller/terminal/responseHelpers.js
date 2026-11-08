import { Guest } from "../../model/guest/Guest.js";
import { guestsList } from "../../model/guest/GuestsList.js";
import { denyAndReturn, mainMenu } from "../../view/menu.js";
import { rl } from "../../view/menu.js";
import { itemExists } from "../general/validation.js";
import { parkUpdater } from "../park/parkHelpers.js";
import { guestPrompt } from "./responsePrompts.js";
import { getStringInput, getNumericInput } from "./getInputs.js";

async function registerGuest() {
  const answer = await getStringInput(guestPrompt("add"));
  const newGuest = new Guest(answer);
  guestsList.addGuest(newGuest);
  parkUpdater("add");
}

async function removeGuest() {
  const arr = guestsList.guests;
  const answer = await getStringInput(guestPrompt("remove"));
  console.log("checking in removeGuests", arr, answer);
  if (!itemExists(arr, "name", answer)) {
    denyAndReturn("There isn't a guest with that name in the park");
  }
  const itemToRemove = arr.find((item) => item.name === answer);
  guestsList.removeGuest(itemToRemove);
  if (!itemToRemove) {
    denyAndReturn("No guest with that name. Returning");
  }
  guestsList.removeGuest(itemToRemove);
  mainMenu();
}

function viewGuestDirectory() {
  guestsList.logGuests();
  mainMenu();
}

async function addToRideLine(guest) {
  const ride = await getNumericInput(
    `
Which ride is the person getting on?
    
1. Command Line Coaster
2. Frozen Channel
3. Multi Threaded Processor

Please choose the appropriate value: `,
    3,
  );
  const guestName = getStringInput(
    `What is the name of the guest to add to the line? `,
  );
  if (!guestsList.guests.some((guest) => guest.name === guestName)) {
    denyAndReturn(
      "There is no guest here with that name at this time. Returning. ",
    );
  }
  const lookup = {
    1: () => console.log("need to add to Command Line Coaster"),
    2: () => console.log("need to add to Frozen Channel"),
    3: () => console.log("need to add to Multi Threaded Processor"),
  };
  console.log("Need to add and use, ", ride, guestName);
  return lookup[value];
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
