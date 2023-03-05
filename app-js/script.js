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

    return {
        add: add,
        getAll: getAll,
        find: find
    };
})();

pokemonRepository.getAll().forEach((pokemonList) => {
    let pokemonUl = document.querySelector('.ul')
    document.write(pokemonList.name + " (Height: " + pokemonList.height + ") ");
    if (heightConditional = pokemonList.height >= 1.0 ? "- Wow that's big " : ""); {
        document.write(heightConditional);
    }
});