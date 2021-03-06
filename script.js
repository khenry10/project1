// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]

function randomize() {
pairs = pairs.sort(function() {
  if (Math.random() > 0.5) return 1;
  else return -1;
});
return pairs
}

//storage arrays
var userPoints = []
var matches = []
var clicks = []
var cardOne = []
var cardTwo = []
var guesses = []
var cardsPicked = []

//DOM targetting
control = document.body.querySelector(".control")
var cards = control.querySelectorAll(".column1")
header = document.body.querySelector(".header")

score = header.querySelector("p")
  score.innerHTML = "Clicks: "
document.body.addEventListener("mouseover", function() {
  score.innerHTML = "Clicks: " + guesses
});

//Populates cards with data from pairs array
function printCards() {
  randomize()
  for (i = 0; i < cards.length; i++) {
    // cards[i].id = pairs[i];
    cards[i].id = pairs[i];
    cards[i].addEventListener('click', function() {

      //Logs users 2 picks, gives preview of selection, and hides cards if wrong
      clicks++
      if (clicks === 1) {
        cardOne.push(this);
        guesses++
        console.log(clicks)
        if (matches.includes(cardOne[0].id) === false) {
          cardOne[0].classList.add("active");
        } else eraseCardOne();
      } else if (clicks === 2) {
        cardTwo.push(this);
        cardsPicked.push(this);
        console.log(clicks)
        if (matches.includes(cardTwo[0].id) === false) {
          guesses++
          this.classList.add("active");
        } else eraseCardTwo;
        findMatches();
        youWin();
        setTimeout(function() {
          disappearCards();
        },350);
        setTimeout(function() {
          eraseBothCards();
        },450);
      } else null;
      })
  }
} printCards()


//function that hides users 2 picks after a preview and clears the array's where the selection is stored
function eraseCardOne() {
  cardOne[0].classList.remove("active");
  cardOne.pop()
  clicks = 0
}

function eraseCardTwo() {
  cardTwo[0].classList.remove("active");
  cardTwo.pop()
  clicks = 0
}

function eraseBothCards() {
  cardOne[0].classList.remove("active");
  cardTwo[0].classList.remove("active");
  cardOne.pop()
  cardTwo.pop()
  clicks = 0
}


// function to check is user's selection are pairs and NOT the same actul card.  get's called after every 2nd pick
function findMatches() {
  if (guesses < 25) {
    if ((cardOne[0].id === cardTwo[0].id) && (cardOne[0] !== cardTwo[0])) {
    matches.push(cardOne[0].id);
    }  else null;
  } else if (guesses > 25) {
    loserBoard()
    alert("You lose!  Reload the page to play again.")

  }
}

function loserBoard() {
  for (y = 0; y < cards.length; y++) {;
    cards[y].style.backgroundColor = "transparent"
    cards[y].style.outline = '0px';
    cards[y].style.boxShadow = "0px 0px 0px #D4D4D4"
  }
}


//function to remove cards that user has found to be pairs.  Get's called after every 2nd pick
function disappearCards() {
    for (z = 0; z < matches.length; z++)
      for (y = 0; y < cards.length; y++) {
      if (matches[z] === cards[y].id)  {
        cards[y].style.backgroundColor = "transparent"
        cards[y].style.outline = '0px';
        cards[y].style.boxShadow = "0px 0px 0px #D4D4D4"
      } else null
    }
  }

function youWin() {
if (matches.length === 6) {
  alert('You win!');
} else null
};

button = document.body.querySelectorAll("button")


button[0].addEventListener("click", preview)

function preview(){
  for (z = 0; z < cards.length; z++) {
    cards[z].classList.add("active");
    setTimeout(function() {
      removePreview();
    },1000)
  }
};

function removePreview(){
  for (z = 0; z < cards.length; z++) {
    cards[z].classList.remove("active");
  }
}
