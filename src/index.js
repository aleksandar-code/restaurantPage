import navbar from "./navbar";
import home from "./home";
import "./index.css";

function showTab(tab) {
  switch (tab) {
    case "Home":
      console.log("switch home");
      break;
    case "Menu":
      console.log("switch menu");
      break;
    case "Contact":
      console.log("switch contact");
      break;
    default:
      console.log("no switch");
  }
}

function showHome() {
  const element = home;

  return element;
}

function showMenu() {
  const element = navbar;
  return element;
}

const content = document.getElementById("content");

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.textContent);
  });
});
