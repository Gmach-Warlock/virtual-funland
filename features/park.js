import { parkQueues } from "../model/park/ParkQueues.js";
import { parkSubscription } from "../model/subscribe/Subscription.js";
import { seedGuests } from "./guest.js";
import { seedQueues, seedRiders } from "./ride.js";
import { refreshScreen } from "../view/menu.js";
import { logLines, seedLines } from "../controller/npc/npcHelpers.js";

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen(2000, true);
}

export async function handleOpeningSeeds() {
  seedGuests();
  seedRiders();
  seedQueues();
}

function formLineQueue(obj) {
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
