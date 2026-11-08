import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";
import { seedGuests } from "../../utils/seed.js";
import { refreshScreen } from "../../view/menu.js";
import { rideInstances, seedRide } from "../ride/rideInstances.js";

export function parkUpdater(reason) {
  parkSubscription.notify(reason);
  refreshScreen(2000, true);
}

export function parkInitializer() {
  seedGuests();
  rideInstances.forEach((ride) => seedRide(ride));
  parkManager.startPark();
  setTimeout(() => {
    parkSubscription.notify("initialize");
  }, 2500);

  refreshScreen(6250);
}
