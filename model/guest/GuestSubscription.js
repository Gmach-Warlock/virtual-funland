import { addItemToArray } from "../../controller/CRUDHelpers.js";
import {
  guestLogSubscriber,
  guestChangeSubscriber,
  guestSubscribersArr,
} from "../../features/subscriptions.js";

export class GuestSubscription {
  #subscribers;

  constructor() {
    this.#subscribers = [];
    this.subscribe(guestChangeSubscriber);
    this.subscribe(guestLogSubscriber);
  }

  get subscribers() {
    return this.#subscribers;
  }
  set subscribers(newSubscribers) {
    this.#subscribers = newSubscribers;
  }
  build() {
    guestSubscribersArr.forEach((sub) => {
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

export const guestSubscription = new GuestSubscription();
