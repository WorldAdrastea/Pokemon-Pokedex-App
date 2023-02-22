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
//creates a for loop that iterates over each item in pokemonList and returns the name and height

/*for (i = 0; pokemonList[i]; i++); {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") ");
} */


for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") ");
    if (heightConditional = pokemonList[i].height >= 1.0 ? "- Wow that's big " : ""); {
        document.write(heightConditional);
    }
}