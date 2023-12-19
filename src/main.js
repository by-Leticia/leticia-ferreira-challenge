import './style.scss';
import highlights from './exemplo.json';

const fieldset = document.querySelector('fieldset');
const input = document.querySelector('#buscar-campo');
const background = document.querySelector('.dropdownBackground');
const results = document.querySelector('.search_results');

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

results.textContent = highlights.highlights[0].title;
console.log(highlights.highlights[0]);
console.log(highlights.suggestions[0]);
