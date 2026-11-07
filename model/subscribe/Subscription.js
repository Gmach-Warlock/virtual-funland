import { addItemToArray } from "../../controller/general/CRUDHelpers.js";
import { subscribersSeed } from "../../controller/subsciption/subscribers.js";

export class Subscription {
  #subscribers;

  constructor() {
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
