import { parkQueues } from "../../../model/park/ParkQueues.js";
import { mainMenu } from "../../../view/menu.js";
import { rl } from "../../../view/menu.js";
import {
  registerGuest,
  removeGuest,
  viewGuestDirectory,
} from "../../../features/guest.js";
import { addToRideLine, checkLine } from "../../../features/line.js";
import { ridesCloser } from "../../../features/timers.js";

function viewAttractionDirectory() {
  parkQueues.log();
  mainMenu();
}

async function exitApp() {
  ridesCloser();
  console.log(`Thank you for visiting! 
Please come again!`);
  rl.close();
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
