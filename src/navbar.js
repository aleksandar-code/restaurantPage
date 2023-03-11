const content = document.getElementById("content");
const header = document.createElement("header");
const menuBtn = document.createElement("button");
menuBtn.setAttribute("id", "menu-button");
menuBtn.textContent = "Menu";
const contactBtn = document.createElement("button");
contactBtn.setAttribute("id", "contact-button");
contactBtn.textContent = "Contact";
const homeBtn = document.createElement("button");
homeBtn.setAttribute("id", "order-button");
homeBtn.textContent = "Home";

header.append(homeBtn, menuBtn, contactBtn);
content.appendChild(header);
