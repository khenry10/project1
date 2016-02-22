// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var userGuesses = []

var userPoints = []

var matches = []

if (userPoints < 6) {
  checkPairs()
} else if (userPoints >=6) {
  console.log('You win')
}

// don't think I'll be using this but don't want to delete
// function checkPairs() {
//   for (i = 0; i < pairs.length; i++) {
//     if (userGuesses.includes(pairs[i])) {
//       matches.push(userGuesses[i]);
//     } else null
//   }
// } checkPairs()

// dom codevar
cards = document.body.querySelectorAll("p")

function printCards() {
for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = pairs[i];
    cards[i].addEventListener('click', function() {
      userGuesses.push({innerHTML: this.innerHTML, click: userGuesses.length});
    })
}
} printCards()
