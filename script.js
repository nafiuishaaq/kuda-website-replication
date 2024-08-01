const menu = document.getElementById("hamburger");
const menulist = document.getElementById("list");

menu.addEventListener("click", function () {
  menulist.classList.remove("active");
  menu.style.display = none;
});
