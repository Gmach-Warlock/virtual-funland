import { parkManager } from "../../model/park/ParkManager.js";
import { parkSubscription } from "../../model/subscribe/Subscription.js";

export function parkInitializer() {
  parkManager.startPark();
  parkSubscription.initSubscription();
}
