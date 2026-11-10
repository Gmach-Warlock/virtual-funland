import { guestsList } from "../guest/GuestsList.js";
import { Rider } from "./Rider.js";

function rideQueueEnqueueHelper(guest, queue) {
  if (queue.counter.count === queue.counter.max) {
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

  queue.counter.count++;
}

function rideQueueDequeueHelper(queue) {
  if (queue.head === null) {
    console.log(`There are no more people in the line for ${queue.ride.name}!`);
    return;
  }
  const removedGuest = guestsList.findGuest(queue.head.name);
  queue.head = queue.head.next;
  queue.counter.count--;
  if (removedGuest) removedGuest.stopWaiting();
}

export class RideQueue {
  #ride;
  #duration;
  #counter;
  #head = null;
  #tail = null;

  constructor(duration) {
    this.#duration = duration;
  }

  get head() {
    return this.#head;
  }
  set head(newHead) {
    this.#head = newHead;
  }
  get tail() {
    return this.#tail;
  }
  set tail(newTail) {
    this.#tail = newTail;
  }
  get ride() {
    return this.#ride;
  }
  set ride(newRide) {
    this.#ride = newRide;
  }
  get duration() {
    return this.#duration;
  }
  set duration(newDuration) {
    this.#duration = newDuration;
  }
  get counter() {
    return this.#counter;
  }
  set counter(newCounter) {
    this.#counter = newCounter;
  }

  enqueue(guest) {
    rideQueueEnqueueHelper(guest, this);
    guest.wait();
  }

  dequeue() {
    rideQueueDequeueHelper(this);
  }

  log() {
    let current = this.#head;
    while (current) {
      if (current) console.log(`rider: ${current.name}`);
      current = current.next;
    }
  }
}
