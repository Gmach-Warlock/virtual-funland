import { Rider } from "../../model/ride/Rider.js";
import { guestsList } from "../../model/guest/GuestsList.js";

export function returnPotentialRiders() {
  const arr = guestsList.guests;
  if (!arr.some((guest) => guest.waiting === false)) {
    console.log("Everyone is in line right now!!!");
    return [];
  }
  const potentialRiders = arr.filter((guest) => guest.waiting === false);
  return potentialRiders;
}

export function rideQueueEnqueueHelper(
  guest,
  rideName,
  count,
  max,
  head,
  tail,
) {
  if (count === max) {
    console.log(
      `The line is currently full for ${rideName}. Please try again later.`,
    );
  }
  const newRider = new Rider(guest.name);
  if (head === null && tail === null) {
    head = newRider;
    tail = newRider;
  }
  if (head !== null && tail !== null) {
    const temp = tail;
    if (temp) tail = newRider;
    temp.next = newRider;
  }

  count++;
}

export function dequeue(queue) {
  if (queue.head === null) {
    console.log(`There are no more people in the line for ${queue.rideName}!`);
    return;
  }
  const removedGuest = guestsList.findGuest(queue.head.name);
  queue.head = queue.head.next;
  queue.count--;
  if (removedGuest) removedGuest.stopWaiting();
}
