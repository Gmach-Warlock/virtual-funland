import { Guest } from "../../model/guest/Guest.js";
import { guestsList } from "../../model/guest/GuestsList.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { getStringInput, mainMenu } from "../../view/menu.js";
import { rl } from "../../view/menu.js";
import { itemExists } from "../general/validation.js";
import { parkUpdater } from "../park/parkHelpers.js";

async function registerGuest(seed = false) {
  const answer = await getStringInput(`What is the name of the new guest? `);
  const newGuest = new Guest(answer);
  guestsList.addGuest(newGuest);
  parkUpdater("add");
}

async function removeGuest() {
  const arr = guestsList.guests;
  const answer = await getStringInput(
    `What is the name of the guest who is checking out for the day? `,
  );
  console.log("checking in removeGuests", arr, answer);
  if (!itemExists(arr, "name", answer)) {
    console.log(`There isn't a guest with that name in the park. Returning`);
    mainMenu();
  }
  const itemToRemove = arr.find((item) => item.name === answer);
  guestsList.removeGuest(itemToRemove);
  if (!itemToRemove) {
    console.log("No guest with that name");
    mainMenu();
  }
  guestsList.removeGuest(itemToRemove);
  mainMenu();
}

function viewGuestDirectory() {
  guestsList.logGuests();
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
    4: () => console.log("Roller Coaster Coming"),
    5: () => console.log("Roller Coaster Coming"),
    6: () => exitApp(),
  };
  return lookup[number]();
}
