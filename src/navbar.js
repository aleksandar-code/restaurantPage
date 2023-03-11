const Navbar = () => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menu-button");
  menuBtn.textContent = "Menu";
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("id", "about-button");
  aboutBtn.textContent = "About";
  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "order-button");
  homeBtn.textContent = "Home";

  header.append(homeBtn, menuBtn, aboutBtn);
  content.appendChild(header);
};
export default Navbar;
