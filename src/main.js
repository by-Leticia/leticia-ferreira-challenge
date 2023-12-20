import './style.scss';

const fieldset = document.querySelector('fieldset');
const input = document.querySelector('#buscar-campo');
const background = document.querySelector('.dropdownBackground');
const results = document.querySelector('.search_results');
const json = require('./exemplo.json');

function acionaInput() {
  fieldset.classList.add('click_input');
  background.classList.add('open');
}

function retiraInput() {
  fieldset.classList.remove('click_input');
  background.classList.remove('open');
}

window.onclick = (e) => {
  e.target === input ? acionaInput() : retiraInput();
};

function debounce(func, wait) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

function showSearch() {
  const result = [];
  const filterOnInput = results.value;

  Object.keys(json).forEach((element) => {
    if (element.title === filterOnInput || element.suggestions === filterOnInput) {
      result.push(element);
      results.innerHTML = `<p>${element}</p>`;
      console.log(element);
    }
  });
}

input.addEventListener('keyup', debounce(async () => {
  if (input.value.length >= 1) {
    showSearch();
  }
}));
