import "./menu.css"

export default function menu() {
    const wrap = document.createElement("div");
    const itemOneIcon = document.createElement("div");
    itemOneIcon.innerHTML = "<i class='fas fa-hamburger fa-5x'></i>";
    itemOneIcon.classList.add("icon");
    const itemOne = createCard("Monster Burger", "20");
    itemOne.prepend(itemOneIcon);
    const itemTwo = createCard("Monster Beer", "8");
    const itemTwoIcon = document.createElement("div");
    itemTwoIcon.innerHTML = "<i class='fas fa-beer fa-5x'></i>";
    itemTwoIcon.classList.add("icon");
    itemTwo.prepend(itemTwoIcon);
    wrap.appendChild(itemOne);
    wrap.appendChild(itemTwo);
    wrap.classList.add("menu");
    return wrap;
}

function createCard(name, price) {
    const item = document.createElement("div");
    let food = document.createElement("p");
    let priceTag = document.createElement("p");
    food.innerHTML = name;
    priceTag.innerHTML = `S$${price}`
    item.append(food, priceTag);
    item.classList.add("card");
    return item;
}