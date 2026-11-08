import { guestsList } from "../../model/guest/GuestsList.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../../utils/seed.js";
import { refreshScreen } from "../../view/menu.js";
import { seedLines } from "../npc/npcHelpers.js";
import { rideInstances, seedRide } from "../ride/rideInstances.js";

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen(2000, true);
}

export function seedRiders() {
  rideInstances.forEach((ride) => seedRide(ride));
}

export function handleOpeningSeeds() {
  seedGuests();
  seedRiders();
  seedLines(guestsList.guests);
}

export function parkInitializer() {
  handleOpeningSeeds();
  parkManager.startPark();
  setTimeout(() => {
    parkSubscription.notify("initialize");
  }, 2500);

  refreshScreen(6250);
}
