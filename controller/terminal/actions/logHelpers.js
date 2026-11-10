import { guestPrompt } from "../prompts/responsePrompts.js";

export function parkQueueLogStartPrompt() {
  console.log(`Rides and their current riders
        `);
}

export function parkQueuesLogHelper(queues) {
  parkQueueLogStartPrompt();
  queues.forEach((queue) => {
    console.log(`= = = = = = = = = = = = = = = = = = = = =
${queue.rideName}
      `);
    let current = queue.head;
    while (current) {
      console.log(`${current.name}`);
      current = current.next;
    }
    console.log(
      `       
Total Wait Time: ${queue.duration * queue.count} minutes`,
    );
  });
  console.log(`= = = = = = = = = = = = = = = = = = = = =`);
}

export function guestListLogHelper(type, guests) {
  if (type === "initialize") console.log(guestPrompt(type));

  if (type !== "initiliaze")
    console.log(`Here are the current Guests
      `);
  console.log(`Guests List: `);
  guests.forEach((guest) => {
    if (guest) console.log(`Guest: `, guest.name);
  });
}
