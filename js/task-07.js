
const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


input.addEventListener('input', (event) => {
       textEl.style.fontSize = event.currentTarget.value + 'px';
});