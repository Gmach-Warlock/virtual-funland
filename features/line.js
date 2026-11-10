import { guestsList } from "../model/guest/GuestsList.js";
import { parkQueues } from "../model/park/ParkQueues.js";
import { denyAndReturn, mainMenu } from "../view/menu.js";
import { getStringInput, getNumericInput } from "../controller/validation.js";
import { clcObj, fcObj, mtpObj } from "./ride.js";
import { ridePrompts } from "../controller/prompts.js";
import { rng } from "../controller/RNGHelpers.js";

export async function addToRideLine(guest) {
  const ride = await getNumericInput(ridePrompts("add"), 3);
  const guestName = await getStringInput(
    `What is the name of the guest to add to the line? `,
  );
  if (!guestsList.guests.some((guest) => guest.name === guestName)) {
    denyAndReturn(
      "There is no guest here with that name at this time. Returning. ",
    );
  }
  const lookup = {
    1: () =>
      clcObj["Command Line Coaster Queue"].add(
        guest,
        clcObj["Command Line Coaster Counter"],
      ),
    2: () =>
      fcObj["Frozen Channel Queue"].add(guest, fcObj["Frozen Channel Counter"]),
    3: () =>
      mtpObj["Multi Threaded Processor Queue"].addGuest(
        guest,
        mtpObj["Multi Threaded Processor Counter"],
      ),
  };
  console.log("Need to add and use, ", clcObj["Command Line Coaster Queue"]);
  lookup[ride]();
  mainMenu();
}

export function checkLine() {
  parkQueues.log();
  mainMenu();
}

export function lineRushPrompt() {
  console.log(`
The current guests race to their favorite rides!
`);
}

export function waitingLinePrompt(obj) {
  console.log(`The ${obj.name} has ${obj.len} people in line after the rush. `);
  const names = [];
  obj.arr.forEach((guest) => {
    names.push(guest.name);
  });
  names[names.length - 1] = `and ${names[names.length - 1]}`;
  const string = names.join(`, `);
  console.log(
    string,
    `are lined up.
  `,
  );
}

async function splitUpParty(arr) {
  const clcNPCs = [];
  const fcNPCs = [];
  const mtpNPCs = [];
  const arrayObj = {
    0: clcNPCs,
    1: fcNPCs,
    2: mtpNPCs,
  };
  arr.forEach((guest) => {
    arrayObj[String(rng(3))].push(guest);
  });
  const obj = {
    clcNPCs,
    fcNPCs,
    mtpNPCs,
  };
  return obj;
}

function creaateUnorderedRanks(linesObj) {
  const clc = {
    name: "Command Line Coaster",
    len: linesObj.clcNPCs.length,
    arr: linesObj.clcNPCs,
  };
  const fc = {
    name: "Frozen Channel",
    len: linesObj.fcNPCs.length,
    arr: linesObj.fcNPCs,
  };
  const mtp = {
    name: "Multi Threaded Processor",
    len: linesObj.mtpNPCs.length,
    arr: linesObj.mtpNPCs,
  };
  const unordered = [clc, fc, mtp];
  return unordered;
}

function rankLines(linesObj) {
  const unordered = creaateUnorderedRanks(linesObj);
  const ordered = unordered.sort((a, b) => b.len - a.len);
  return ordered;
}

export async function seedLines(arr = guestsList.guests) {
  const linesObj = await splitUpParty(arr);
  const ranks = rankLines(linesObj);
  return ranks;
}

export function logLines(ordered) {
  lineRushPrompt();
  ordered.forEach((obj) => waitingLinePrompt(obj));
}
