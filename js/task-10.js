function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  boxesEl :document.querySelector('#boxes'),
  createBtn : document.querySelector('[data-create]'),
  destroyBtn : document.querySelector('[data-destroy]'),
  numberEl : document.querySelector('#controls>input'),
};


refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);



function createBoxes(amount) {
  amount = refs.numberEl.value;
  
  const elements = [];
  if (amount !== '') {
   
    console.log(amount);
    let styleValue = 30;
  
  
    for (let i = 0; i < amount; i++) {
      const boxEl = document.createElement('div');
      boxEl.style.width = `${styleValue}px`;
      boxEl.style.height = `${styleValue}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      elements.push(boxEl);
      styleValue += 10;
    };
  
   
  refs.boxesEl.append(...elements);
   
 } else {
    alert('Введите количество елементов!!!');
  };

  refs.numberEl.value = '';
};

function destroyBoxes() {
  
  while (refs.boxesEl.firstChild) {
    refs.boxesEl.removeChild(refs.boxesEl.firstChild);
  };
  
  // refs.numberEl.value = '';
}


