// declare a pairs array and user selection array

var pairs = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"]


//storage arrays
var userPoints = []
var cardOne = []
var cardTwo = []
var guesses = []


button = document.body.querySelectorAll("button")
button[0].addEventListener("click", printCards)

//Populates cards with data from pairs array
function printCards() {
  guesses = []
  clicks = []
  matches = []

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
        this.classList.add("active");
      } else if (clicks === 2) {
        cardTwo.push(this);
        this.classList.add("active");
        guesses++
        findMatches();
        youWin();
        setTimeout(function() {
          disappearCards();
        },350);
        setTimeout(function() {
          erase();
        },450);
      } else null;
      })
  }
}

function randomize() {
  pairs = pairs.sort(function() {
    if (Math.random() > 0.5) return 1;
    else return -1;
  });
  return pairs
}

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
  if (guesses < 25) {
    if ((cardOne[0].id === cardTwo[0].id) && (cardOne[0] !== cardTwo[0])) {
    matches.push(cardOne[0].id);
    }  else null;
  } else alert("You lose!");
}

//DOM targetting
control = document.body.querySelector(".control")
var cards = control.querySelectorAll(".column1")
header = document.body.querySelector(".header")

score = header.querySelector("p")
score.innerHTML = "Clicks: "
document.body.addEventListener("mouseover", function() {
  score.innerHTML = "Clicks: " + guesses
});


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
button[2].addEventListener("click", reset)

function reset(){
    for (z = 0; z < cards.length; z++) {
    cards[z].style.backgroundColor = "#2CC990";
    cards[z].style.boxShadow = "10px 10px 15px #D4D4D4";
    printCards();
  }
}


button[1].addEventListener("click", preview)

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
