import myImage from "./pizza.jpg";

const Home = () => {
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  const headline = document.createElement("h1");
  headline.textContent = "The Healthy Restaurant";

  const copy = document.createElement("div");
  copy.setAttribute("id", "copy");
  copy.classList.add("card");
  copy.innerText = "Your health is our priority!";
  const imageDemo = document.createElement("img");
  imageDemo.src = myImage;
  const imageHolder = document.createElement("div");
  imageHolder.appendChild(imageDemo);

  const workTime = document.createElement("div");
  workTime.innerHTML = `
  Sunday: 8am - 8pm
  <br>
  Monday: 6am - 6pm
  <br>
  Tuesday: 6am - 6pm
  <br>
  Wednesday: 6am - 6pm
  <br>
  Thursday: 6am - 10pm
  <br>
  Friday: 6am - 10pm
  <br>
  Saturday: 8am - 10pm`;

  workTime.classList.add("card");
  const content = document.getElementById("content");

  home.append(headline, copy, imageHolder, workTime);
  content.appendChild(home);
};

export default Home;
