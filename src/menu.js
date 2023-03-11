const Menu = () => {
  const headline = document.createElement("h1");
  headline.textContent = "Menu";

  const content = document.getElementById("content");
  content.appendChild(headline);
};
export default Menu;
