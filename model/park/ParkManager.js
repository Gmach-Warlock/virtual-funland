import { parkRides } from "./ParkRides.js";
import {
  openParkPrompt,
  closeParkPrompt,
} from "../../controller/terminal/prompts.js";

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

  open() {
    openParkPrompt();
  }

  start() {
    parkRides.start();
  }

  close() {
    closeParkPrompt();
  }
}

export const parkManager = ParkManager.getInstance();
