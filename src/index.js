import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import Menu from "./menu";
import "./index.css";

const content = document.getElementById("content");
let showTab;
function initNavbar() {
  Navbar();
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showTab(button.textContent);
    });
  });
}

function reset() {
  content.removeChild(content.lastChild);
}

function showHome() {
  reset();
  Home();
}

function showMenu() {
  reset();
  Menu();
}

function showContact() {
  reset();
  Contact();
}

showTab = (tab) => {
  switch (tab) {
    case "Home":
      showHome();
      break;
    case "Menu":
      showMenu();
      break;
    case "Contact":
      showContact();
      break;
    default:
      console.log("no switch");
  }
};

function initPage() {
  initNavbar();
  Home();
}

initPage();
