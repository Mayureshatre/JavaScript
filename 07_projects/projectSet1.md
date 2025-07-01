# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript

    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript
  const form = document.querySelector('form');

// this use case will give you empty values
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height!! - ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight!! - ${weight}`;
  } else {
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < '18.6') {
      results.innerHTML = `<span> Your BMI index is ${BMI}.</span> you are in under weight category.Eat something!! `;
    } else if (BMI >= '18.6' && BMI <= '24.9') {
      results.innerHTML = `<span> Your BMI index is ${BMI}.</span> you are in perfect range.`;
    } else {
      results.innerHTML = `<span> Your BMI index is ${BMI}.</span> you are in overweight category.loose some weight!!`;
    }
  }
});
```

## Project 3

```javascript
  const clock = document.getElementById('clock');
//const clock = documnet.queryselector('#clock)

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
  let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1.');
  } else if (guess > 100) {
    alert('Please enter a number smaller than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it right!!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guess was bit Low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guess was bit High`);
  }
}

function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame">Start a New Game</h2> `;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebutton = document.querySelector('#newgame');
  newGamebutton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5

```javascript
  const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>  
  `;
});
```

## Project 6

```javascript
  let randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor();
};

let intervalId;

const startChangingBgColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

document
  .querySelector('#start')
  .addEventListener('click', startChangingBgColor);

const stopChangingBgColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#stop').addEventListener('click', stopChangingBgColor);

```