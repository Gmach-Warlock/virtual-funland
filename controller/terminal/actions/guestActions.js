import { getStringInput } from "./getInputs.js";
import { guestsList } from "../../../model/guest/GuestsList.js";
import { parkUpdater } from "../../park/parkHelpers.js";
import { itemExists } from "../../general/validation.js";
import { denyAndReturn, mainMenu } from "../../../view/menu.js";
import { guestPrompt } from "../prompts/responsePrompts.js";
import { Guest } from "../../../model/guest/Guest.js";

export async function registerGuest() {
  const answer = await getStringInput(guestPrompt("add"));
  const newGuest = new Guest(answer);
  guestsList.addGuest(newGuest);
  parkUpdater("add");
}

async function findGuest(type) {
  const arr = guestsList.guests;
  const answer = await getStringInput(guestPrompt(type));
  if (!itemExists(arr, "name", answer)) {
    denyAndReturn("There isn't a guest with that name in the park");
  }
  const itemToRemove = arr.find((item) => item.name === answer);
  return itemToRemove;
}

export async function removeGuest() {
  const guestToRemove = await findGuest("remove");
  if (!guestToRemove) return;
  guestsList.removeGuest(guestToRemove);
  mainMenu();
}

export function viewGuestDirectory() {
  guestsList.logGuests();
  mainMenu();
}
