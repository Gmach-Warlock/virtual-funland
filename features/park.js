import { parkQueues } from "../model/park/ParkQueues.js";
import { guestSubscription } from "../model/guest/GuestSubscription.js";
import { seedGuests } from "./guest.js";
import { seedCounters, seedQueues, seedRiders } from "./ride.js";
import { rl, refreshScreen } from "../view/menu.js";
import { logLines, seedLines } from "./line.js";
import { ridesCloser } from "./timers.js";

export function parkUpdater(reason) {
  guestSubscription.notify(reason);
  refreshScreen(2000);
}

export async function handleOpeningSeeds() {
  seedGuests();
  seedRiders();
  seedQueues();
  seedCounters();
}

function formLineQueue(obj) {
  const queueToUse = parkQueues.queues.find(
    (queue) => queue.ride.name === obj.name,
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

export async function exitApp() {
  ridesCloser();
  console.log(`Thank you for visiting! 
Please come again!`);
  rl.close();
}
