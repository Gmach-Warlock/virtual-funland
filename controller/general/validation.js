export function itemExists(arr, prop, value) {
  if (!Array.isArray(arr) || !value) return false;
  if (!arr.some((item) => item[prop] === value)) {
    return false;
  }
  return true;
}
export function checkNumericInput(answer, max) {
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

export function checkStringInput(answer, numGuard) {
  if (answer === "") {
    console.log(`Please enter something in the field. `);
    return false;
  }
  if (/<[^>]*>/.test(answer)) {
    console.log("NO HTML!!");
    return false;
  }
  if (numGuard)
    if (/^\d+$/.test(answer)) {
      console.log("Please use a string not numbers here.");
      return false;
    }
  return true;
}
