// Smooth scroll (for home page button)
window.scrollToExplore = function () {
  const section = document.getElementById("explore");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


// Highlight nav on scroll (optional clean feature)
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// Simple console log (good practice for debugging)
console.log("Kavi Mane Heritage App Loaded");