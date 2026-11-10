import { Guest } from "../model/guest/Guest.js";
import { guestsList } from "../model/guest/GuestsList.js";
import { pullRandomsByAmount } from "../controller/RNGHelpers.js";
import { getStringInput, itemExists } from "../controller/validation.js";
import { denyAndReturn, mainMenu } from "../view/menu.js";
import { parkUpdater } from "./park.js";
import { randomGuests, theRegulars } from "../assets/guestNames.js";
import { guestPrompt } from "../controller/prompts.js";

function createGuests() {
  const regulars = theRegulars.map((name) => new Guest(name));
  const randoms = pullRandomsByAmount(randomGuests).map(
    (name) => new Guest(name),
  );
  return [...regulars, ...randoms];
}

export function seedGuests(startingGuests = createGuests()) {
  startingGuests.forEach((guest) => {
    guestsList.addGuest(guest);
  });
}
export function findGuestHelper(name, guests) {
  const guest = guests.find((guest) => guest.name === name);
  if (!guest) {
    console.log("no guest with that name (GuestList class)");
    return;
  }
  return guest;
}

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
