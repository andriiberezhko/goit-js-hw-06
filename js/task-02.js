const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Вариант №1

// const createIngredientElement = ingredients.forEach((element) => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = element;
//   itemEl.classList = 'item';
//   console.log(itemEl);
//   document.querySelector('#ingredients').append(itemEl);
// });

// Вариант №2
const createIngredientElement = ingredients.map((element) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList = 'item';
  
  return itemEl;
});

document.querySelector('#ingredients').append(...createIngredientElement);





 






