function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



const bodyEl = document.querySelector('body');
const chageColorBtn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

chageColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

