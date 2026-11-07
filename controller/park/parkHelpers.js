import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../../utils/seed.js";
import { refreshScreen } from "../../view/menu.js";

export function parkInitializer() {
  seedGuests();
  parkManager.startPark();
  setTimeout(() => {
    parkSubscription.notify("initialize");
  }, 2000);
  refreshScreen(4250);
}

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen();
}
