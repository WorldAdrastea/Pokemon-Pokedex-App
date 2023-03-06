//IIFE with pokemon list
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 0.7,
            type: ['Grass', 'Poison']
        },
        {
            name: "Charmander",
            height: 1.6,
            type: ['Fire']
        },
        {
            name: "Squirtle",
            height: 0.5,
            type: ['Water']
        }
    ];
    //function to add pokemon to array list
    function add(pokemon) {
        if (typeof(pokemon) === "object" && Object.keys(pokemonList[0]).every((val, i, p) => val === p[i]) ? pokemonList.push(pokemon) : console.log("Wrong Data Type"));
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
        button.addEventListener('click', showDetails(pokemon));
    };
    //function to show the details of pokemon (console log for now)
    function showDetails(pokemon) {
        console.log(pokemon.name);
    };
    //returns functions so that they can be used outside of IIFE
    return {
        add: add,
        getAll: getAll,
        find: find,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();
//runs addListItem for each of the pokemon in pokemonList
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});