const contactDiv = document.getElementById('contact_div')
const contact = document.getElementById('contact');

const showContact = () => {
  return contactDiv.style.visibility = 'visible';
  
}

contact.addEventListener("click", showContact);

