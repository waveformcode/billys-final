// Close the mobile menu when a link inside it is clicked.
const menu = document.getElementById("site-menu");

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menu.hidePopover();
  }
});

//Ball move
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduceMotion.matches) {
  const heads = document.querySelectorAll(".section-head");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-head--rolled");
          observer.unobserve(entry.target); // μόνο μία φορά
        }
      });
    },
    { threshold: 1 },
  );

  heads.forEach((head) => {
    head.classList.add("section-head--armed");
    observer.observe(head);
  });
}
