import myImage from "./pizza.jpg";

const Home = () => {
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  const headline = document.createElement("h1");
  headline.textContent = "The Healthy Restaurant";

  const copy = document.createElement("div");
  copy.setAttribute("id", "copy");
  copy.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, magni? A exercitationem sint nihil asperiores molestiae aut. Consequatur autem porro eos quam mollitia dolor beatae, ab repellat excepturi dolorum id!";
  const imageDemo = document.createElement("img");
  imageDemo.src = myImage;

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
  const content = document.getElementById("content");

  home.append(headline, copy, imageDemo, workTime);
  content.appendChild(home);
};

export default Home;
