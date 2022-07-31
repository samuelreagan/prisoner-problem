const iterations = 100;
let wins = 0;

for (let i = 0; i < iterations; i++) {
  const result = prisonerProblem();

  if (result) {
    wins++;
  }
}

console.log('Win %', wins / iterations * 100);

function prisonerProblem() {
  const totalPrisoners = 100;
  const totalGuesses = 50;
  const boxes = [];
  const randomNumbers = [];
  let win = true;
  
  // Assign Random Numbers
  for (let i = 0; i < totalPrisoners; i++) {
    let randomNumber;

    do {
      randomNumber = getRandomNumber(totalPrisoners);
    } while (randomNumbers[randomNumber]);
  
    randomNumbers[randomNumber] = true;
    boxes[i] = randomNumber;
  }
  
  // Guesses
  let prisonerIndex = 0;
  while (prisonerIndex < totalPrisoners && win) {
    let boxIndex = prisonerIndex;
    let guessCount = 0;
    let found = false;
  
    while (guessCount < totalGuesses && !found) {
      if (boxes[boxIndex] === prisonerIndex) {
        found = true;
      } else {
        boxIndex = boxes[boxIndex];
        guessCount++;
      }
    }
  
    if (!found) {
      win = false;
    }
    prisonerIndex++;
  }
  
  return win;
}

function getRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound); // Prisoners are numbered 0 to n - 1
}
