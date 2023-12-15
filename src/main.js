import './style.scss';

const fieldset = document.querySelector('fieldset');
const barraNova = document.querySelector('.barra_navegacao');

function search() {
  fieldset.classList.add('click_input');
  console.log('entrou');
}

function outSearch() {
  fieldset.classList.remove('click_input');
  console.log('saiu');
}

fieldset.addEventListener('click', search);
barraNova.addEventListener('click', outSearch);
