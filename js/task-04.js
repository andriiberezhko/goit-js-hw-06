
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const amontValue = document.querySelector('#value');

//  1 Вариант (не соответствует условию, но работает)
// function increment() {
//     amontValue.textContent =   +amontValue.textContent + 1;
       
// };
// function decrement() {
//     amontValue.textContent -= 1;
  
// };

// incrementBtn.addEventListener('click', increment);
// decrementBtn.addEventListener('click', decrement);

// 2 Вариант


let counterValue = 0;

function increment() {
    counterValue += 1;
    amontValue.textContent = counterValue;
       
};
function decrement() {
    counterValue -= 1;
    amontValue.textContent = counterValue;
  
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
