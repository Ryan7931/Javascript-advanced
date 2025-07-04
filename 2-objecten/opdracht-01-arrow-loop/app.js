// maak een array genaam marvels en plaats hier 4 marvel films in

const marvels = ['Avengers: Infinity War', 'Black Panther', 'Spider man: Homecoming', 'Thor: Ragnarok'];

// maak een arrow function genaamd 'addMarvel'
// in je functie voeg je een nieuwe marvel film toe zonder dit zelf in de bovenstaande array toe te voegen

const addMarvel = (movie) => {
  marvels.push(movie);
}

// roep de functie op

addMarvel('Avengers: Endgame');

// loop met een for/of loop door de array en toon alle items in de array in je console

for (const film of marvels) {
  console.log(film);
}
