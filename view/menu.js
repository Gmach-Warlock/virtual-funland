import readline from "node:readline";
import { openingGreeting, openingMenu } from "../controller/prompts.js";
import { getNumericInput } from "../controller/validation.js";
import {
  registerGuest,
  removeGuest,
  viewGuestDirectory,
} from "../features/guest.js";
import { addToRideLine, checkLine } from "../features/line.js";
import { viewAttractionDirectory } from "../features/ride.js";
import { exitApp } from "../features/park.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

export async function respondToMainMenu(stringedNumber) {
  const number = Number(stringedNumber);
  const lookup = {
    1: () => registerGuest(),
    2: () => removeGuest(),
    3: () => viewGuestDirectory(),
    4: () => addToRideLine(),
    5: () => checkLine(),
    6: () => viewAttractionDirectory(),
    7: () => exitApp(),
  };
  return lookup[number]();
}

export async function mainMenu() {
  openingGreeting();
  openingMenu();
  const answer = await getNumericInput(
    "Please enter the appropriate value: ",
    7,
  );
  if (answer) respondToMainMenu(answer);
}

export async function clearScreen() {
  console.clear();
}

export function refreshScreen(time = 2500, clear = false) {
  setTimeout(() => {
    if (clear) clearScreen();
    mainMenu();
  }, time);
}

export function denyAndReturn(message) {
  console.log(message);
  mainMenu();
}
