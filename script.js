const menu = document.getElementById("hamburger");
const menulist = document.getElementById("list");
const menuclose = document.getElementById("close");

menu.addEventListener("click", function () {
  menulist.classList.remove("active");
  menu.classList.remove("fa-bars");
  menu.classList.add("fa-close");

  // closemenu();
});

// function closemenu() {
//   if (menu.classList === "fa-bars") {
//     menu.classList.remove("fa-bars");
//   }
// }
