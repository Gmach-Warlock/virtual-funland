import { guestsList } from "../model/guest/GuestsList.js";
import { parkBanner } from "../controller/prompts.js";
import { viewAttractionDirectory } from "./ride.js";

// guest subscribers and array
export function guestLogSubscriber(type) {
  guestsList.logGuests(type);
}

export function guestChangeSubscriber(type) {
  const lookup = {
    initialize: () => console.log(parkBanner),
    addGuest: () => console.log(` A new guest has entered the park! `),
    removeGuest: () => {
      console.log(`A guest has left the park! `);
    },
  };
  if (Object.keys(lookup).some((key) => key === type)) {
    return lookup[type]();
  }
}

export const guestSubscribersArr = [guestLogSubscriber, guestChangeSubscriber];

// ride subscribers
export function rideLogSubscriber(type) {
  const lookup = {
    addRider: () => console.log("A new rider prompt needed here. "),
    removeRider: () =>
      console.log("A rider got tired of waiting and left the ride. "),
    finishRider: () => console.log(`A rider finished the ride! `),
  };
  if (Object.key(lookup).some((key) => key === type)) {
    return lookup[type];
  }
  viewAttractionDirectory();
}
