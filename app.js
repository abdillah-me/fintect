const menu = document.querySelector("#menu");
menu.addEventListener("click", function () {
   const menuList = document.querySelector("ul");
   menuList.classList.toggle("show-menu");
});
