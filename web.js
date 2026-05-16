function toggleSocials() {
  document.getElementById("socialLinks").classList.toggle("show");
}

// Close the menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function buy() {
  alert("Added to your garage!");
}
function showCart() {
  alert("Your garage is empty.");
}
function buy() {
  window.open("https://t.me/yourusername", "_blank");
}

function openGallery() {
  document.getElementById("lightbox").style.display = "flex";

  currentXP += 10;

  document.getElementById("xp-display").innerText = currentXP;

  let percentage = (currentXP / 1000) * 100;
  document.querySelector(".xp-bar-fill").style.width = percentage + "%";
}
function swap(imgSrc) {
  document.getElementById("currentView").src = imgSrc;

  const main = document.getElementById("currentView");
  main.style.opacity = 0;
  setTimeout(() => {
    main.style.opacity = 1;
  }, 50);
}
function closeError() {
  const intro = document.getElementById("intro-screen");
  const shop = document.getElementById("main-shop");

  intro.style.transform = "translateY(-100%)";

  shop.style.opacity = "1";

  setTimeout(() => {
    intro.remove();
  }, 600);
}
