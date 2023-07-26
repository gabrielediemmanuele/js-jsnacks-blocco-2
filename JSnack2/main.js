// Names
const userNames = [
  "Albus",
  "Severus",
  "Sirius",
  "Harry",
  "Ron",
  "Hermione",
  "Tom",
];
// Surnames
const surNames = [
  "Silente",
  "Piton",
  "Black",
  "Potter",
  "Wisley",
  "Granger",
  "Riddle",
];
// Array fakeGuests
const fakeGuests = [];
// Prompt Guests number to generate
const fakeGuestsNumber = parseInt(
  prompt("Quanti finti invitati vuoi generare ?")
);

for (let i = 0; i < fakeGuestsNumber; i++) {
  // range names
  const randomNamesGen = Math.floor(Math.random() * userNames.length);
  // range names value
  const randomUserName = userNames[randomNamesGen];

  // range surnames
  const randomSurnamesGen = Math.floor(Math.random() * surNames.length);

  // range surNames value
  const randomSurname = surNames[randomSurnamesGen];

  // names + surnames
  const Guests = randomUserName + " " + randomSurname;

  // push
  fakeGuests.push(Guests);
}

// Console log
console.table(fakeGuests);
