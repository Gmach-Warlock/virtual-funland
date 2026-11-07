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
    console.log(
      `It' that magical time: Opening Time. Virtually Fun Land is now open for business. Please make your way forward and head into the admission lines. `,
    );
  }

  closePark() {
    console.log(
      `Attention Guests: The park is now closed. Please kindly make your ways towards the exits in an orderly fashion. `,
    );
  }
}

export const parkManager = ParkManager.getInstance();
