const students = [
  {
    id: 1,
    naam: "Emma van Dijk",
    leeftijd: 20,
    studie: "Frontend Development",
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: "Liam de Boer",
    leeftijd: 19,
    studie: "Backend Development",
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: "Sophie Jansen",
    leeftijd: 21,
    studie: "Frontend Development",
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: "Daan Peters",
    leeftijd: 22,
    studie: "Fullstack Development",
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: "Evi de Wit",
    leeftijd: 20,
    studie: "Frontend Development",
    cijfer: 8.9,
    actief: true,
  },
];

function toonAlleStudenten() {
  //   // 📝 WAT MOET JE DOEN:
  for (const student of students) {
    console.log(student);
  }
  const html = students
    .map((student) => {
      return `
    <article class="${student.actief ? "actief" : "inactief"}">
      <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
      📚 ${student.studie}<br>
      📊 Cijfer: ${student.cijfer} | Status: ${
        student.actief ? "✅ Actief" : "❌ Inactief"
      }
    </article>
  `;
    })
    .join("");
  document.getElementById("studenten-lijst").innerHTML = html;
}

function toonActieveStudenten() {
  // 📝 WAT MOET JE DOEN:
  // 1. Filter de students array op studenten waar actief === true
  const actieveStudenten = students.filter(
    (student) => student.actief === true
  );
  // 2. Toon alleen die gefilterde studenten (gebruik dezelfde HTML als hierboven)
  const html = actieveStudenten
    .map((student) => {
      return `
    <article class="${student.actief ? "actief" : "inactief"}">
      <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
      📚 ${student.studie}<br>
      📊 Cijfer: ${student.cijfer} | Status: ${
        student.actief ? "✅ Actief" : "❌ Inactief"
      }
    </article>
  `;
    })
    .join("");

  document.getElementById("studenten-lijst").innerHTML = html;
}

function toonTopStudenten() {
  // 📝 WAT MOET JE DOEN:
  const topStudenten = students.filter((student) => student.cijfer >= 8.0);

  const html = topStudenten.map((student) => {
      return `
    <article class="${student.actief ? "actief" : "inactief"}">
      <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
      📚 ${student.studie}<br>
      📊 Cijfer: ${student.cijfer} | Status: ${
        student.actief ? "✅ Actief" : "❌ Inactief"
      }
    </article>
  `;
    })
    .join("");

  document.getElementById("studenten-lijst").innerHTML = html;
}

// 🚀 START DE APPLICATIE - roep deze aan als de pagina laadt
window.onload = () => {
  toonAlleStudenten();
};

