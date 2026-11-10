import { addItemToArray } from "../../controller/CRUDHelpers";

export class RideSubscription {
  #subscribers;

  constructor() {
    this.#subscribers = [];
  }

  get subscribers() {
    return this.#subscribers;
  }
  set subscribers(newSubscribers) {
    this.#subscribers = newSubscribers;
  }

  subscribe(subscriber) {
    if (!subscriber) {
      console.log("Subscriber is undefined");
      return;
    }
    this.#subscribers = addItemToArray(subscriber);
  }

  notify(reason) {
    this.#subscribers.forEach((subscriber) => {
      subscriber(reason);
    });
  }
}
