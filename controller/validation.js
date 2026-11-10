import { askQuestion } from "../view/menu.js";

export function itemExists(arr, prop, value) {
  if (!Array.isArray(arr) || !value) return false;
  if (!arr.some((item) => item[prop] === value)) {
    return false;
  }
  return true;
}

export function checkNumericInput(answer, max) {
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

export function checkStringInput(answer, numGuard) {
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
