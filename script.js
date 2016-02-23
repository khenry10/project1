// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var userGuesses = []
var userPoints = []
var matches = []
var clicks = []
var cardOne = []
var cardTwo = []

control = document.body.querySelector(".control")
var cards = control.querySelectorAll(".column1")
section = document.body.querySelector(".section")

score = section.querySelector("p")
  score.innerHTML = "Score: "
document.body.addEventListener("mouseover", function() {
  score.innerHTML = "Score: " + (matches.length/2)
});

function printCards() {
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = pairs[i];
    cards[i].addEventListener('click', function() {

      userGuesses.push({innerHTML: this.innerHTML, click: userGuesses.length});

      clicks++
      if (clicks === 1) {
        cardOne.push(this);
        this.classList.add("active");
      } else if (clicks === 2) {
        cardTwo.push(this);
        this.classList.add("active");
        findMatches();
        setTimeout(function() {
          disappearCards();
        },250);
        setTimeout(function() {
          erase();
        },250);
      } else null;
      })
  }
} printCards()

function erase() {
  cardOne[0].classList.remove("active");
  cardTwo[0].classList.remove("active");
  cardOne.pop()
  cardTwo.pop()
  clicks = 0
}

document.body.addEventListener("click", findMatches);

function findMatches() {
  if ((cardOne[0].innerHTML === cardTwo[0].innerHTML) && (cardOne[0] !== cardTwo[0])) {
    matches.push(cardOne[0].innerHTML)
  } else null
}

//document.body.addEventListener("mouseover", disappearCards);

function disappearCards() {
    for (z = 0; z < matches.length; z++)
      for (y = 0; y < cards.length; y++) {
      if (matches[z] === cards[y].innerHTML)  {
        cards[y].style.backgroundColor = "white"
        cards[y].style.color = "white"
      } else null
    }
  }
