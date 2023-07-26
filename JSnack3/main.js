// array numeri interi
const numbersList = [3, 6, 12, 21, 95, 28, 35, 83, 13, 2, 11];

// variabile di supporto
let total = 0;

for (let i = 0; i < numbersList.length; i++) {
  const currentNumber = numbersList[i];

  //calcolo la posizione
  if (i % 2 == 0) total += currentNumber;
  if (!(i % 2)) total += currentNumber;
}

// console log somma totale
console.log(" la somma è: " + total);
