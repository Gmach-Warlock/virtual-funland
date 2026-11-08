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
