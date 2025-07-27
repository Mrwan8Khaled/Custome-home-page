console.log(localStorage.getItem("pageStyle"));
document.getElementById("pageStyle").setAttribute("href", localStorage.getItem("pageStyle") ? "styles/"+localStorage.getItem("pageStyle") : "styles/xp.css");
console.log(localStorage.getItem("pageStyle"));

let styleSelect = document.getElementById("styleSelect");
console.log(localStorage.getItem("pageStyle"));

styleSelect.addEventListener("change", function() {
    let selectedStyle = styleSelect.value;
    localStorage.setItem("pageStyle", selectedStyle);
    document.getElementById("pageStyle").setAttribute("href", "styles/"+selectedStyle);
});

let settingsButton = document.getElementById("settings");
let settingsMenu = document.querySelector(".settingsMenu");

settingsButton.addEventListener("click", function() {
  if (settingsMenu.style.display === "none" || settingsMenu.style.display === "") {
    settingsMenu.style.display = "block";
  } else {
    settingsMenu.style.display = "none";
  }
})

document.getElementById("searchBtn").addEventListener("click", function() {
  let searchInput = document.getElementById("searchInput").value;
  if (searchInput) {
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchInput);
  } else {
    alert("Please enter a search term.");
  }
});
document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
document.getElementById("searchInput").addEventListener("focus", function() {
  this.style.width = "300px";
});
document.getElementById("searchInput").addEventListener("blur", function() {
  if (!this.value) {
    this.style.width = "200px";
  }
});
document.getElementById("searchInput").addEventListener("input", function() {       
  if (this.value) {
    this.style.width = "300px";
  } else {
    this.style.width = "200px";
  }
});
document.getElementById("AiBtn").addEventListener("click", function() {
  alert("AI feature is under development.");
});