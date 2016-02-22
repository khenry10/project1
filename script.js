// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var userGuesses = ['a', "z"]

var userPoints = []

var matches = []

if (userPoints < 6) {
  checkPairs()
} else if (userPoints >=6) {
  console.log('You win')
}

function checkPairs() {
  for (i = 0; i < pairs.length; i++) {
    if (userGuesses.includes(pairs[i])) {
      matches.push(userGuesses[i]);
    } else null
  }
} checkPairs()

// dom code 
cards = document.body.querySelectorAll("p")

for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = pairs[i];
}
