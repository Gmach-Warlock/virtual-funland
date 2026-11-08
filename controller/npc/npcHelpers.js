import { waitingLinePrompt } from "../terminal/prompts/linePrompts.js";
import { lineRushPrompt } from "../terminal/prompts/ridePrompts.js";

export async function formLine(guestsArr, queue) {
  console.log("forming line", guestsArr, queue);
  guestsArr.forEach((guest) => {
    queue.add(guest);
  });
}

export function rng(possible) {
  return Math.floor(Math.random() * possible);
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

export function rankLines(linesObj) {
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
  const ordered = unordered.sort((a, b) => b.len - a.len);
  return ordered;
}

export async function seedLines(arr) {
  const linesObj = await splitUpParty(arr);
  const ranks = rankLines(linesObj);
  return ranks;
}

export function logLines(ordered) {
  lineRushPrompt();
  ordered.forEach((obj) => waitingLinePrompt(obj));
}
