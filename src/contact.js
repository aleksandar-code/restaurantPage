const Contact = () => {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  const headline = document.createElement("h1");
  headline.textContent = "Contact";

  const content = document.getElementById("content");
  contact.appendChild(headline);
  content.appendChild(contact);
};
export default Contact;
