import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { handleLineRush, handleOpeningSeeds } from "./parkHelpers.js";
import { mainMenu, refreshScreen } from "../../view/menu.js";
import { parkQueues } from "../../model/park/ParkQueues.js";
import { returnPotentialRiders } from "../ride/rideHelpers.js";
import { dequeueRiderPrompt } from "../terminal/prompts/ridePrompts.js";

export async function ridesInitializer() {
  console.log("All of the rides are moving with normal wait times");

  parkQueues.queues.forEach((queue) => {
    const durationTime = queue.duration;
    queue.interval = setInterval(() => {
      dequeueRiderPrompt(queue.rideName, queue.head);
      queue.dequeue();
      mainMenu();
    }, durationTime * 60000);
  });
}

function seedTimeouts(interval = 2500, extraArr = []) {
  let step = 4;
  setTimeout(() => {
    parkSubscription.notify("initialize");
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
    if (queue.interval !== null) {
      clearInterval(queue.interval);
    }
  });
}

export function keepLinesRunning() {
  setInterval(() => {
    let potentialRiders = returnPotentialRiders();
    console.log(`need to setup for new line entries`);
  }, 60000);
}
