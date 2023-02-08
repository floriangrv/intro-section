const burgerMenu = document.querySelector(".menu");
const navList = document.querySelector(".site-nav");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-item");
const ulInner = document.querySelectorAll('.inner')


burgerMenu.addEventListener("click", () => {
  navList.classList.toggle("site-nav-opened");
  overlay.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.closest(".nav-item").querySelector("ul")) {
      e.target.closest(".nav-item").classList.toggle("show");
    }
  });
});

const spans = document.querySelectorAll(".toggle");
const uls = document.querySelectorAll(".nav-list ul");

// Cachez les `ul`
uls.forEach((ul) => {
  ul.style.display = "none";
});

spans.forEach((span) => {
  span.addEventListener("click", function () {
    const nextUl = this.nextElementSibling;
    if (nextUl.style.display === "none") {
      nextUl.style.display = "block ";
      if (window.innerWidth <= 961) {
        spans.forEach((siblingSpan) => {
          if (siblingSpan !== this) {
            siblingSpan.style.marginTop = "1rem";
          }
        });
      }
    } else {
      // Cachez le `ul` suivant
      nextUl.style.display = "none";
      // Reset
      spans.forEach((siblingSpan) => {
        siblingSpan.style.removeProperty("margin-top");
      });
    }
  });
});

console.log(navList);
