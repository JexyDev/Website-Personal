// Toggle & Responsive Navigation
const Navslide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener ("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
};

Navslide()


// Clear form before unload
window.onbeforeunloud = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// Mengaktifkan smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Scroll ke elemen yang dituju
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Efek scroll halus
      });
    });
  });