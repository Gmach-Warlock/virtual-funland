import { Guest } from "../../model/guest/Guest.js";
import { guestsList } from "../../model/guest/GuestsList.js";

export function createGuests() {
  const guestsNames = [
    "Robo Rob",
    "Samus Space",
    "Billy Draggin",
    "Cody Bee",
    "Ronnie Page",
    "Solid Shark",
    "Mega Boy",
    "Dr Filey",
    "Dr Robotisik",
    "Sonya Horn",
    "Chang Lee",
    "M Bacon",
    "Super Joe",
    "Gale Wizard",
    "Evil Lohse",
    "Luigi Castle",
    "Mario San",
    "Drizz Miorden",
    "Raistlin Marjorum",
    "Kitiara Thuratam",
  ];
  const guests = guestsNames.map((name) => new Guest(name));
  return guests;
}

export function seedGuests(startingGuests = createGuests()) {
  startingGuests.forEach((guest) => {
    guestsList.addGuest(guest);
  });
}
