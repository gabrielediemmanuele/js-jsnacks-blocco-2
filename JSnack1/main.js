const userNumber = parseInt(prompt("Inserisci un numero"));
const results = document.getElementById("numberlog").innerHTML;

if (userNumber % 2 == 0) {
  console.log("Number " + userNumber);
} else {
  console.log("Number " + (userNumber + 1));
}

// Cosi facendo stamperò sempre un numero Pari.
