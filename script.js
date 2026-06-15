document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------
       HERO SLIDESHOW
    ----------------------------*/
    let index = 0;
    const slides = document.querySelectorAll(".hero-img");

    function showSlide() {
        slides.forEach((img, i) => {
            img.style.opacity = (i === index) ? "1" : "0";
        });
        index = (index + 1) % slides.length;
    }

    if (slides.length > 0) {
        showSlide();
        setInterval(showSlide, 4000);
    }

    /* ---------------------------
       SCROLL ANIMATION
    ----------------------------*/
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

});
