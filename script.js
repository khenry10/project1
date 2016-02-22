// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var userGuesses = []

var userPoints = []

var matches = []

control = document.body.querySelector(".control")
cards = control.querySelectorAll("p")

section = document.body.querySelector(".section")

score = section.querySelector("p")
score.innerHTML = "Score: "


function printCards() {
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = pairs[i];
    cards[i].addEventListener('click', function() {
      userGuesses.push({innerHTML: this.innerHTML, click: userGuesses.length});
    })
  }
} printCards()

function checkPairs() {
  for (i = 0; i < userGuesses.length; i++)
    for (j = 1; j < userGuesses.length; j++)
    if (((userGuesses[j].click - userGuesses[i].click === 1) || (userGuesses[j].click - userGuesses[i].click === -1)) && (userGuesses[j].innerHTML === userGuesses[i].innerHTML)) {
      matches.push(userGuesses[i].innerHTML)
    } else null
  }

  document.body.addEventListener("mouseover", function() {
    score.innerHTML = "Score: " + matches.length
  });

  document.body.addEventListener("mouseover", checkPairs());
