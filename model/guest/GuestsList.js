import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/general/CRUDHelpers.js";

export class GuestsList {
  #guests;
  constructor() {
    this.#guests = [];
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
    this.#guests = removeItemFromArray(this.#guests, gToDelete);
  }

  setGuests(newGuests) {
    this.#guests = newGuests;
    this.logGuests();
  }

  logGuests() {
    console.log(`Guests List: `);
    this.#guests.forEach((guest) => {
      if (guest) console.log(`Guest: `, guest.name);
    });
  }
}

export const guestsList = new GuestsList();
