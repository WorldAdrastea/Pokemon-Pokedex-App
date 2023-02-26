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

pokemonList.forEach((pokemonList) => {
    document.write(pokemonList.name + " (Height: " + pokemonList.height + ") ");
    if (heightConditional = pokemonList.height >= 1.0 ? "- Wow that's big " : ""); {
        document.write(heightConditional);
    }
});