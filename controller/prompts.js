export function openParkPrompt() {
  console.log(`
      <==It's that magical time: Opening Time!!!==>
      Virtually Fun Land is now open for business!! 
      |                     |                     |
      |                     |                     |
      |                     |                     |
      |                     |                     |
      |                     |                     |
      | | | | | | | | | | | | | | | | | | | | | | |

Please make your way forward and head into the admission lines. `);
}

export const parkBanner = `
              <---- Virtually Fun Land ---->
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
|     |     |     |     |     |     |     |     |     |     
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
            <---- Virtually Entertaining ---->

`;

export function openingGreeting() {
  console.log(`
Welcome to Virtually Fun Land, virtually fun for everyone. `);
}

export function openingMenu() {
  console.log(`
What's your next destination?

1. Register Guest
2. Remove Guest
3. Look at Guest Directory
4. Ride an attraction
5. Check attraction line
6. Look at Attraction Directory
7. Exit
`);
}

export function closeParkPrompt() {
  console.log(`
    <==Attention Everyone : It's Closing Time!!!==>
        Virtually Fun Land is now closed!! 
    |                    |                      |
    |      {     }       |       {      }       |
    |                    |                      |
    |                    |                      |
    |                    |                      |
    | | | | | | | | | | | | | | | | | | | | | | |

Please head to the exits in a calm and orderly fashion. 
        We appreciate you coming and visiting!
        And hope you come back again!!!!`);
}

export function guestPrompt(type) {
  const lookup = {
    initialize: `A decent crowd of people showed up at the opening
    `,
    add: "What is the name of the new guest? ",
    remove: "What is the name of the guest who is checking out for the day? ",
    view: "Here is a list of the guests currently in attendance: ",
    lineIn: "Who is going to get in line? ",
    lineOut: "Who is getting out of line?",
  };
  return lookup[type];
}

export function linePrompts(type, name) {
  const lookup = {
    add: `What is the name of the ride the ${name} wants to ride? `,
    remove: `What is the name of the ride ${name} wants to leave the line for?`,
    view: "Here are the people currently in that line: ",
    lineIn: `${name} has gotten in line`,
    lineOut: `${name} has decided to get out of line. Too much time...`,
  };
  return lookup[type];
}

export function ridePrompts(type) {
  const lookup = {
    add: `
Which ride is the person getting on?
    
1. Command Line Coaster
2. Frozen Channel
3. Multi Threaded Processor

Please choose the appropriate value: `,
    remove:
      "What is the name of the guest who wants to leave the line they are in?",
    view: "",
    lineIn: "",
    lineOut: "",
  };
  return lookup[type];
}
