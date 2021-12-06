// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if(state.mushrooms) mushroom.style.visibility = 'visible';
    else mushroom.style.visibility = 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) pepper.style.visibility = 'visible';
    else pepper.style.visibility = 'hidden';
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) sauce.classList.add('sauce-white');
  else sauce.classList.remove('sauce-white');
  console.log(sauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) crust.classList.add('crust-gluten-free');
  else crust.classList.remove('crust-gluten-free');
  console.log(crust)
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.querySelectorAll('.btn');

  for (let i = 0; i < buttons.length; i++) {
    if (Object.values(state)[i] === true) buttons[i].classList.add('active');
    else buttons[i].classList.remove('active');
  }

  // First try
  // let pepperoniButton = document.querySelector('.btn-pepperoni');
  // let mushButton = document.querySelector('.btn-mushrooms');
  // let greenPeppersButton = document.querySelector('.btn-green-peppers');
  // let sauceButton = document.querySelector('.btn-sauce');
  // let crustButton = document.querySelector('.btn-crust');
  // state.pepperoni ? pepperoniButton.classList.remove('active') : pepperoniButton.classList.add('active');
  // state.mushrooms ? mushButton.classList.remove('active') : mushButton.classList.add('active');
  // state.greenPeppers ? greenPeppersButton.classList.remove('active') : greenPeppersButton.classList.add('active');
  // state.whiteSauce ? sauceButton.classList.remove('active') : sauceButton.classList.add('active');
  // state.glutenFreeCrust ? crustButton.classList.remove('active') : crustButton.classList.add('active');
}

/* <aside class="panel price">
<h2>Your pizza's price</h2>

<b>$10 cheese pizza</b>
<ul>
  <li>$1 pepperoni</li>
  <li>$1 mushrooms</li>
  <li>$1 green peppers</li>
  <li>$3 white sauce</li>
  <li>$5 gluten-free crust</li>
</ul>
<strong>$21</strong>
</aside> */

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let listElement = document.querySelector('aside>ul');
  let priceElement = document.querySelector('aside>strong');
  
  listElement.innerHTML = "";
  let total = 0;

  console.log(priceElement)
  for (let ingredient in state) {
    if (state[ingredient]) {
      listElement.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      total += ingredients[ingredient].price;
    } 
  } 
  priceElement.innerHTML = `$${total+basePrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});