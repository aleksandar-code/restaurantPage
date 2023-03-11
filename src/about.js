const About = () => {
  const contact = document.createElement("div");
  contact.setAttribute("id", "about");
  const headline = document.createElement("h1");
  headline.textContent = "About";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("card");
  contactInfo.innerHTML =
    "<p><strong>Kogen miammiam</strong></p><p>Phone number: 05 05 05 05</p> <p>Email: contact@email </p>";

  const contactInfo2 = document.createElement("div");
  contactInfo2.classList.add("card");
  contactInfo2.innerHTML =
    "<p><strong>Kogen blablabla</strong></p><p>Phone number: 05 05 05 05</p> <p>Email: contact@email </p>";

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("card");
  locationInfo.innerHTML =
    "<p><strong>London, Big Ben</strong></p><p>Great Britain</p> <p>Europe</p>";

  const content = document.getElementById("content");
  contact.append(headline, contactInfo, contactInfo2, locationInfo);
  content.appendChild(contact);
};
export default About;
