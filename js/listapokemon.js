(function() {
  //API: https://pokeapi.co/docsv2
  //define link de consumo à api
  //TO-DO: ADICIONAR LINK DA API PARA LISTAR POKEMONS
  const URL = '';
  //instancia classe responsável ao consumo da api
  const xhr = new XMLHttpRequest();
  //define opções da requisição
  xhr.open('GET', URL, true);
  //envia requisição para a api
  xhr.send();
  //trata os dados de maneira assincrona 
  xhr.onload = function(e) {
    //salva resposta da api em uma variavel
    //e transforma resposta em um JSON válido
    const res = JSON.parse(xhr.response);
    console.log(res);
    //cria card para cada pokemon na tela inicial
    listaPokemons(res.results);
  }

  function listaPokemons(pokemons) {
    //cria elemento pai de cada card de pokemon
    let div = document.createElement('div');
    //adiciona classe row do bootstrap na div
    div.classList.add('row');
    //itera em cada um dos pokemons
    pokemons.map(pokemon => {
      //cria coluna do bootstrap
      const col = document.createElement('div');
      col.classList.add('col-md-3', 'col-sm-6', 'col-12')
      //cria card do bootstrap
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3');
      //adiciona event listener para card
      card.addEventListener('click', function() {
        //CHAMAR FUNÇÃO MOSTRA POKEMON PASSANDO COMO
        // PARAMETRO O LINK OBTIDO PARA CADA POKEMON





      });
      col.appendChild(card);
      //cria a div com a classe card-body que é onde
      //o card do bootstrap mantém seu conteúdo
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.appendChild(cardBody);
      //cria titulo em h5 utilizando a classe card-title
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      //TO-DO: ADICIONE AQUI O NOME DOS POKEMONS




      cardBody.appendChild(cardTitle);
      //adiciona coluna na div principal
      div.appendChild(col);
    });
    //adiciona a div no elemento main
    document.querySelector('main').appendChild(div);
  }
})();

