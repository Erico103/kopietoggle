const btn = document.querySelector("toggle-btn");
const body = document.querySelector("body");

const gray = document.querySelector(".bg-gray");
const red = document.querySelector(".bg-red");
const orange = document.querySelector(".bg-orange");
const purple = document.querySelector(".bg-purple");
const green = document.querySelector(".bg-green");

const slideBtn = document.querySelector(".toggle-btn");

const changeBtn = document.querySelectorAll("li");
let message = document.querySelector(".nav>p ");

// de slide weergeven

slideBtn.addEventListener("mouseover", function () {
  showLink();
});


function showLink() {
  document.querySelector(".sidebar").classList.toggle("active");
}

// de background veranderen van de body

gray.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-red",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-gray", "sidebar");
  message.textContent = "GRAY";
});

red.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-orange",
    "bg-purple",
    "bg-green"
  );
  body.classList.add("bg-red", "sidebar");
  message.innerText = "RED";
});
orange.addEventListener("click", () => {
  body.classList.remove("active", "bg-gray", "bg-red", "bg-purple", "bg-green");
  body.classList.add("bg-orange", "sidebar");
  message.innerText = "ORANGE";
});
purple.addEventListener("click", () => {
  body.classList.remove("active", "bg-gray", "bg-red", "bg-orange", "bg-green");
  body.classList.add("bg-purple", "sidebar");
  message.innerText = "PURPLE";
});
green.addEventListener("click", () => {
  body.classList.remove(
    "active",
    "bg-gray",
    "bg-red",
    "bg-orange",
    "bg-purple"
  );
  body.classList.add("bg-green", "sidebar");
  message.innerText = "GREEN";
});

// kleuren weergeven op nummer en nummeriek toetsenbord

document.addEventListener("keydown", chooseColor);

function chooseColor(e) {
  if (e.keyCode == 49 || e.keyCode == 97) {
    body.className = "bg-gray";
    message.innerText = "GRAY";
  } else if (e.keyCode == 50 || e.keyCode == 98) {
    body.className = "bg-red";
    message.innerText = "RED";
  } else if (e.keyCode == 51 || e.keyCode == 99) {
    body.className = "bg-orange";
    message.innerText = "ORANGE";
  } else if (e.keyCode == 52 || e.keyCode == 100) {
    body.className = "bg-purple";
    message.innerText = "PURPLE";
  } else if (e.keyCode == 53 || e.keyCode == 101) {
    body.className = "bg-green";
    message.innerText = "GREEN";
  }
}

