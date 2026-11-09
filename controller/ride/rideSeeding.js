import { parkQueues } from "../../model/park/ParkQueues.js";
import { parkRides } from "../../model/park/ParkRides.js";
import { Ride } from "../../model/ride/Ride.js";
import { RideManager } from "../../model/ride/RideManager.js";
import { RideQueue } from "../../model/ride/RideQueue.js";

export function rideInstancesFactory(name, duration, max) {
  const newRide = new Ride(name, duration, max);
  const newQueue = new RideQueue(name, duration, max);
  const newManager = new RideManager(newRide, newQueue);
  const newObj = {
    [`${name} Ride`]: newRide,
    [`${name} Queue`]: newQueue,
    [`${name} Manager`]: newManager,
  };
  return newObj;
}
// create the rides from the factory
export const clcObj = rideInstancesFactory("Command Line Coaster", 1, 20);
export const fcObj = rideInstancesFactory("Frozen Channel", 2, 15);
export const mtpObj = rideInstancesFactory("Multi Threaded Processor", 3, 25);
export const rideInstances = [clcObj, fcObj, mtpObj];

function seedRide(rideObj) {
  for (const key of Object.keys(rideObj)) {
    const value = rideObj[key];
    if (key.toLowerCase().includes("ride")) {
      parkRides.add(value);
    }
  }
}

function seedQueue(ridObj) {
  for (const key of Object.keys(ridObj)) {
    const value = ridObj[key];
    if (key.toLowerCase().includes("queue")) {
      parkQueues.add(value);
    }
  }
}
export function seedRiders() {
  rideInstances.forEach((obj) => {
    seedRide(obj);
  });
}

export function seedQueues() {
  rideInstances.forEach((obj) => {
    seedQueue(obj);
  });
}

export function initParkQueues() {
  rideInstances.forEach((obj) => {
    seedQueue(obj);
  });
}
