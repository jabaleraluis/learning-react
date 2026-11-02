const myArray: number[] = [1, 2, 3, 4, 5, 6];

// const myArray2 = [...myArray];
const myArray2 = structuredClone(myArray);

myArray2.push(10);

// myArray.push(+'7'); //El signo '+' antes del string, lo convierte a cadena
// myArray.push(8);

console.log({ myArray, myArray2 });

// for (const num of myArray) {
//   console.log(num + 10);
// }
