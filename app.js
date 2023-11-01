let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "yellow";
}
let btn = document.querySelector("button");
btn.onclick = function() {
    console.log("button was clicked")
}

function sayHello() {
    alert("heloo");
}
btn.onclick = sayHello;