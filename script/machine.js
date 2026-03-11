console.log("machine.js is connected");

// machine id --> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}
//machine id > hide all> show id

function showOnly(id) {
  // shob gula id nao
  const heroCard = document.getElementById("hero-card");
  const noJobs = document.getElementById("No-Jobs");
  // Shobai k hide koro
  heroCard.classList.add("hidden");
  noJobs.classList.add("hidden");
  // select kora ta k show koro
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
