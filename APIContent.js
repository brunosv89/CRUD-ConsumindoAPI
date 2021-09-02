export async function getNome () {   //define uma função assincrona para executar o resto do conteúdo apenas quando o fetch obter a resposta
  const response = await fetch('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos');
  
  const nomes = await response.json() //aguarda o fetch para executar, dai pega os dados da resposta e transforma em JSON
  
  const select = document.getElementById('select-nome')  //vai pegar o select pelo ID
  
  //faz um for
  nomes.forEach(element => {
    select.innerHTML = select.innerHTML + `<option value='${element.name}'> ${element.name} </option>`  
  });
}



export async function getMarca () {   

  const response = await fetch('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas');

  const marcas = await response.json() 
  
  const select = document.getElementById('select-marca')  
  
  marcas.forEach(element => {
    select.innerHTML = select.innerHTML + `<option value='${element.name}'> ${element.name} </option>`  
  });
}




