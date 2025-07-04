// stap 1: 
// maak een persoon waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.
// het object moet de volgende properties bevatten:
// de naam van de persoon (string)
// de leeftijd van de persoon (number)
// de geboortedatum van de persoon (string)
// het geslacht van de persoon (string)
// geef aan of de persoon nog leeft (boolean)
// 4 hobby's van de persoon (array)
// toon elke property op het scherm door het in een p-tag te plaatsen. 
// hiervoor gebruik je de div van de vorige opdracht.

// stap 2:
// het object moet ook de volgende methods bevatten:
// een method die de naam moet veranderen. de naam moet je via parameters kunnen Meegeven. 
// een method die het 'in leven' property kan veranderen. 
// een method die een extra hobby toevoegt aan de Array. een hobby moet je via parameters kunnen Meegeven.
// toon de wijzigingen op het scherm. 
// gebruik geen arrow functions in een object.
// het moet nog steeds allemaal in het engels zijn.

const person = {
    name: "John Doe",
    age: 30,
    birthdate: "1995-05-15",
    gender: "male",
    alive: true,
    hobbies: ["reading", "cycling", "gaming", "cooking"],
    // Method to change the name
    changeName: function(newName) {
        this.name = newName;
        showPerson();
    },
    // Method to change alive status
    setAlive: function(status) {
        this.alive = status;
        showPerson();
    },
    // Method to add a hobby
    addHobby: function(hobby) {
        this.hobbies.push(hobby);
        showPerson();
    }
};

const outputDiv = document.querySelector('.output');

function showPerson() {
    outputDiv.innerHTML = '';
    for (const key in person) {
        if (typeof person[key] !== 'function') {
            const p = document.createElement('p');
            p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${Array.isArray(person[key]) ? person[key].join(', ') : person[key]}`;
            outputDiv.appendChild(p);
        }
    }
}

showPerson();
// Example usage:
// person.changeName('Jane Smith');
// person.setAlive(false);
// person.addHobby('swimming');



