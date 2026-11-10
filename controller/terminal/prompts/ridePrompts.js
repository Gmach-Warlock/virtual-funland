export function openRidePrompt(name, duration, max) {
  console.log(`
           Attention Guests, 
${name} is now open to ride!! 
        Everyone come on down!! 
The length of the attraction is ${duration} minute${duration > 1 ? "s" : ""}.
It has a maximum line capacity of ${max} people.
        `);
}

export function lineRushPrompt(linesObj) {
  console.log(`
The current guests race to their favorite rides!
`);
}

export function dequeueRiderPrompt(rideName, guest) {
  console.log(`
${rideName} has now started. 
${guest.next.name} has boarded the ride,  and ${guest.name} is now departing. `);
}
