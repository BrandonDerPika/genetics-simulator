const toneNames = ["Pale", "Light", "Mixed", "Dark", "Ebony"];
const resultBox = document.getElementById("resultBox");
const resultsList = document.getElementById("results");

// Create dropdowns dynamically
function createDropdown(id) {
  const sel = document.getElementById(id);
  sel.innerHTML = "";
  [0, 1].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = `${val} (${val === 0 ? "light" : "dark"})`;
    sel.appendChild(opt);
  });
}

["p1A1", "p1A2", "p1B1", "p1B2", "p2A1", "p2A2", "p2B1", "p2B2"].forEach(createDropdown);

function updateParentPhenotype(parentNum) {
  const a1 = parseInt(document.getElementById(`p${parentNum}A1`).value);
  const a2 = parseInt(document.getElementById(`p${parentNum}A2`).value);
  const b1 = parseInt(document.getElementById(`p${parentNum}B1`).value);
  const b2 = parseInt(document.getElementById(`p${parentNum}B2`).value);
  const total = a1 + a2 + b1 + b2;
  document.getElementById(`parent${parentNum}Phenotype`).textContent = `${total} (${toneNames[total]})`;
}

// Generate all combinations of 4 alleles that sum to a target tone
function generateAlleleCombos(targetSum) {
  const combos = [];
  const values = [0, 1];
  for (let a1 of values)
    for (let a2 of values)
      for (let b1 of values)
        for (let b2 of values)
          if (a1 + a2 + b1 + b2 === targetSum)
            combos.push([a1, a2, b1, b2]);
  return combos;
}

// Randomly spawn a parent with a selected phenotype
function spawnParent(parentNum) {
  const toneSelect = document.getElementById(`spawnP${parentNum}Tone`);
  const toneValue = parseInt(toneSelect.value);
  const combos = generateAlleleCombos(toneValue);
  const chosen = combos[Math.floor(Math.random() * combos.length)];
  document.getElementById(`p${parentNum}A1`).value = chosen[0];
  document.getElementById(`p${parentNum}A2`).value = chosen[1];
  document.getElementById(`p${parentNum}B1`).value = chosen[2];
  document.getElementById(`p${parentNum}B2`).value = chosen[3];
  updateParentPhenotype(parentNum);
}

// Form submission
const form = document.getElementById("geneticsForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  resultsList.innerHTML = "";

  const getVal = (id) => parseInt(document.getElementById(id).value);

  const p1A = [getVal("p1A1"), getVal("p1A2")];
  const p1B = [getVal("p1B1"), getVal("p1B2")];
  const p2A = [getVal("p2A1"), getVal("p2A2")];
  const p2B = [getVal("p2B1"), getVal("p2B2")];

  updateParentPhenotype(1);
  updateParentPhenotype(2);

  const childCombos = new Set();

  for (let a1 of p1A) {
    for (let a2 of p2A) {
      for (let b1 of p1B) {
        for (let b2 of p2B) {
          const totalMelanin = a1 + a2 + b1 + b2;
          const tone = toneNames[totalMelanin];
          const genotype = `[${a1},${a2}] + [${b1},${b2}] → ${totalMelanin} (${tone})`;
          childCombos.add(genotype);
        }
      }
    }
  }

  childCombos.forEach((genotype) => {
    const li = document.createElement("li");
    li.textContent = genotype;
    resultsList.appendChild(li);
  });

  resultBox.style.display = "block";
});
