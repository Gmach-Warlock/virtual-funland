import { parkQueues } from "../model/park/ParkQueues.js";
import { parkRides } from "../model/park/ParkRides.js";
import { Ride } from "../model/ride/Ride.js";
import { RideManager } from "../model/ride/RideManager.js";
import { RideQueue } from "../model/ride/RideQueue.js";
import { Rider } from "../model/ride/Rider.js";
import { guestsList } from "../model/guest/GuestsList.js";

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

function rideInstancesFactory(name, duration, max) {
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

export function returnPotentialRiders() {
  const arr = guestsList.guests;
  if (!arr.some((guest) => guest.waiting === false)) {
    console.log("Everyone is in line right now!!!");
    return [];
  }
  const potentialRiders = arr.filter((guest) => guest.waiting === false);
  return potentialRiders;
}

export function rideQueueEnqueueHelper(guest, queue) {
  if (queue.count === queue.max) {
    console.log(
      `The line is currently full for ${queue.rideName}. Please try again later.`,
    );
  }
  const newRider = new Rider(guest.name);
  if (queue.head === null && queue.tail === null) {
    queue.head = newRider;
    queue.tail = newRider;
  }
  if (queue.head !== null && queue.tail !== null) {
    const temp = queue.tail;
    if (temp) queue.tail = newRider;
    temp.next = newRider;
  }

  queue.count++;
}

export function rideQueueDequeueHelper(queue) {
  if (queue.head === null) {
    console.log(`There are no more people in the line for ${queue.rideName}!`);
    return;
  }
  const removedGuest = guestsList.findGuest(queue.head.name);
  queue.head = queue.head.next;
  queue.count--;
  if (removedGuest) removedGuest.stopWaiting();
}
