export function findGuestHelper(name, guests) {
  const guest = guests.find((guest) => guest.name === name);
  if (!guest) {
    console.log("no guest with that name (GuestList class)");
    return;
  }
  return guest;
}
