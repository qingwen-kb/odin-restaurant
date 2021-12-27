import navbar from "./components/navbar/navbar.js"
import home from "./components/home/home.js"
import menu from "./components/menu/menu.js"
import contact from "./components/contact/contact.js"

import "./main.css"

const body = document.querySelector("body");
const content = document.querySelector("#content");
const createNav = navbar();
const createHome = home();
const createMenu = menu();
const createContact = contact();

body.prepend(createNav);
content.append(createHome);
content.append(createMenu);
content.append(createContact);

createNav.addEventListener("click", (event) => {
    if (event.target.id === "home") {
        createHome.classList.remove("hide");
        createMenu.classList.remove("active");
        createContact.classList.remove("active");
    } else if (event.target.id === "menu") {
        createHome.classList.add("hide");
        createContact.classList.remove("active");
        createMenu.classList.add("active");
    } else if (event.target.id === "contact") {
        console.log("contact selected")
        createHome.classList.add("hide");
        createMenu.classList.remove("active");
        createContact.classList.add("active");
    }

})