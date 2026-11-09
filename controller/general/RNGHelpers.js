export function randomizeArray(arr, num = arr.length) {
  const copyArr = [...arr];
  const newArr = [];

  for (let i = 0; i < num; i++) {
    const [copy] = copyArr.splice(
      Math.floor(Math.random() * copyArr.length),
      1,
    );
    newArr.push(copy);
  }
  return newArr;
}

export function pullRandomsByAmount(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const newArr = randomizeArray(arr, randomNumber);
  return newArr;
}
