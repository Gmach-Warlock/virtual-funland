import { Guest } from "../model/guest/Guest.js";
import { guestsList } from "../model/guest/GuestsList.js";

export function createGuests() {
  const guestsNames = [
    "Rob Robot",
    "Samus Aranus",
    "Billy Dragon",
    "Cody Lee",
    "Johnny Cage",
    "Solid Snake",
    "Mega Man",
    "Dr Wiley",
    "Dr Robotnik",
    "Sonya Blade",
    "Chun Li",
    "M Bison",
    "Super Joe",
  ];
  const guests = guestsNames.map((name) => new Guest(name));
  return guests;
}

export function seedGuests(startingGuests = createGuests()) {
  startingGuests.forEach((guest) => {
    guestsList.addGuest(guest);
  });
  console.log(`A decent crowd of people showed up at opening. `);
}
