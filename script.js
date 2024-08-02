const menu = document.getElementById("hamburger");
const menulist = document.getElementById("list");
const menuclose = document.getElementById("close");
const caret = document.querySelectorAll(".fa-caret-down");

menu.addEventListener("click", function () {
  menulist.classList.toggle("active");

  // Toggle between the hamburger and close icons
  if (menulist.classList.contains("active")) {
    menu.classList.remove("fa-close");
    menu.classList.add("fa-bars");
    caret.classList.remove("fa-caret-down");
    caret.classList.add("fa-caret-right");
  } else {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-close");
  }
});
