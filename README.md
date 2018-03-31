# POKEDÉX HACKERS XP12

Conclua os três passos para aprender sobre consumo de APIs, persistência local e persistência de "servidor" utilizando um `.csv`.

## A jornada Pokémon:

### Nível 1 - Meus primeiros pokemons
Abra o arquivo `js/listapokemons.js` e preencha os passos pedidos nos comentários com `TO-DO`.

### Nível 2 - Pokedéx completa
Abra o arquivo `js/mostrapokemons.js` e implemente as duas funções `mostraPokemons`e `populaModal`

### Desafio hardcore do Mewtwo
- crie um arquivo chamado `hardcore.js` e importe ele no `index.html`
- Adicione um botão no `footer` do modal criado, com um evento que chama a função `favoritarPokemon` passando o seu `id`. (Este botão deve ser criado com javascript dentro da função `populaModal` do arquivo `js/mostrapokemons.js`).
- Na função favoritar pokemon você deve salvar o id do pokemon num array que será salvo na `sessionStorage` com o nome `favoritados`.
- Adicionar um botão "Exportar favoritos" no lado direito da header no `index.html` com um evento para a função `exportaFavoritos`, nessa função você deve pegar todos os ids de pokemons favoritados na `sessionStorage`, consumir os dados de cada um na API e exportar os mesmos dados que continham no modal na forma de `.csv` (na imagem do pokemon, enviar apenas o link)
