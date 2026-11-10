import { parkQueues } from "../model/park/ParkQueues.js";
import { guestSubscription } from "../model/guest/GuestSubscription.js";
import { parkManager } from "../model/park/ParkManager.js";
import { mainMenu, refreshScreen } from "../view/menu.js";
import { dequeueRiderPrompt, returnPotentialRiders } from "./ride.js";
import { handleLineRush, handleOpeningSeeds } from "./park.js";

export async function ridesInitializer() {
  console.log("All of the rides are moving with normal wait times");

  parkQueues.queues.forEach((queue) => {
    const durationTime = queue.duration;
    queue.ride.interval = setInterval(() => {
      dequeueRiderPrompt(queue.rideName, queue.head);
      queue.dequeue();
      mainMenu();
    }, durationTime * 60000);
  });
}

function seedTimeouts(interval = 2500, extraArr = []) {
  let step = 4;
  setTimeout(() => {
    guestSubscription.notify("initialize");
  }, interval);
  setTimeout(() => {
    parkManager.start();
  }, interval * 2);
  setTimeout(async () => {
    handleLineRush();
    ridesInitializer();
  }, interval * 3);
  extraArr.forEach((callback) => {
    setTimeout(callback, interval * step);
    step++;
  });
}

export function parkInitializer(interval = 2000, numOfTimeouts = 3) {
  handleOpeningSeeds();
  parkManager.open();
  seedTimeouts(interval);
  refreshScreen(interval * (numOfTimeouts + 1));
}

export function ridesCloser() {
  parkQueues.queues.forEach((queue) => {
    if (queue.ride.interval !== null) {
      clearInterval(queue.ride.interval);
    }
  });
}

export function keepLinesRunning() {
  setInterval(() => {
    let potentialRiders = returnPotentialRiders();
    console.log(`need to setup for new line entries`);
  }, 60000);
}
