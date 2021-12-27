import './navbar.css';

export default function navBar() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navbar = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    navbar.classList.add("navbar");
    home.classList.add("navbar-item");
    menu.classList.add("navbar-item");
    contact.classList.add("navbar-item");
    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";
    navbar.append(home, menu, contact);
    nav.appendChild(navbar);
    header.append(nav);
    return header;
}