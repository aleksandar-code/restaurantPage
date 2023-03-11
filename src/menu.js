const Menu = () => {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  const headline = document.createElement("h1");
  headline.textContent = "Menu";

  const content = document.getElementById("content");
  menu.appendChild(headline);
  content.appendChild(menu);
};
export default Menu;
