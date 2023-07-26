// prima array
let arrayOne = [1, 2, 3];
// seconda array
let arrayTwo = [1, 2, 3, 4, 5];

//variabili
let temporaryArray;
let elementsAdd;

// se arrayOne è più piccolo..
if (arrayOne.length < arrayTwo.length) {
  temporaryArray = arrayOne;
  elementsAdd = arrayTwo.length - arrayOne.length;
} else {
  temporaryArray = arrayTwo;
  elementsAdd = arrayOne.length - arrayTwo.length;
}

console.table(temporaryArray);

// per ogni elemento di differenza
for (let i = 0; i < elementsAdd; i++) {
  //prompt
  const elementPlus = prompt("Scrivi un elemento da aggiungere");

  // si aggiunge all'array temporaneo
  temporaryArray.push(elementPlus);
}

console.table(arrayOne);
console.table(arrayTwo);
