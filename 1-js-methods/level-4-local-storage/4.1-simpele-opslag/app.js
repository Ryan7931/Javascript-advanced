// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;
    
    // TODO: Check of naam niet leeg is
    if (naam.trim() === '') {
        alert('Voer eerst een naam in!');
        return;
    }
    
    // TODO: Sla naam op in localStorage
    localStorage.setItem('gebruikersnaam', naam);
    
    // TODO: Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem('gebruikersnaam');
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
    if (opgeslagenNaam) {
        welkomElement.textContent = `Welkom, ${opgeslagenNaam}!`;
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // TODO: Verwijder naam uit localStorage
    localStorage.removeItem('gebruikersnaam');
    
    toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
window.addEventListener('DOMContentLoaded', toonWelkom);  