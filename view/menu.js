import readline from "node:readline";

const rl = readline.createInterface({
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

export async function mainMenu() {
  console.log(`Welcome to VirtuallyFunLand
What's your next destination? 

1. Roller Coaster
2. Water Ride
3. Family Ride
4. Merry Go Round
5. Book a ticket for show
6. Exit`);
  const answer = await getNumericInput("Please enter the appropriate value: ");
  if (answer) respondToMainMenu(answer);
}

export async function respondToMainMenu(stringedNumber) {
  const number = Number(stringedNumber);
  const lookup = {
    1: () => console.log("Roller Coaster Coming"),
    2: () => console.log("Roller Coaster Coming"),
    3: () => console.log("Roller Coaster Coming"),
    4: () => console.log("Roller Coaster Coming"),
    5: () => console.log("Roller Coaster Coming"),
    6: () => exitApp(),
  };
  return lookup[number]();
}

export function exitApp() {
  console.log(`Thank you for visiting! 
Please come again!`);
  rl.close();
}
