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

// Define workout splits
let exercises = [
  // Upper A - Sunday
  [
    ["Bench Press", "4 x 8", "https://youtu.be/gRVjAtPip0Y"],
    ["Incline Machine Press", "4 x 10", "https://youtu.be/DbFgADa2PL8"],
    ["Chest Fly Machine", "4 x 12", "https://youtu.be/eozdVDA78K0"],
    ["Shoulder Press Machine", "4 x 8", "https://youtu.be/B-aVuyhvLHU"],
    ["Deltoid Raise Machine", "4 x 12", "https://youtu.be/1Kx74XnZ4Zk"],
    ["Reverse Pec Deck", "4 x 12", "https://youtu.be/ImD6xUu0EdU"],
    ["Dumbbell Curl", "4 x 10", "https://youtu.be/sAq_ocpRh_I"],
    ["Bicep Curl Isolateral", "4 x 10", "https://youtu.be/jytBfRQ72yQ"],
    ["Triceps Pushdown (Rope)", "4 x 12", "https://youtu.be/2-LAMcpzODU"],
    ["Overhead Dumbbell Extension", "4 x 10", "https://youtu.be/_gsUck-7M74"],

    ["Pull-Ups", "4 x 3", "https://youtu.be/eGo4IYlbE5g"],
    ["Lat Pulldown", "4 x 10", "https://youtu.be/CAwf7n6Luuc"],
    ["Seated Cable Row", "4 x 12", "https://youtu.be/HJSVR_67OlM"],
    ["Wide Grip Row", "4 x 12", "https://youtu.be/GZbfZ033f74"],
    ["T-Bar Row", "4 x 10", "https://youtu.be/8Lmq0Tu5QYg"],
    ["Reverse Pec Deck", "4 x 15", "https://youtu.be/ImD6xUu0EdU"],
    ["Dumbbell Shrugs", "4 x 12", "https://youtu.be/3nXY4EFN20o"],
    ["Back Extension", "3 x 15", "https://youtu.be/ph3pddpKzzw"],
  ],
  // Lower A - Monday
  [
    ["Leg Extension", "4 x 12", "https://youtu.be/YyvSfVjQeL0"],
    ["Leg Curl (Seated)", "4 x 12", "https://youtu.be/1Tq3QdYUuHs"],
    ["Adduction Machine", "3 x 15", "https://youtu.be/mcLsjT1CyU4"],
    ["Abduction Machine", "3 x 15", "https://youtu.be/HzhpO2-j3is"],
    ["Seated Leg Press", "4 x 10", "https://youtu.be/MVmKZqU6hWc"],
    ["Standing Calf Raise", "4 x 20", "https://youtu.be/-M4-G8p8fmc"],


    ["Crunches", "3 x 20", "https://youtu.be/Xyd_fa5zoEU"],
    ["Plank", "3 x 30 sec", "https://youtu.be/pSHjTRCQxIw"],
    ["Hanging Leg Raises", "3 x 10", "https://youtu.be/13j0c9a1b2g"],
    ["Side Crunches", "3 x 20 (10 each side)", "https://youtu.be/w0OWFjfI3zM"],
    ["Side Plank (Each Side)", "3 x 30 sec", "https://youtu.be/wqzrb67Dwf8"],
    ["Russian Twist", "3 x 20 (10 each side)", "https://youtu.be/wkD8rjkodUI"]    
  ],
  // Rest / Cardio - Tuesday
  [],
  // Upper B - Wednesday
  [
    ["Bench Press", "4 x 8", "https://youtu.be/gRVjAtPip0Y"],
    ["Incline Machine Press", "4 x 10", "https://youtu.be/DbFgADa2PL8"],
    ["Chest Fly Machine", "4 x 12", "https://youtu.be/eozdVDA78K0"],
    ["Shoulder Press Machine", "4 x 8", "https://youtu.be/B-aVuyhvLHU"],
    ["Deltoid Raise Machine", "4 x 12", "https://youtu.be/1Kx74XnZ4Zk"],
    ["Reverse Pec Deck", "4 x 12", "https://youtu.be/ImD6xUu0EdU"],
    ["Dumbbell Curl", "4 x 10", "https://youtu.be/sAq_ocpRh_I"],
    ["Bicep Curl Isolateral", "4 x 10", "https://youtu.be/jytBfRQ72yQ"],
    ["Triceps Pushdown (Rope)", "4 x 12", "https://youtu.be/2-LAMcpzODU"],
    ["Overhead Dumbbell Extension", "4 x 10", "https://youtu.be/_gsUck-7M74"],
    
    ["Pull-Ups", "4 x 3", "https://youtu.be/eGo4IYlbE5g"],
    ["Lat Pulldown", "4 x 10", "https://youtu.be/CAwf7n6Luuc"],
    ["Seated Cable Row", "4 x 12", "https://youtu.be/HJSVR_67OlM"],
    ["Wide Grip Row", "4 x 12", "https://youtu.be/GZbfZ033f74"],
    ["T-Bar Row", "4 x 10", "https://youtu.be/8Lmq0Tu5QYg"],
    ["Reverse Pec Deck", "4 x 15", "https://youtu.be/ImD6xUu0EdU"],
    ["Dumbbell Shrugs", "4 x 12", "https://youtu.be/3nXY4EFN20o"],
    ["Back Extension", "3 x 15", "https://youtu.be/ph3pddpKzzw"]
  ],
  // Lower B - Thursday
  [
    ["Leg Extension", "4 x 12", "https://youtu.be/YyvSfVjQeL0"],
    ["Leg Curl (Lying)", "4 x 12", "https://youtu.be/1Tq3QdYUuHs"],
    ["Adduction Machine", "3 x 15", "https://youtu.be/mcLsjT1CyU4"],
    ["Abduction Machine", "3 x 15", "https://youtu.be/HzhpO2-j3is"],
    ["Seated Leg Press", "4 x 10", "https://youtu.be/MVmKZqU6hWc"],
    ["Standing Calf Raise", "4 x 20", "https://youtu.be/-M4-G8p8fmc"],

    ["Crunches", "3 x 20", "https://youtu.be/Xyd_fa5zoEU"],
    ["Plank", "3 x 30 sec", "https://youtu.be/pSHjTRCQxIw"],
    ["Side Plank (Each Side)", "3 x 30 sec", "https://youtu.be/wqzrb67Dwf8"],
    ["Russian Twist", "3 x 20 (10 each side)", "https://youtu.be/wkD8rjkodUI"]    
  ],
  // Friday - Rest
  [],
  // Saturday - Rest
  []
];

// Show today's workout
window.addEventListener("DOMContentLoaded", () => {
const today = new Date().getDay(); // 0 = Sunday
  document.getElementById("todayWorkout").innerText = customDays[today];
  ShowMainExercises(today);
  generateExercises(today);

  loadProgress();
  loadChart();
});

// Generate exercises list with input fields
function ShowMainExercises(dayIndex) {
  const container = document.getElementById("todayWorkouts");
  container.innerHTML = `
    <table class="exercise-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sets&Reps</th>
          <th>Weight</th>
          <th>Btns</th>
        </tr>
      </thead>
      <tbody id="mainExercisesBody"></tbody>
    </table>
  `;
  const dayExercises = exercises[dayIndex];
  const tbody = container.querySelector("#mainExercisesBody");

  if (!Array.isArray(dayExercises) || dayExercises.length === 0) {
    container.innerHTML = "<p>Rest day! 💤</p>";
    return;
  }

  dayExercises.forEach(([name, sets, link]) => {
    const weightValue = localStorage.getItem(name) || "";
    const setsKey = `${name}_sets`;
    const setsValue = localStorage.getItem(setsKey) || sets;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>
        ${setsValue}
      </td>
      <td>
        ${weightValue}
      </td>
      <td>
        <button class="ExBtn" onclick="focusMode('${name}')">🏋️</button>
        <a href="${link}" target="_blank" class="ExBtn exercise-link">🎥</a>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function generateExercises(dayIndex) {
  const container = document.getElementById("exerciseList");
  container.innerHTML = `
    <table class="exercise-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sets&Reps</th>
          <th>Link</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody id="exerciseListBody"></tbody>
    </table>
  `;
  const dayExercises = exercises[dayIndex];
  const tbody = container.querySelector("#exerciseListBody");

  if (!Array.isArray(dayExercises) || dayExercises.length === 0) {
    container.innerHTML = "<p>Rest day! 💤</p>";
    return;
  }

  dayExercises.forEach(([name, sets, link]) => {
    const weightValue = localStorage.getItem(name) || "";
    const setsKey = `${name}_sets`;
    const setsValue = localStorage.getItem(setsKey) || sets;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>
        <input type="text" id="${setsKey}" class="repsSets" value="${setsValue}" style="width:80px" />
      </td>
      <td>
        <a href="${link}" target="_blank" class="ExBtn exercise-link">🔗</a>
      </td>
      <td>
        <input type="number" id="${name}" class="weightValue" value="${weightValue}" placeholder="Weight (kg)" />
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Helper to update exercises array with latest sets/reps and weight from inputs
function updateExercisesFromInputs() {
  exercises.forEach((day, dayIdx) => {
    if (Array.isArray(day)) {
      day.forEach((ex, exIdx) => {
        const name = ex[0];
        const setsKey = `${name}_sets`;
        const setsInput = document.getElementById(setsKey);
        const weightInput = document.getElementById(name);
        if (setsInput) ex[1] = setsInput.value + "";
        if (weightInput) ex[3] = weightInput.value + "";
      });
    }
  });
}

// Save workout weights + bodyweight to localStorage
function saveProgress() {
  const bodyWeight = document.getElementById("bodyWeight").value;
  const timestamp = new Date().toLocaleString();
  localStorage.setItem("lastUpdated", timestamp);

  // Save body weight log
  if (bodyWeight) {
    const weightLog = JSON.parse(localStorage.getItem("weightLog") || "[]");
    weightLog.push({ date: new Date().toLocaleDateString(), weight: parseFloat(bodyWeight) });
    localStorage.setItem("weightLog", JSON.stringify(weightLog));
    localStorage.setItem("bodyWeight", bodyWeight);
  }

  // Save exercise weights and sets/reps to localStorage
  document.querySelectorAll(".weightValue").forEach(input => {
    localStorage.setItem(input.id, input.value);
  });
  document.querySelectorAll(".repsSets").forEach(input => {
    localStorage.setItem(input.id, input.value);
  });

  // Update exercises array from inputs
  updateExercisesFromInputs();

  document.getElementById("lastUpdate").innerText = `Last updated: ${timestamp}`;
  loadChart();
  alert("✅ Progress saved!");
}

// Load saved data
function loadProgress() {
  document.querySelectorAll(".weightValue").forEach(input => {
    input.value = localStorage.getItem(input.id) || input.value;
  });

  document.querySelectorAll(".repsSets").forEach(input => {
    input.value = localStorage.getItem(input.id) || input.value;
  });

  document.getElementById("bodyWeight").value = localStorage.getItem("bodyWeight") || "";
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

// Delete all localStorage data
function clearAllProgress() {
  localStorage.clear();
  alert("✅ All progress deleted!");
  // Optionally reload page or update UI
  location.reload();
}

// Save localStorage data to data.json
function saveDataToFile() {
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
  link.download = "data.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Load data.json and restore localStorage
function loadDataFromFile(event) {
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
      alert("✅ Data loaded from file!");
    } catch (err) {
      alert("❌ Invalid file format.");
    }
  };
  reader.readAsText(file);
}

// Example usage in HTML:
// <button onclick="saveDataToFile()">Save Data</button>
// <input type="file" accept="application/json" onchange="loadDataFromFile(event)" />