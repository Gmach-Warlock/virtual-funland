import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { handleLineRush, handleOpeningSeeds } from "./parkHelpers.js";
import { refreshScreen } from "../../view/menu.js";
import { parkQueues } from "../../model/park/ParkQueues.js";

export function ridesInitializer() {
  console.log("All of the rides are moving with normal wait times");
  parkQueues.queues.forEach((queue) => {
    const durationTime = queue.duration;
    queue.interval = setInterval(() => {
      queue.dequeue();
    }, durationTime * 60000);
  });
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
    ridesInitializer();
  }, 7500);
  refreshScreen(11000);
}

export function ridesCloser() {
  parkQueues.queues.forEach((queue) => {
    if (queue.interval !== null) {
      clearInterval(queue.interval);
    }
  });
}
