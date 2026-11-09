import { randomGuests, theRegulars } from "../../assets/guestNames.js";
import { Guest } from "../../model/guest/Guest.js";
import { guestsList } from "../../model/guest/GuestsList.js";
import { pullRandomsByAmount } from "../general/RNGHelpers.js";

export function createGuests() {
  const regulars = theRegulars.map((name) => new Guest(name));
  const randoms = pullRandomsByAmount(randomGuests).map(
    (name) => new Guest(name),
  );
  return [...regulars, ...randoms];
}

export function seedGuests(startingGuests = createGuests()) {
  startingGuests.forEach((guest) => {
    guestsList.addGuest(guest);
  });
}
