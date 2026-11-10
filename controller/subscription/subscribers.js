import { guestsList } from "../../model/guest/GuestsList.js";
import { parkBanner } from "../terminal/prompts/bannerPrompts.js";

export function logSubscriber(type) {
  guestsList.logGuests(type);
}

export function changeSubscriber(type) {
  const lookup = {
    initialize: () => console.log(parkBanner),
    add: () => console.log(` A new guest has entered the park! `),
  };
  if (Object.keys(lookup).some((key) => key === type)) {
    return lookup[type]();
  }
}

export const subscribersArr = [logSubscriber, changeSubscriber];
