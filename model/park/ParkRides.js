import { addItemToArray } from "../../controller/general/CRUDHelpers.js";

export class ParkRides {
  #rides;
  #map;
  constructor() {
    this.#rides = [];
    this.#map = new Map();
  }

  get rides() {
    return this.#rides;
  }
  set rides(newRides) {
    this.#rides = newRides;
  }
  get map() {
    return this.#map;
  }
  set map(newMap) {
    this.#map = newMap;
  }

  add(ride) {
    this.#rides = addItemToArray(this.#rides, ride);
    this.#map.set(ride.name, ride);
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
