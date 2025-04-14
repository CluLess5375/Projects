let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav"); // Select the navbar element
    if (window.scrollY > lastScrollY) {
        navbar.style.top = "-80px"; // Adjusted to match the navbar height in CSS
    } else {
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
});