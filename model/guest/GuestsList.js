import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/general/CRUDHelpers.js";
import { findGuestHelper } from "../../features/guest.js";
import { guestListLogHelper } from "../../controller/terminal/actions/logHelpers.js";

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
