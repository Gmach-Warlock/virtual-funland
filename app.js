import { parkInitializer } from "./controller/park/parkHelpers.js";
import { clearScreen, mainMenu } from "./view/menu.js";

parkInitializer();

setTimeout(() => {
  clearScreen();
  mainMenu();
}, 2500);
