const apiUrl = 'https://fortnite-api.com/v2/cosmetics/br';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkprobleem bij ophalen API');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('cosmetics');
    container.innerHTML = ''; // Clear 'Laden...'

    const cosmetics = data.data;

    cosmetics.slice(0, 100).forEach(item => {
      const div = document.createElement('div');
      div.classList.add('cosmetic-item');

      div.innerHTML = `
        <img src="${item.images.icon}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>Type: ${item.type.displayValue}</p>
        <p>Rarity: ${item.rarity.displayValue}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('cosmetics').innerHTML = '<p>Er is iets misgegaan met het laden van de cosmetica.</p>';
    console.error('Fout:', error);
  });
