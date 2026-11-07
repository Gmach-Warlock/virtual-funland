import { guestsList } from "../../model/guest/GuestsList.js";
import { seedGuests } from "../../utils/seed.js";

function logSubscriber(type) {
  guestsList.logGuests();
}

function seedSubscriber(type) {
  if (type === "initialize") {
    seedGuests();
  }
}

export const subscribersSeed = [
  seedSubscriber("initialize"),
  logSubscriber("initialize"),
];
