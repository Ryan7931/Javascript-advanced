// maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
// het object moet de volgende properties bevatten:

// de titel van het boek (string)

// de auteur van het boek (string)

// de uitgeverij van het boek (string)

// het jaar van publicatie van het boek (number)

// aantal verkochte exemplaren (number)

// prijs van het boek (number)

// toon elke property op het scherm door het in een p-tag te plaatsen. 
// hiervoor maak je in de HTML een div met de class output 
// de code moet in het engels

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    year: 1925,
    sold: 25000000,
    price: 15.99
};

const outputDiv = document.querySelector('.output');

for (const key in book) {
    const p = document.createElement('p');
    p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${book[key]}`;
    outputDiv.appendChild(p);
}
