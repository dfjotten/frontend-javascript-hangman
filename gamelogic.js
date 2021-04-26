function displayWordSoFar(word, guesses) {
// Collect user input letters
  let wordDisplayed = '';
// Display letters in array
  for (let i = 0; i < word.length; i++) {

    const guessedLetter = guesses.includes(word[i]);

    if(guessedLetter) {
      const toAdd = word[i] + ' ';
      wordDisplayed += toAdd;
    } else {
      wordDisplayed += '_ ';
    }
  }
// Keep count of correct letters
// Display correct letters in String
  return wordDisplayed;
}

function isGameWon(word, guesses) {
  // input correctly guessed letters
  for (let i = 0; i < word.length; i++) {
    if(!guesses.includes(word[i])) {
      return false;
    }
    return true;
  }
  //Additional feat: If work guessed correctly, win condition. (?)
}

function isGameLost(word, guesses) {
  // Input wrong guesses thus far
  let sum = 0;
  for (let i = 0; i < guesses.length; i++) {

    if (!word.includes(guesses[i])) {
      sum++
    }
  }
  return sum >= 7;
}



function isSingleLetter(letter) {
  //set condition for letter being 1 length
  if (letter.length > 1 || letter.length < 1) {
    return false;
    // connect msg to say user can only guess 1 letter
    // Block 2 or more letter guess from counting as wrong guess
  } else {
    return true;
    // accept as guess
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  isSingleLetter: isSingleLetter,
};