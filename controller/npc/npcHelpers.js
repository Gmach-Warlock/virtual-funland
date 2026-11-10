import { guestsList } from "../../model/guest/GuestsList.js";
import { lineRushPrompt, waitingLinePrompt } from "../../features/line.js";
import { rng } from "../general/RNGHelpers.js";

export async function formLine(guestsArr, queue) {
  console.log("forming line", guestsArr, queue);
  guestsArr.forEach((guest) => {
    queue.add(guest);
  });
}

export async function splitUpParty(arr) {
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

export function rankLines(linesObj) {
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
