import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/CRUDHelpers.js";
import { findGuestHelper } from "../../features/guest.js";
import { guestPrompt } from "../../controller/prompts.js";

function guestListLogHelper(type, guests) {
  if (type === "initialize") console.log(guestPrompt(type));

  if (type !== "initiliaze")
    console.log(`Here are the current Guests
      `);
  console.log(`Guests List: `);
  guests.forEach((guest) => {
    if (guest) console.log(`Guest: `, guest.name);
  });
}

export class GuestsList {
  #guests;
  #interval;
  constructor() {
    this.#guests = [];
  }
  get interval() {
    return this.#interval;
  }
  set interval(newInterval) {
    this.#interval = newInterval;
  }
  get guests() {
    return this.#guests;
  }
  set guests(newGuests) {
    this.#guests = newGuests;
  }

  addGuest(newGuest) {
    this.#guests = addItemToArray(this.#guests, newGuest);
  }

  removeGuest(gToDelete) {
    console.log("removing", gToDelete);
    this.#guests = removeItemFromArray(this.#guests, gToDelete);
  }
  findGuest(name) {
    const guest = findGuestHelper(name, this.#guests);
    return guest;
  }

  setGuests(newGuests) {
    this.#guests = newGuests;
    this.logGuests();
  }

  logGuests(type) {
    guestListLogHelper(type, this.#guests);
  }
}

export const guestsList = new GuestsList();
