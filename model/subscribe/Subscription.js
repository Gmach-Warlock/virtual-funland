import { addItemToArray } from "../../controller/general/CRUDHelpers.js";
import {
  changeSubscriber,
  logSubscriber,
  subscribersArr,
} from "../../controller/subscription/subscribers.js";

export class Subscription {
  #subscribers;

  constructor() {
    this.#subscribers = [];
    this.subscribe(changeSubscriber);
    this.subscribe(logSubscriber);
  }

  get subscribers() {
    return this.#subscribers;
  }
  set subscribers(newSubscribers) {
    this.#subscribers = newSubscribers;
  }
  build() {
    subscribersArr.forEach((sub) => {
      this.subscribe(sub);
    });
  }

  notify(reason) {
    this.#subscribers.forEach((subscriber) => {
      subscriber(reason);
    });
  }

  subscribe(subscriber) {
    if (!subscriber) {
      console.log("Subscriber is undefined");
      return;
    }
    this.#subscribers = addItemToArray(this.#subscribers, subscriber);
  }
}

export const parkSubscription = new Subscription();
