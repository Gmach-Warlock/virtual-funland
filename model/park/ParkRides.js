import { addItemToArray } from "../../controller/general/CRUDHelpers.js";

export class ParkRides {
  #rides;
  constructor() {
    this.#rides = [];
  }

  get ride() {
    return this.#rides;
  }
  set ride(newRides) {
    this.#rides = newRides;
  }

  add(ride) {
    this.#rides = addItemToArray(this.#rides, ride);
  }
  log() {
    console.log("rides", this.#rides);
  }
  start() {
    this.#rides.forEach((ride) => {
      ride.open();
    });
  }
  end() {
    this.#rides.forEach((ride) => {
      ride.exit();
    });
  }
}

export const parkRides = new ParkRides();
