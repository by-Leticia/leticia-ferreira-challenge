/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
import './style.scss';
import mock from './exemplo';

const fieldset = document.querySelector('fieldset');
const input = document.querySelector('#buscar-campo');
const background = document.querySelector('.dropdownBackground');
// const results = document.querySelector('.search_results');
const oldLogo = document.querySelector('.old_logo');
// const title = document.querySelector('.title');
// let json = require('./exemplo.json');

function acionaInput() {
  fieldset.classList.add('click_input');
  background.classList.add('open');
  oldLogo.style.display = 'block';
}

function retiraInput() {
  fieldset.classList.remove('click_input');
  background.classList.remove('open');
  oldLogo.style.display = 'none';
}

window.onclick = (e) => {
  e.target === input ? acionaInput() : retiraInput();
};

function debounce(callback, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}

function formatarPalavra(palavra) {
  // Remove acentos
  const palavraSemAcento = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Converte para minúsculas
  const palavraLowerCase = palavraSemAcento.toLowerCase();

  return palavraLowerCase;
}

function getResultsSearch(palavra) {
  let result = {};
  mock.highlights.map((highlight) => {
    const queries = highlight.queries.map((querie) => formatarPalavra(querie));

    queries.map((querie) => {
      if (querie.includes(palavra)) {
        result = {
          highlight: {
            title: highlight.title,
            url: highlight.url,
            logo: highlight.logo,
          },
        };
      }
    });
  });
  let sugestao = [];
  mock.suggestions.map((suggestion) => {
    if (formatarPalavra(suggestion).includes(palavra)) {
      sugestao.push(suggestion);
    }
  });

  result.suggestion = sugestao;
  return result;
}

input.addEventListener('keyup', debounce(() => {
  if (input.value.length >= 1) {
    getResultsSearch(formatarPalavra(input.value));
    console.log(getResultsSearch(formatarPalavra(input.value)));
  }
}, 500));
