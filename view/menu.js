import readline from "node:readline";
import { respondToMainMenu } from "../controller/terminal/responseHelpers.js";

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

function checkNumericInput(answer, max) {
  if (answer === "") {
    console.log("Please enter something in the field. ");
    return false;
  }
  if (Number.isNaN(Number(answer))) {
    console.log("Please enter a number here");
    return false;
  }
  if (Number(answer) <= 0 || Number(answer) > max) {
    console.log("Please enter a number within range of the options. ");
    return false;
  }
  return true;
}

export async function getNumericInput(question, max = 6) {
  let answer;
  let answered = false;
  while (!answered) {
    answer = await askQuestion(question);
    if (!checkNumericInput(answer, max)) continue;
    answered = true;
  }
  return answer;
}

function checkStringInput(answer, numGuard) {
  if (answer === "") {
    console.log(`Please enter something in the field. `);
    return false;
  }
  if (/<[^>]*>/.test(answer)) {
    console.log("NO HTML!!");
    return false;
  }
  if (numGuard)
    if (/^\d+$/.test(answer)) {
      console.log("Please use a string not numbers here.");
      return false;
    }
  return true;
}

export async function getStringInput(question, numGuard = true) {
  let answer;
  let answered = false;
  while (!answered) {
    answer = await askQuestion(question);
    if (!checkStringInput(answer, numGuard)) continue;
    answered = true;
  }
  return answer;
}

function openingGreeting() {
  console.log(`
Welcome to Virtually Fun Land, virtually fun for everyone. `);
}

function openingMenu() {
  console.log(`
What's your next destination?

1. Register Guest
2. Remove Guest
2. Ride an attraction
3. Check attraction line
4. 
5. Book a ticket for show
6. Exit
`);
}

export async function mainMenu() {
  openingGreeting();
  openingMenu();
  const answer = await getNumericInput("Please enter the appropriate value: ");
  if (answer) respondToMainMenu(answer);
}

export async function clearScreen() {
  console.clear();
}
