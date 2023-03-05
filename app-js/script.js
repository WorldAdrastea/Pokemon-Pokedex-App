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

    function add(pokemon) {
        if (typeof(pokemon) === "object" && Object.keys(pokemonList[0]).every((val, i, p) => val === p[i]) ? pokemonList.push(pokemon) : console.log("Wrong Data Type"));
    };

    function getAll() {
        return pokemonList;
    };

    function find(pokemonName) {
       return pokemonList.filter(pokemon => pokemon.name === pokemonName);
    };

    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('ul');
        let listItem = document.createElement('li');
        listItem.classList.add('pokedexStyle')
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonButtonStyle');
        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        find: find,
        addListItem: addListItem,
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});