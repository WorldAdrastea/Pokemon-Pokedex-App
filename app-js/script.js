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
        if (pokemon.typeof === Object && Object.keys(pokemon) === Object.keys(pokemonList) ? pokemonList.push(pokemon) : console.log("Wrong Data Type") );
    };

    function getAll() {
        return pokemonList;
    };

    function find(pokemon) {
        pokemonList.name.filter(pokemonList.name === pokemon.name); {
            return pokemon.name;
        };
    };

    return {
        add: add,
        getAll: getAll,
        find: find
    };
})();

pokemonRepository.getAll().forEach((pokemonList) => {
    document.write(pokemonList.name + " (Height: " + pokemonList.height + ") ");
    if (heightConditional = pokemonList.height >= 1.0 ? "- Wow that's big " : ""); {
        document.write(heightConditional);
    }
});