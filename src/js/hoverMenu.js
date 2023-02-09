export function hoverMenu() {
  let menuItems = document.querySelectorAll(".item-menu");
  let subMenuitems = document.querySelectorAll(".submenu-panda");
  let originalActive = document.querySelector(".item-menu.original-active");

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      let currentActive = document.querySelector(".item-menu.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      this.classList.add("active");
    });

    item.addEventListener("mouseout", function () {
      let currentActive = document.querySelector(".item-menu.active");

      if (currentActive) {
        currentActive.classList.remove("active");
        originalActive.classList.add("active");
      }
    });
  });

  subMenuitems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      let currentActive = this.previousElementSibling;
      originalActive.classList.remove("active");
      if (currentActive) {
        currentActive.classList.add("active");
      }
    });

    item.addEventListener("mouseout", function () {
      let currentActive = this.previousElementSibling;

      if (currentActive) {
        currentActive.classList.remove("active");
        originalActive.classList.add("active");
      }
    });
  });
}
