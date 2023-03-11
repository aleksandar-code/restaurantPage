import Burger from "./burger.jpg";
import Pizza from "./pizza2.jpg";
import Lasagne from "./lasagne.jpg";
import Spaghetti from "./spaghetti.jpg";

const Menu = () => {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  const headline = document.createElement("h1");
  headline.textContent = "Menu";

  const content = document.getElementById("content");

  function createDish(name, money, img) {
    const dishHolder = document.createElement("div");
    dishHolder.classList.add("food-card");
    const copy = document.createElement("p");
    copy.textContent = name;
    const image = document.createElement("img");
    image.src = img;
    const price = document.createElement("p");
    price.textContent = money;
    price.style.color = "red";
    dishHolder.append(copy, image, price);
    return dishHolder;
  }

  menu.append(
    headline,
    createDish("Burger", "10$", Burger),
    createDish("Pizza", "20$", Pizza),
    createDish("Lasagne", "25$", Lasagne),
    createDish("Spaghetti", "40$", Spaghetti)
  );
  content.appendChild(menu);
};
export default Menu;
