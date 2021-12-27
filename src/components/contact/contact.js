import "./contact.css"

export default function Contact() {
    const wrap = document.createElement("div");
    const header = document.createElement("p");
    header.innerHTML = "Contact Us";
    header.classList.add("subject");
    wrap.append(header, createContact("James", "Manager", "12345672"), createContact("Oreo", "Chef", "12345672"), createContact("Cody", "Staff", "12345672"));
    wrap.classList.add("contact");
    return wrap;
}

function createContact(name, role, number) {
    const contact = document.createElement("div");
    let person = document.createElement("p");
    let position = document.createElement("p");
    let contactNum = document.createElement("p");
    let contactEmail = document.createElement("p");
    person.innerHTML = name;
    position.innerHTML = role;
    contactNum.innerHTML = number;
    contactEmail = `${name}_${role}@mail.com`;
    contact.append(person, position, contactNum, contactEmail);
    contact.classList.add("card");
    return contact;
}