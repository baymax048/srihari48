const box = document.getElementById("box");
const message = document.getElementById("message");

// Hover event
box.addEventListener("mouseover", function () {
    message.innerHTML = "Mouse is over the box!";
    message.style.color = "green";
});

box.addEventListener("mouseout", function () {
    message.innerHTML = "Mouse left the box.";
    message.style.color = "black";
});

// Click event
box.addEventListener("click", function () {
    message.innerHTML = "Box was clicked!";
    message.style.color = "blue";
});
