/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
import './style.scss';
import mock from './exemplo';

const fieldset = document.querySelector('fieldset');
const input = document.querySelector('#buscar-campo');
const background = document.querySelector('.dropdownBackground');
const title = document.querySelector('.title');
const logo = document.querySelector('.logo');
const searchGlobo = document.querySelector('.searchGlobo');
const searchWeb = document.querySelector('.searchWeb');
const divSugestao = document.querySelector('.suggestions');
let selectedIndex = 0;
// let stopDuplicate = false;

function acionaInput() {
  fieldset.classList.add('click_input');
}

function retiraInput() {
  fieldset.classList.remove('click_input');
  background.classList.remove('open');
  input.value = '';
  title.innerHTML = '';
  logo.src = '';
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

function suggestionsOnTheScreen() {
  const frases = `${getResultsSearch(formatarPalavra(input.value)).suggestion}`;
  const elementos = frases.split(',');
  const lista = document.createElement('div');
  // let listaHTML = '<ul>';
  elementos.forEach((elemento) => {
    let li = document.createElement('div');
    li.classList.add('point');
    li.textContent = elemento;
    lista.appendChild(li);
    // listaHTML += elemento;
    console.log(lista);
  });
  // listaHTML += '</ul>';
  divSugestao.appendChild(lista);
}

function screenResults() {
  // getResultsSearch(formatarPalavra(input.value));
  getResultsSearch(formatarPalavra(input.value));
  title.innerHTML = getResultsSearch(formatarPalavra(input.value)).highlight.title;
  logo.src = getResultsSearch(formatarPalavra(input.value)).highlight.logo;
  searchGlobo.innerHTML = `buscar ${input.value} na Globo.com`;
  searchWeb.innerHTML = `buscar ${input.value} na Web`;
  suggestionsOnTheScreen();
}

input.addEventListener('keyup', debounce(() => {
  if (input.value.length >= 1) {
    acionaInput();
    screenResults();
    /* if (stopDuplicate === false) {
      screenResults();
      suggestionsOnTheScreen();
      stopDuplicate = true;
      if (input.value === '') {
        stopDuplicate = false;
        screenResults();
        suggestionsOnTheScreen();
      }
    } else {
      !suggestionsOnTheScreen();
      screenResults();
    } */
  }
  if (input.value === '') {
    retiraInput();
  }
}, 500));

document.addEventListener('keydown', (event) => {
  const upDown = document.querySelectorAll('.point');
  background.classList.add('open');
  function updateMenuAppearance() {
    upDown.forEach((item, index) => {
      if (index === selectedIndex) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
  // eslint-disable-next-line default-case
  switch (event.key) {
    case 'ArrowUp':
      selectedIndex = Math.max(0, selectedIndex - 1);
      divSugestao.innerHTML = '';
      updateMenuAppearance();
      break;
    case 'ArrowDown':
      selectedIndex = Math.min(upDown.length - 1, selectedIndex + 1);
      divSugestao.innerHTML = '';
      updateMenuAppearance();
      break;
    case 'ArrowLeft':
      divSugestao.innerHTML = '';
      break;
    case 'ArrowRight':
      divSugestao.innerHTML = '';
      break;
    case 'Enter':
      upDown.forEach((item) => {
        if (item === title) {
          event.preventDefault();
          window.location.href = getResultsSearch(formatarPalavra(input.value)).highlight.url;
          console.log(window.location.url);
        } else {
          console.log('not title');
        }
      });
      upDown[selectedIndex].click();
      break;
    case 'Backspace':
      title.innerHTML = '';
      logo.src = '';
      searchGlobo.innerHTML = '';
      searchWeb.innerHTML = '';
      divSugestao.innerHTML = '';
      break;
  }
});
