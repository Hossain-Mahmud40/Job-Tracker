console.log("machine.js is connected");
let intCount = 0;
let rejCount = 0;
let totalCount = 8;
let activeTab = "all";
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

// Interview Function
function markInterview(id) {
  const card = document.getElementById(id);

  if (card.classList.contains("status-interview") === false) {
    if (card.classList.contains("status-rejected") === true) {
      card.classList.remove("status-rejected");
      rejCount = rejCount - 1;
      document.getElementById("rejected-count").innerText = rejCount;
    }

    card.classList.add("status-interview");
    intCount = intCount + 1;
    document.getElementById("interview-count").innerText = intCount;
  }
  filterJobs(activeTab);
}

// rejected button er function
function markRejected(id) {
  const card = document.getElementById(id);

  if (card.classList.contains("status-rejected") === false) {
    if (card.classList.contains("status-interview") === true) {
      card.classList.remove("status-interview");
      intCount = intCount - 1;
      document.getElementById("interview-count").innerText = intCount;
    }

    card.classList.add("status-rejected");
    rejCount = rejCount + 1;
    document.getElementById("rejected-count").innerText = rejCount;
  }
  filterJobs(activeTab);
}

// Filterjobs er function
function filterJobs(tabName) {
  activeTab = tabName;
  document.getElementById("btn-all").classList.remove("btn-primary");
  document.getElementById("btn-interview").classList.remove("btn-primary");
  document.getElementById("btn-rejected").classList.remove("btn-primary");

  if (tabName === "all") {
    document.getElementById("btn-all").classList.add("btn-primary");
  } else if (tabName === "interview") {
    document.getElementById("btn-interview").classList.add("btn-primary");
  } else if (tabName === "rejected") {
    document.getElementById("btn-rejected").classList.add("btn-primary");
  }
  let visibleJobs = 0;
  const cards = document.querySelectorAll("#hero-card .card");
  for (const card of cards) {
    // All tab er jonno
    if (tabName === "all") {
      card.classList.remove("hidden");
      visibleJobs++;
    }
    // Interview tab er jonno
    else if (tabName === "interview") {
      if (card.classList.contains("status-interview") === true) {
        card.classList.remove("hidden");
        visibleJobs++;
      } else {
        card.classList.add("hidden");
      }
    }
    // Rejected tab er jonno
    else if (tabName === "rejected") {
      if (card.classList.contains("status-rejected") === true) {
        card.classList.remove("hidden");
        visibleJobs++;
      } else {
        card.classList.add("hidden");
      }
    }
  }
  document.getElementById("tab-job-count").innerText = visibleJobs;
  const noJobsSection = document.getElementById("No-Jobs");
  const heroCardSection = document.getElementById("hero-card");
  if (visibleJobs === 0) {
    noJobsSection.classList.remove("hidden");
    heroCardSection.classList.add("hidden");
  } else {
    noJobsSection.classList.add("hidden");
    heroCardSection.classList.remove("hidden");
  }
}
