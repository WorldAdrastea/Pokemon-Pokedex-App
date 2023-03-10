//IIFE with pokemon list
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    //function to add pokemon to array list
    function add(pokemon) {
        if (typeof(pokemon) === "object" && Object.keys(pokemonList).every((val, i, p) => val === p[i]) ? pokemonList.push(pokemon) : console.log("Wrong Data Type"));
    };
    //function to get all of pokemonList
    function getAll() {
        return pokemonList;
    };
    //function that finds pokemon (WIP)
    function find(pokemonName) {
       return pokemonList.filter(pokemon => pokemon.name === pokemonName);
    };
    //function that creates a list of pokemon from array + event listener to show details
    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('ul');
        let listItem = document.createElement('li');
        listItem.classList.add('pokedexStyle')
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonButtonStyle');
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    };
    //function to show the details of pokemon (console log for now)
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon.name);
        });
    };

    //fetch PokeAPI
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      };

      //Loads details of pokemon
      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      };

    //returns functions so that they can be used outside of IIFE
    return {
        add: add,
        getAll: getAll,
        find: find,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

//Using loadList to load data for pokemon + runs addListItem for each of the pokemon in pokemonList
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });