// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var userGuesses = []
var userPoints = []
var matches = []

control = document.body.querySelector(".control")
cards = control.querySelectorAll(".column1")
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

  document.body.addEventListener("mouseover", function() {
    score.innerHTML = "Score: " + matches.length
  });

  document.body.addEventListener("click", findMatches);

//this function continuosly pushes the matched user guesses to the matches array, creates many matches but they are actually duplicates.  Should fix, but it doesn't affect disappearCards in a negative way
  function findMatches() {
    for (i = 0; i < userGuesses.length; i++)
      for (j = 1; j < userGuesses.length; j++)
        if ((userGuesses[j].click - userGuesses[i].click === 1) && (userGuesses[j].innerHTML === userGuesses[i].innerHTML)) {
            matches.push(userGuesses[j].innerHTML)
        } else null
    }

function disappearCards() {
    for (z = 0; z < matches.length; z++)
      for (y = 0; y < cards.length; y++) {
      if (matches[z] === cards[y].innerHTML)  {
        cards[y].style.backgroundColor = "white"
        cards[y].style.color = "white"
      } else null
    }
  }
