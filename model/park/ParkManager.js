import { openParkPrompt } from "../../controller/terminal/openingPrompts.js";
import { parkRides } from "./ParkRides.js";

export class ParkManager {
  #guests;
  #subscribers;
  static #instance = null;

  constructor(guests, subscribers) {
    this.#guests = guests;
    this.#subscribers = subscribers;
  }

  get guests() {
    return this.#guests;
  }
  get subscribers() {
    return this.#subscribers;
  }
  set guests(newGuests) {
    this.#guests = newGuests;
  }
  set subscribers(newSubscribers) {
    this.#subscribers = newSubscribers;
  }
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkManager();
    }
    return this.#instance;
  }

  startPark() {
    openParkPrompt();
    parkRides.start();
  }

  closePark() {
    console.log(
      `
Attention Guests: The park is now closed. Please kindly make your ways towards the exits in an orderly fashion. 
`,
    );
  }
}

export const parkManager = ParkManager.getInstance();
