let pageStyle = localStorage.getItem("pageStyle") || "xp.css";
document.getElementById("pageStyle").setAttribute("href", "styles/"+pageStyle);

let styleSelect = document.getElementById("styleSelect");
styleSelect.addEventListener("change", function() {
  let selectedStyle = styleSelect.value;
    localStorage.setItem("pageStyle", selectedStyle);
    document.getElementById("pageStyle").setAttribute("href", "styles/"+selectedStyle);
    window.location.reload();
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