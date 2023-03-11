import "./navbar";

const headline = document.createElement("h1");
headline.textContent = "The Healthy Restaurant";

const copy = document.createElement("div");
copy.setAttribute("id", "copy");
copy.textContent =
  "An atypical setting, in the style of the origins and even if it was alittle difficult to be served, the place is a bit forgiving, moreover, open H24.";
const imageDemo = document.createElement("img");
imageDemo.src =
  "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg";

const content = document.getElementById("content");

content.append(headline, copy, imageDemo);
