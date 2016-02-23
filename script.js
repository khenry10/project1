// declare a pairs array and user selection array

pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

var pairs = pairs.sort(function() {
  if (Math.random() > 0.5) return 1;
  else return -1;
});

//storage arrays
var userPoints = []
var matches = []
var clicks = []
var cardOne = []
var cardTwo = []

//DOM targetting
control = document.body.querySelector(".control")
var cards = control.querySelectorAll(".column1")
section = document.body.querySelector(".section")

score = section.querySelector("p")
  score.innerHTML = "Score: "
document.body.addEventListener("mouseover", function() {
  score.innerHTML = "Score: " + matches.length
});

//Populates cards with data from pairs array
function printCards() {
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = pairs[i];
    cards[i].addEventListener('click', function() {

      //Logs users 2 picks, gives preview of selection, and hides cards if wrong
      clicks++
      if (clicks === 1) {
        cardOne.push(this);
        this.classList.add("active");
      } else if (clicks === 2) {
        cardTwo.push(this);
        this.classList.add("active");
        findMatches();
        youWin();
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

//function that hides users 2 picks after a preview and clears the array's where the selection is stored
function erase() {
  cardOne[0].classList.remove("active");
  cardTwo[0].classList.remove("active");
  cardOne.pop()
  cardTwo.pop()
  clicks = 0
}

// function to check is user's selection are pairs and NOT the same actul card.  get's called after every 2nd pick
function findMatches() {
  if ((cardOne[0].innerHTML === cardTwo[0].innerHTML) && (cardOne[0] !== cardTwo[0])) {
    matches.push(cardOne[0].innerHTML)
  } else null
}

//function to remove cards that user has found to be pairs.  Get's called after every 2nd pick
function disappearCards() {
    for (z = 0; z < matches.length; z++)
      for (y = 0; y < cards.length; y++) {
      if (matches[z] === cards[y].innerHTML)  {
        cards[y].style.backgroundColor = "white"
        cards[y].style.color = "white"
      } else null
    }
  }

function youWin() {
if (matches.length === 6) {
  alert('You win');
} else null
};

function reset(){
    for (z = 0; z < cards.length; z++) {
    cards[z].style.color = "blue"
    cards[z].style.backgroundColor = "blue";
  }
    matches = 0
}
