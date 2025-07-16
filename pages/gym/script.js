// Days mapping starting from Sunday
const customDays = [
  "Sunday 🟥 - Upper A",
  "Monday 🟧 - Lower A",
  "Tuesday 💧 - Rest / Cardio",
  "Wednesday 🟦 - Upper B",
  "Thursday 🟨 - Lower B",
  "Friday 🌿 - Rest",
  "Saturday 🌿 - Rest"
];

// Show today's workout
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date().getDay(); // Sunday = 0
  document.getElementById("todayWorkout").innerText = customDays[today];
  loadProgress();
  loadChart();
});

// Save workout weights + bodyweight to localStorage
function saveProgress() {
  const bodyWeight = document.getElementById("bodyWeight").value;
  const timestamp = new Date().toLocaleString();
  localStorage.setItem("lastUpdated", timestamp);

  // Save weight log
  let weightLog = JSON.parse(localStorage.getItem("weightLog") || "[]");
  if (bodyWeight) {
    weightLog.push({ date: new Date().toLocaleDateString(), weight: parseFloat(bodyWeight) });
    localStorage.setItem("weightLog", JSON.stringify(weightLog));
  }

  // Save all exercise weights
  const inputs = document.querySelectorAll(".exercise input");
  inputs.forEach(input => {
    localStorage.setItem(input.id, input.value);
  });

  // Save bodyweight separately
  localStorage.setItem("bodyWeight", bodyWeight);

  // Update timestamp
  document.getElementById("lastUpdate").innerText = `Last updated: ${timestamp}`;
  loadChart();
  alert("✅ Progress saved!");
}

// Load saved data
function loadProgress() {
  const inputs = document.querySelectorAll(".exercise input");
  inputs.forEach(input => {
    input.value = localStorage.getItem(input.id) || '';
  });

  document.getElementById("bodyWeight").value = localStorage.getItem("bodyWeight") || '';
  const last = localStorage.getItem("lastUpdated");
  if (last) {
    document.getElementById("lastUpdate").innerText = `Last updated: ${last}`;
  }
}

// Export to JSON file
function exportProgress() {
  const data = {};
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      data[key] = localStorage.getItem(key);
    }
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "progress-data.json";
  link.click();
}

// Import JSON file
function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      for (let key in data) {
        localStorage.setItem(key, data[key]);
      }
      loadProgress();
      loadChart();
      alert("✅ Progress imported!");
    } catch (err) {
      alert("❌ Invalid file format.");
    }
  };
  reader.readAsText(file);
}

// Draw weight chart
function loadChart() {
  const ctx = document.getElementById("progressChart").getContext("2d");
  const weightLog = JSON.parse(localStorage.getItem("weightLog") || "[]");

  if (window.weightChart) {
    window.weightChart.destroy();
  }

  window.weightChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: weightLog.map(entry => entry.date),
      datasets: [{
        label: 'Body Weight (kg)',
        data: weightLog.map(entry => entry.weight),
        borderColor: '#0077ff',
        backgroundColor: '#cce4ff',
        fill: true,
        tension: 0.3,
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Body Weight Over Time' }
      },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
}
