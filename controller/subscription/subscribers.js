import { guestsList } from "../../model/guest/GuestsList.js";
import { seedGuests } from "../../utils/seed.js";

export function logSubscriber(type) {
  guestsList.logGuests(type);
}

export function seedSubscriber(type) {
  console.log("start it up");
  if (type === "initialize") {
    seedGuests();
  }
}

export const subscribersSeed = [
  seedSubscriber("initialize"),
  logSubscriber("initialize"),
];
