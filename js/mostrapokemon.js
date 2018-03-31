function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();

  xhr.onload = function(e) {
    const pokemon = JSON.parse(xhr.response);

    populaModal(pokemon);

    $('.modal').modal({ show: true });
  }
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO

  const modal = document.querySelector('.modal');
  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  const dialog = document.createElement('div');
  dialog.classList.add('modal-dialog');

  const content = document.createElement('div');
  content.classList.add('modal-content');
  
  const header = document.createElement('div');
  header.classList.add('modal-header');
  content.appendChild(header);
  
  const title = document.createElement('h5');
  title.classList.add('modal-title');
  title.innerText = `${pokemon.name.toUpperCase()} - #${pokemon.id}`;
  header.appendChild(title);

  const body = document.createElement('div');
  body.classList.add('modal-body');
  content.appendChild(body);

  const row = document.createElement('div');
  row.classList.add('row');

  const colImg = document.createElement('div');
  colImg.classList.add('col-4', 'text-center');
  colImg.style.alignSelf = 'center';

  const colContent = document.createElement('div');
  colContent.classList.add('col-8');

  const pokeName = document.createElement('h1');
  pokeName.innerText = pokemon.name;
  colContent.appendChild(pokeName);

  const pokeImg = document.createElement('img');
  pokeImg.src = pokemon.sprites.front_default;
  pokeImg.classList.add('img-fluid');
  colImg.appendChild(pokeImg);

  const pokeTypesList = document.createElement('ul');
  pokemon.types.map(type => {
    const pokeType = document.createElement('li');
    pokeType.innerText = type.type.name;
    pokeTypesList.appendChild(pokeType);
  });
  colContent.appendChild(pokeTypesList);

  const pokeHeight = document.createElement('p');
  pokeHeight.innerText = pokemon.height;
  pokeHeight.style.marginBottom = '5px';
  
  const heightTitle = document.createElement('strong');
  heightTitle.innerText = 'Altura: ';
  pokeHeight.prepend(heightTitle);
  colContent.appendChild(pokeHeight);

  const pokeWeight = document.createElement('p');
  pokeWeight.innerText = pokemon.weight;
  pokeWeight.style.marginBottom = '5px';
  
  const weightTitle = document.createElement('strong');
  weightTitle.innerText = 'Peso: ';
  pokeWeight.prepend(weightTitle);
  colContent.appendChild(pokeWeight);

  const pokeId = document.createElement('p');
  pokeId.innerText = pokemon.id;
  pokeId.style.marginBottom = '5px';
  
  const idTitle = document.createElement('strong');
  idTitle.innerText = 'ID: ';
  pokeId.prepend(idTitle);
  colContent.appendChild(pokeId);

  row.appendChild(colImg);
  row.appendChild(colContent);
  body.appendChild(row);
  dialog.appendChild(content);
  modal.appendChild(dialog);
}