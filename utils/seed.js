import { Guest } from "../model/guest/Guest.js";
import { guestsList } from "../model/guest/GuestsList.js";
import { Ride } from "../model/ride/Ride.js";
import { RideCounter } from "../model/ride/RideCounter.js";
import { RideManager } from "../model/ride/RideManager.js";
import { RideQueue } from "../model/ride/RideQueue.js";

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
}

export function rideSeedFactory(name, duration, max) {
  return {
    name,
    duration,
    max,
  };
}

export function createRidesArray() {
  const rollerCoaster = rideSeedFactory("Command Line Coaster", 60000, 5);
  const waterRide = rideSeedFactory("Frozen Channel", 360000, 10);
  const familyRide = rideSeedFactory("Multi-Threaded Processor", 480000, 10);
  const rides = [rollerCoaster, waterRide, familyRide];
  return rides;
}
