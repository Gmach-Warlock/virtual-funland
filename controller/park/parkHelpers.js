import { guestsList } from "../../model/guest/GuestsList.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../guest/guestSeeding.js";
import { refreshScreen } from "../../view/menu.js";
import { logLines, seedLines } from "../npc/npcHelpers.js";
import { rideInstances, seedRide } from "../ride/rideSeeding.js";
import { parkQueues } from "../../model/park/ParkQueues.js";

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

export function formLineQueue(obj) {
  const queueToUse = parkQueues.queues.find(
    (queue) => queue.rideName === obj.name,
  );

  if (!queueToUse) {
    console.log("no queue to use");
    return;
  }
  obj.arr.forEach((guest) => queueToUse.add(guest));
}

export async function handleLineRush() {
  const ranks = await seedLines(guestsList.guests);
  console.log("ranks, ", ranks);
  ranks.forEach((obj) => formLineQueue(obj));
  parkQueues.log();
  logLines(ranks);
}

export function parkInitializer() {
  handleOpeningSeeds();
  parkManager.open();
  setTimeout(() => {
    parkSubscription.notify("initialize");
  }, 2500);
  setTimeout(() => {
    parkManager.start();
  }, 5000);
  setTimeout(async () => {
    handleLineRush();
  }, 7500);
  refreshScreen(11000);
}
