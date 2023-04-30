const elNavUl = document.querySelector(".nav-wrapper ul");
const toggleMenu = document.getElementById("showMenu");

toggleMenu.addEventListener("click", function () {
    elNavUl.classList.toggle("active");
});
