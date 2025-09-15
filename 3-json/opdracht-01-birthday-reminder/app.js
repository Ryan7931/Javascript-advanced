let output = document.querySelector('.birthdays');
let out = '';

function parseISODate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d); // voorkomt UTC-shift
}

fetch('./birthdays.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Bestand niet gevonden');
    }
    return response.json();
  })
  .then((birthdays) => {
    let today = new Date();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();

    for (let person of birthdays) {
      let date = parseISODate(person.date); // hier gebruiken we onze parser
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let isToday = (month === todayMonth && day === todayDay);

      out += `
        <div class="birthday ${isToday ? 'today' : ''}">
          <h2>${person.name}</h2>
          <p>🎉 Geboortedatum: ${day}-${month}-${date.getFullYear()}</p>
          ${isToday ? '<p>🥳 Vandaag jarig!</p>' : ''}
        </div>
      `;
    }

    output.innerHTML = out;
  })
  .catch((error) => {
    console.log('Er ging iets mis:', error);
    output.innerHTML = '<p>Data kon niet geladen worden.</p>';
  });
