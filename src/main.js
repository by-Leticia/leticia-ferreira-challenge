import './style.scss';

const fieldset = document.querySelector('fieldset');
const input = document.querySelector('#buscar-campo');
const background = document.querySelector('.dropdownBackground');

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
