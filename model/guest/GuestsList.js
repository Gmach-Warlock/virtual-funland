import {
  addItemToArray,
  removeItemFromArray,
} from "../../controller/CRUDHelpers.js";

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
    this.logGuests();
  }

  removeGuest(gToDelete) {
    this.#guests = removeItemFromArray(this.#guests, gToDelete);
    this.logGuests();
  }

  setGuests(newGuests) {
    this.#guests = newGuests;
    this.logGuests();
  }

  logGuests() {
    console.log(`Guests List: `);
    this.#guests.forEach((guest) => {
      console.log(`Name: `, guest.name);
    });
  }
}

export const guestsList = new GuestsList();
