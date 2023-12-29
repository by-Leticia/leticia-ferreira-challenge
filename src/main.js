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
const upDown = document.querySelectorAll('.highlights');
const searchWeb = document.querySelector('.searchWeb');
const divSugestao = document.querySelector('.suggestions');
let seletedIndex = 0;
// const listaSemMarcação = mock.suggestions.map((item) => `- ${item}`).join('\n');

function acionaInput() {
  fieldset.classList.add('click_input');
  background.classList.add('open');
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

function updateMenuAppearance() {
  upDown.forEach((item, index) => {
    if (index === seletedIndex) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}

input.addEventListener('keyup', debounce(() => {
  if (input.value.length >= 1) {
    getResultsSearch(formatarPalavra(input.value));
    console.log(getResultsSearch(formatarPalavra(input.value)));
    title.innerHTML = getResultsSearch(formatarPalavra(input.value)).highlight.title;
    logo.src = getResultsSearch(formatarPalavra(input.value)).highlight.logo;
    searchGlobo.innerHTML = `buscar ${input.value} na Globo.com`;
    searchWeb.innerHTML = `buscar ${input.value} na Web`;
    const frases = `${getResultsSearch(formatarPalavra(input.value)).suggestion}`;
    const elementos = frases.split(',');
    let listaHTML = '<ul>';
    elementos.forEach((elemento) => {
      listaHTML += `<li class="suggestions">${elemento} <br> </li`;
    });
    listaHTML += '</ul>';
    divSugestao.innerHTML = listaHTML;
  }
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(event);
      //
    }
  });
}, 500));

document.addEventListener('keydown', (event) => {
  // eslint-disable-next-line default-case
  switch (event.key) {
    case 'ArrowUp':
      seletedIndex = Math.max(0, seletedIndex - 1);
      break;
    case 'ArrowDown':
      seletedIndex = Math.min(upDown.length - 1, seletedIndex + 1);
      break;
    case 'Enter':
      upDown.forEach((item) => {
        if (item === title) {
          window.location.href = getResultsSearch(formatarPalavra(input.value)).highlight.url;
        } else {
          console.log('not title');
        }
      });
      upDown[seletedIndex].click();
      break;
  }
  updateMenuAppearance();
});
