/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuBtn.textContent = isOpen ? "×" : "☰";
});

/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";
  });
});

/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

/* =========================
   SHOP BUTTONS
========================= */

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const originalText = button.textContent;

    button.textContent = "Added ✓";

    button.style.borderColor = "#d9a35f";
    button.style.color = "#d9a35f";

    setTimeout(() => {
      button.textContent = originalText;

      button.style.borderColor = "";
      button.style.color = "";
    }, 1800);
  });
});
