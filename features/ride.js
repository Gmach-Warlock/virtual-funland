import { parkQueues } from "../model/park/ParkQueues.js";
import { parkRides } from "../model/park/ParkRides.js";
import { Ride } from "../model/ride/Ride.js";
import { RideManager } from "../model/ride/RideManager.js";
import { RideQueue } from "../model/ride/RideQueue.js";
import { guestsList } from "../model/guest/GuestsList.js";
import { RideCounter } from "../model/ride/RideCounter.js";
import { parkCounters } from "../model/park/ParkCounters.js";

// prompts
export function openRidePrompt(name, duration, max) {
  console.log(`
           Attention Guests, 
${name} is now open to ride!! 
        Everyone come on down!! 
The length of the attraction is ${duration} minute${duration > 1 ? "s" : ""}.
It has a maximum line capacity of ${max} people.
        `);
}
export function dequeueRiderPrompt(rideName, guest) {
  console.log(`
${rideName} has now started. 
${guest.next.name} has boarded the ride,  and ${guest.name} is now departing. `);
}
export function viewAttractionDirectory() {
  parkQueues.log();
  mainMenu();
}

// factory & seed
function rideInstancesFactory(name, duration, max) {
  const newRide = new Ride(name, duration);
  const newCounter = new RideCounter(newRide, max);
  const newQueue = new RideQueue(duration);
  newRide.counter = newCounter;
  newQueue.counter = newCounter;
  newQueue.ride = newRide;
  const newManager = new RideManager(newRide, newQueue, newCounter);
  const newObj = {
    [`${name} Ride`]: newRide,
    [`${name} Counter`]: newCounter,
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
// seeds
function seedRide(rideObj) {
  for (const key of Object.keys(rideObj)) {
    const value = rideObj[key];
    if (key.toLowerCase().includes("ride")) {
      parkRides.add(value);
    }
  }
}
function seedQueue(rideObj) {
  for (const key of Object.keys(rideObj)) {
    const value = rideObj[key];
    if (key.toLowerCase().includes("queue")) {
      parkQueues.add(value);
    }
  }
}
function seedCounter(rideObj) {
  for (const key of Object.keys(rideObj)) {
    const value = rideObj[key];
    if (key.toLowerCase().includes("counter")) {
      parkCounters.add(value);
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

export function seedCounters() {
  rideInstances.forEach((obj) => {
    seedCounter(obj);
  });
}

export function returnPotentialRiders() {
  const arr = guestsList.guests;
  if (!arr.some((guest) => guest.waiting === false)) {
    console.log("Everyone is in line right now!!!");
    return [];
  }
  const potentialRiders = arr.filter((guest) => guest.waiting === false);
  return potentialRiders;
}
