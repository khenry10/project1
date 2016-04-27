// game object with all needed arrays to function
var game = {
  pairs: ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"],
  matches: [],
  clicks: [],
  cardOne: [],
  cardTwo: [],
  guesses: [],
  els: {
    control: document.body.querySelector(".control"),
    header: document.body.querySelector(".header")
  }
}


//DOM targetting
cards: game.els.control.querySelectorAll(".column1")

var cards = game.els.control.querySelectorAll(".column1")

score = game.els.header.querySelector("p")
  score.innerHTML = "Clicks: "
document.body.addEventListener("mouseover", function() {
  game.els.score.innerHTML = "Clicks: " + game.guesses
});

button = document.body.querySelectorAll("button")

button[0].addEventListener("click", preview)


//Populates cards with data from pairs array
function printCards() {
  randomize()
  for (i = 0; i < cards.length; i++) {
    cards[i].id = game.pairs[i];
    cards[i].addEventListener('click', function() {
      //Logs users 2 picks, gives preview of selection, and hides cards if wrong
      game.clicks++
      if (game.clicks === 1) {
        game.cardOne.push(this);
        game.guesses++;
        if (game.matches.includes(game.cardOne[0].id) === false) {
          game.cardOne[0].classList.add("active");
        } else eraseCardOne();
      } else if (game.clicks === 2) {
        game.cardTwo.push(this);
        console.log(game.clicks)
        if (game.matches.includes(game.cardTwo[0].id) === false) {
          game.guesses++
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

function randomize() {
  pairs = game.pairs.sort(function() {
    if (Math.random() > 0.5) return 1;
    else return -1;
  });
  return pairs
};

//function that hides users 2 picks after a preview and clears the array's where the selection is stored
function eraseCardOne() {
  game.cardOne[0].classList.remove("active");
  game.cardOne.pop()
  game.clicks = 0
};

function eraseCardTwo() {
  game.cardTwo[0].classList.remove("active");
  game.cardTwo.pop()
  game.clicks = 0
};

function eraseBothCards() {
  game.cardOne[0].classList.remove("active");
  game.cardTwo[0].classList.remove("active");
  game.cardOne.pop()
  game.cardTwo.pop()
  game.clicks = 0
};

// function to check is user's selection are pairs and NOT the same actul card.  get's called after every 2nd pick
function findMatches() {
  if (game.guesses < 25) {
    if ((game.cardOne[0].id === game.cardTwo[0].id) &&         (game.cardOne[0] !== game.cardTwo[0])) {
      game.matches.push(game.cardOne[0].id);
    }  else null;
    } else if (game.guesses > 25) {
      loserBoard()
      alert("You lose!  Reload the page to play again.")
    }
};

function loserBoard() {
  for (y = 0; y < cards.length; y++) {;
    cards[y].style.backgroundColor = "transparent"
    cards[y].style.outline = '0px';
    cards[y].style.boxShadow = "0px 0px 0px #D4D4D4"
  }
};

//function to remove cards that user has found to be pairs.  Get's called after every 2nd pick
function disappearCards() {
    for (z = 0; z < game.matches.length; z++)
      for (y = 0; y < cards.length; y++) {
        if (game.matches[z] === cards[y].id)  {
          cards[y].style.backgroundColor = "transparent"
          cards[y].style.outline = '0px';
          cards[y].style.boxShadow = "0px 0px 0px #D4D4D4"
        } else null
      }
};

function youWin() {
  if (game.matches.length === 6) {
    alert('You win!');
  } else null
};

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
