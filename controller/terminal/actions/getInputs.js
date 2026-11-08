import { askQuestion } from "../../../view/menu.js";
import {
  checkNumericInput,
  checkStringInput,
} from "../../general/validation.js";

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
