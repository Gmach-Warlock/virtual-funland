export function openRidePrompt(name, duration) {
  console.log(`
           Attention Guests, 
${name} is now open to ride!! 
        Everyone come on down!! 
The length of the attraction is ${duration} minutes
        `);
}

export function lineRushPrompt(linesObj) {
  console.log(`The current guests race to their favorit rides!
`);
}
