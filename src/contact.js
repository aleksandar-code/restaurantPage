const Contact = () => {
  const headline = document.createElement("h1");
  headline.textContent = "Contact";

  const content = document.getElementById("content");
  content.appendChild(headline);
};
export default Contact;
