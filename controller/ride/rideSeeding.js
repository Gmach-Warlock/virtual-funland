import { parkCounters } from "../../model/park/ParkCounters.js";
import { juniorManagers } from "../../model/park/ParkJuniors.js";
import { parkQueues } from "../../model/park/ParkQueues.js";
import { parkRides } from "../../model/park/ParkRides.js";
import { Ride } from "../../model/ride/Ride.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import { RideManager } from "../../model/ride/RideManager.js";
import { RideQueue } from "../../model/ride/RideQueue.js";

export function rideInstancesFactory(name, duration, max) {
  const newRide = new Ride(name, duration);
  const newCounter = new RideCounter(name, max);
  const newQueue = new RideQueue(name);
  const newManager = new RideManager(newRide, newQueue, newCounter);
  const newObj = {
    [`${name} Ride`]: newRide,
    [`${name} Counter`]: newCounter,
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
    if (key.toLowerCase().includes("counter")) {
      parkCounters.add(value);
    }
    if (key.toLowerCase().includes("queue")) {
      parkQueues.add(value);
    }
    if (key.toLowerCase().includes("manager")) {
      juniorManagers.add(value);
    }
  }
}

export const clcObj = rideInstancesFactory("Command Line Coaster", 2, 3);
export const fcObj = rideInstancesFactory("Frozen Channel", 5, 5);
export const mtpObj = rideInstancesFactory("Multi Threaded Processor", 10, 10);
export const rideInstances = [clcObj, fcObj, mtpObj];
