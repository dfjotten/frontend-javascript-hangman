const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, isSingleLetter } = require("./gamelogic");

// Function to ask user for letter
// function askForLetter() {
//   let letter = question("Vul in een letter: ")
//   return letter;
// }

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log(displayWordSoFar(word,guesses));

  if (isGameWon(word,guesses)) {
    console.log("Gefeliciteerd, je hebt gewonnen!");
    return;
  }

  if (isGameLost(word,guesses)) {
    console.log("Helaas, je hebt 7 letters fout geraden en het spel verloren");
    return;
  }

  const letter = question("Raad een letter: ");
  if (!isSingleLetter(letter)) {
    console.log("Je kunt maar een letter invoeren")
  }

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);