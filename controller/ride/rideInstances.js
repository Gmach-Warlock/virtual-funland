import { Ride } from "../../model/ride/Ride.js";
import { RideCounter } from "../../model/ride/RideCounter.js";
import { RideManager } from "../../model/ride/RideManager.js";
import { RideQueue } from "../../model/ride/RideQueue.js";

const clc = "Command Line Coaster";
export const commandLineCoaster = new Ride(clc, 60000);
export const clcCounter = new RideCounter(clc, 5);
export const clcQueue = new RideQueue(clc);
export const clcManager = new RideManager(
  commandLineCoaster,
  clcQueue,
  clcCounter,
);

const fc = "Frozen Channel";
export const frozenChannel = new Ride(fc, 240000);
export const fcCounter = new RideCounter(fc, 10);
export const fcQueue = new RideQueue(fc);
export const fcManager = new RideManager(frozenChannel, fcQueue, fcCounter);

const mtp = "Multi-Threaded Processor";
export const multiThreadedProcessor = new Ride(mtp, 360000);
export const mtpCounter = new RideCounter(mtp, 15);
export const mtpQueue = new RideQueue(mtp);
export const mtpManager = new RideManager(
  multiThreadedProcessor,
  mtpQueue,
  mtpCounter,
);
