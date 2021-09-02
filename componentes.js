export const botaoDeleta = () => {
  const delButton = document.createElement('button')

  delButton.classList.add('del-button')
  delButton.innerText = 'Excluir'
  delButton.addEventListener('click', deletarMedicamento)

  return delButton
}

const deletarMedicamento = (event) => {
  const botaoDeleta = event.target
  const excluiMedicamento = botaoDeleta.parentElement
  
  excluiMedicamento.remove()

  return botaoDeleta
}

export default botaoDeleta
