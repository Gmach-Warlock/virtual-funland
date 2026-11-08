import readline from "node:readline";
import { respondToMainMenu } from "../controller/terminal/responseHelpers.js";
import {
  openingGreeting,
  openingMenu,
} from "../controller/terminal/openingPrompts.js";
import { getNumericInput } from "../controller/terminal/getInputs.js";

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
