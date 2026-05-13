function addPerson() {

  const container = document.getElementById("people-container");

  const row = document.createElement("div");
  row.className = "person-row";

  row.innerHTML = `
    <label>이름:</label>
    <input type="text" placeholder="이름 입력">
  `;

  container.appendChild(row);
}

function shufflePositions() {

  const inputs = document.querySelectorAll(".person-row input");

  const names = [];

  inputs.forEach(input => {

    const value = input.value.trim();

    if (value !== "") {
      names.push(value);
    }

  });

  if (names.length < 2) {
    alert("최소 2명 이상 필요합니다.");
    return;
  }

  const shuffled = [...names];

  let valid = false;

  while (!valid) {

    for (let i = shuffled.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    valid = true;

    for (let i = 0; i < names.length; i++) {

      if (names[i] === shuffled[i]) {
        valid = false;
        break;
      }

    }

  }

  const resultBox = document.getElementById("resultBox");

  resultBox.innerHTML = "";

  for (let i = 0; i < names.length; i++) {

    const div = document.createElement("div");

    div.className = "result-item";

    div.innerHTML = `
      <strong>${names[i]}</strong>
      <span class="arrow">→</span>
      <strong>${shuffled[i]}의 위치</strong>
    `;

    resultBox.appendChild(div);

  }

}
