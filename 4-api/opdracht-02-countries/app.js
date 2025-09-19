const apiUrl = 'https://restcountries.com/v2/all';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('countries');
    container.innerHTML = ''; // Clear "Laden..."

    const first20 = data.slice(0, 20);

    first20.forEach(country => {
      const capital = country.capital ? country.capital[0] : 'Onbekend';
      const flagUrl = country.flags?.png || '';

      const card = document.createElement('div');
      card.classList.add('country-card');

      card.innerHTML = `
        <img class="country-flag" src="${flagUrl}" alt="Vlag van ${country.name.official}" />
        <div class="country-name">${country.name.official}</div>
        <div class="country-info"><strong>Hoofdstad:</strong> ${capital}</div>
        <div class="country-info"><strong>Bevolking:</strong> ${country.population.toLocaleString('nl-NL')}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    const container = document.getElementById('countries');
    container.innerHTML = '<p>Er ging iets mis met het laden van de landen.</p>';
    // console.error('Fout:', error);
  });
