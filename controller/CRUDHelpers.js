export function addItemToArray(arr, itm) {
  if (!Array.isArray(arr) || !itm) return arr;
  const newArray = [...arr, itm];
  return newArray;
}

export function removeItemFromArray(arr, itm) {
  if (!Array.isArray(arr) || !itm) return;
  const newArray = arr.filter((item) => item.id !== itm.id);
  return newArray;
}
