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

const headline = document.createElement("h1");
headline.textContent = "The Healthy Restaurant";

const copy = document.createElement("div");
copy.setAttribute("id", "copy");
copy.textContent =
  "An atypical setting, in the style of the origins and even if it was alittle difficult to be served, the place is a bit forgiving, moreover, open H24.";
const imageDemo = document.createElement("img");
imageDemo.src =
  "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg";
header.append(homeBtn, menuBtn, contactBtn);
content.append(header, headline, copy, imageDemo);
