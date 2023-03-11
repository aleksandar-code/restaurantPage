import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import Menu from "./menu";
import "./index.css";

const content = document.getElementById("content");

function reset() {
  content.removeChild(content.lastChild);
}
function showTab(tab) {
  switch (tab) {
    case "Home":
      reset();
      Home();
      break;
    case "Menu":
      reset();
      Menu();
      break;
    case "Contact":
      reset();
      Contact();
      break;
    default:
      console.log("no switch");
  }
}
function initNavbar() {
  Navbar();
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showTab(button.textContent);
    });
  });
}

function initPage() {
  initNavbar();
  Home();
}

initPage();
