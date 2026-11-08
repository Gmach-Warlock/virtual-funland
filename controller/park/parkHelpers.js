import { guestsList } from "../../model/guest/GuestsList.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../guest/guestSeeding.js";
import { refreshScreen } from "../../view/menu.js";
import { logLines, seedLines } from "../npc/npcHelpers.js";
import { rideInstances, seedRide } from "../ride/rideSeeding.js";

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen(2000, true);
}

export function seedRiders() {
  rideInstances.forEach((ride) => seedRide(ride));
}

export async function handleOpeningSeeds() {
  seedGuests();
  seedRiders();
}

export async function handleLineRush() {}

export function parkInitializer() {
  handleOpeningSeeds();
  parkManager.open();
  setTimeout(() => {
    parkSubscription.notify("initialize");
  }, 2500);
  setTimeout(() => {
    parkManager.start();
  }, 3300);
  setTimeout(async () => {
    const ranks = await seedLines(guestsList.guests);
    logLines(ranks);
  }, 5000);
  refreshScreen(6900);
}
