const menu = document.getElementById("hamburger");
const menulist = document.getElementById("list");
const menuclose = document.getElementById("close");

menu.addEventListener("click", function () {
  menulist.classList.toggle("active");

  // Toggle between the hamburger and close icons
  if (menulist.classList.contains("active")) {
    menu.classList.remove("fa-close");
    menu.classList.add("fa-bars");
  } else {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-close");
  }
});
