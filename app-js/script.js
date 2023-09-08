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
    let pokemonUl = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add('pokedexStyle');
    listItem.classList.add('list-group-item');
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal-container');
    button.innerText = pokemon.name;
    button.setAttribute('id', 'modal');
    button.classList.add('pokemonButtonStyle');
    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);
    //Adds the pokemon details in when the button is clicked
    button.addEventListener('click', function () {
        showDetails(pokemon);
    });
  };

  //function to show the details of pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  };

  //function to show the Modal of pokemon
  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    
    //Clear all existing modal content
    modalTitle.innerHTML = '';
    modalBody.innerHTML = '';
    
    //Adds name of pokemon at top of modal
    let titleElement = document.createElement('h1');
    titleElement.innerHTML = pokemon.name;

    //Adds animated gif sprite of pokemon
    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;

    //Adds name of pokemon inside the modal
    let subName = document.createElement('p');
    subName.classList.add('nameStyle');
    subName.innerHTML = 'Name: ' + pokemon.name;

    //Adds height details of pokemon
    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height / 10 + 'm';

    modalTitle.appendChild(titleElement);
    modalBody.appendChild(subName);
    modalBody.appendChild(contentElement);
    modalBody.appendChild(pokemonImage);
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
      item.imageUrl = details.sprites.versions['generation-v']['black-white'].animated.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  };

  //Search bar
  function searchBar() {
    var input, filter, ul, li, textValue;
    input = document.getElementById("pokemonSearch");
    filter = input.value.toLowerCase();
    ul = document.querySelector(".pokemon-list");
    li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
      button = li[i].querySelector(".btn-primary");
      textValue = button.textContent || button.innerText;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  //returns functions so that they can be used outside of IIFE
  return {
    add: add,
    getAll: getAll,
    find: find,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    searchBar: searchBar,
  };
})();

//Using loadList to load data for pokemon + runs addListItem for each of the pokemon in pokemonList
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});