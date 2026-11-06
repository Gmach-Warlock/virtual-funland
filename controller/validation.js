export function itemExists(arr, prop, value) {
  if (!Array.isArray(arr) || !value) return false;
  if (!arr.some((item) => item[prop] === value)) {
    return false;
  }
  return true;
}
