import {getNome} from './APIContent.js'
import {getMarca} from './APIContent.js'
import botaoDeleta from './componentes.js'

const novoMedicamento = document.querySelector('[data-form-button]')


novoMedicamento.addEventListener('click', (event) => {
  event.preventDefault();

  const lista = JSON.parse(localStorage.getItem('chave')) || []
  const nomeMedicamento = document.querySelector('#select-nome').value
  const marcaMedicamento = document.querySelector('#select-marca').value
  console.log(nomeMedicamento, marcaMedicamento);

  const ul = document.querySelector('[data-ul]');
  const criaLi = document.createElement('li');
  criaLi.classList.add("li")
  const conteudo = `<p class="content"> ${nomeMedicamento} - ${marcaMedicamento}  </p>`
  
  criaLi.innerHTML = conteudo

  criaLi.appendChild(botaoDeleta())
  ul.appendChild(criaLi)

});


getNome();
getMarca();