// 1. Mobile Hamburger Navigation Drawer
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close drawer automatically when a link is clicked on mobile
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// 2. Modal Popup Functions (Achievements & Training)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking on the dark background overlay
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

// Close any open modal when pressing the Escape key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  }
});

// 3. Highlight Active Navbar Link While Scrolling
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});