import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { parkManager } from "../../model/park/ParkManager.js";
import { handleLineRush, handleOpeningSeeds } from "./parkHelpers.js";
import { refreshScreen } from "../../view/menu.js";

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
