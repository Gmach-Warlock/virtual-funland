import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../guest/guestSeeding.js";
import { refreshScreen } from "../../view/menu.js";
import { logLines, seedLines } from "../npc/npcHelpers.js";
import { seedQueues, seedRiders } from "../ride/rideSeeding.js";
import { parkQueues } from "../../model/park/ParkQueues.js";

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen(2000, true);
}

export async function handleOpeningSeeds() {
  seedGuests();
  seedRiders();
  seedQueues();
}

export function formLineQueue(obj) {
  const queueToUse = parkQueues.queues.find(
    (queue) => queue.rideName === obj.name,
  );

  if (!queueToUse) {
    console.log("no queue to use");
    return;
  }
  obj.arr.forEach((guest) => {
    queueToUse.enqueue(guest);
  });
}

export async function handleLineRush() {
  const ranks = await seedLines();
  ranks.forEach((obj) => formLineQueue(obj));
  logLines(ranks);
  parkQueues.log();
}
