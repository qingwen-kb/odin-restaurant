import "./home.css";

export default function home() {
    const wrap = document.createElement("div");
    const h1 = document.createElement("h1");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    left.classList.add("left");
    right.classList.add("right");
    h1.innerHTML = "Best Restaurant Ever";
    p.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
    img.src = "../src/img/pexels-daria-shevtsova-704982.jpg";
    img.style.width = "500px";
    img.style.height = "auto";
    left.append(h1, p);
    right.append(img);
    wrap.append(left, right);
    wrap.classList.add("home");
    return wrap;
}