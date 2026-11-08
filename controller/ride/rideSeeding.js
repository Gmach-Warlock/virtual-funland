import { parkQueues } from "../../model/park/ParkQueues.js";
import { parkRides } from "../../model/park/ParkRides.js";
import { Ride } from "../../model/ride/Ride.js";
import { RideManager } from "../../model/ride/RideManager.js";
import { RideQueue } from "../../model/ride/RideQueue.js";

export function rideInstancesFactory(name, duration, max) {
  const newRide = new Ride(name, duration);
  const newQueue = new RideQueue(name, max);
  const newManager = new RideManager(newRide, newQueue);
  const newObj = {
    [`${name} Ride`]: newRide,
    [`${name} Queue`]: newQueue,
    [`${name} Manager`]: newManager,
  };
  return newObj;
}

export function seedRide(rideObj) {
  for (const key of Object.keys(rideObj)) {
    const value = rideObj[key];
    if (key.toLowerCase().includes("ride")) {
      parkRides.add(value);
    }
    if (key.toLowerCase().includes("queue")) {
      parkQueues.add(value);
    }
  }
}

export const clcObj = rideInstancesFactory("Command Line Coaster", 2, 10);
export const fcObj = rideInstancesFactory("Frozen Channel", 5, 10);
export const mtpObj = rideInstancesFactory("Multi Threaded Processor", 10, 10);
export const rideInstances = [clcObj, fcObj, mtpObj];

export function initializeParkRides() {
  rideInstances.forEach((ride) => {
    parkRides.add(ride);
  });
}
