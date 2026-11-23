// Close the mobile menu when a link inside it is clicked.
const menu = document.getElementById("site-menu");

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menu.hidePopover();
  }
});
