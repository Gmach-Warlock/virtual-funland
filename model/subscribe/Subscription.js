import { addItemToArray } from "../../controller/general/CRUDHelpers.js";
import { subscribersSeed } from "../../controller/subscription/subscribers.js";

export class Subscription {
  #subscribers;

  constructor() {}

  get subscribers() {
    return this.#subscribers;
  }
  initSubscription() {
    subscribersSeed.forEach((subscriber) => {
      this.subscribe(subscriber);
    });
  }

  notify(reason) {
    this.#subscribers.forEach((subscriber) => {
      subscriber(reason);
    });
  }

  subscribe(subscriber) {
    this.#subscribers = addItemToArray(this.#subscribers, subscriber);
  }
}

export const parkSubscription = new Subscription();
