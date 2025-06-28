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