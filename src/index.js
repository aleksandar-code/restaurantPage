import navbar from "./navbar";
import home from "./home";
import contact from "./contact";
import "./index.css";

const content = document.getElementById("content");

function showHome() {
  const element = home;
  content.appendChild(element);
}

function showMenu() {
  const element = navbar;
  content.appendChild(element);
}

function showContact() {
  const element = contact;
  content.appendChild(element);
}

function showTab(tab) {
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
}

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.textContent);
  });
});
