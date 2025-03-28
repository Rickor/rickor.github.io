document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-aos]");

    function handleScroll() {
        elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("aos-animate");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
});
