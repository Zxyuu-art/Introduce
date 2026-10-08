const languageToggle = document.querySelector("#language-toggle");
const languageLabel = document.querySelector("#language-label");
const paragraphs = document.querySelectorAll(".about-paragraph");

languageToggle.addEventListener("click", () => {
    const showIndonesian = languageToggle.getAttribute("aria-pressed") !== "true";

    paragraphs.forEach((paragraph) => {
        paragraph.textContent = paragraph.dataset[showIndonesian ? "id" : "en"];
        paragraph.lang = showIndonesian ? "id" : "en";
    });

    languageToggle.setAttribute("aria-pressed", String(showIndonesian));
    languageLabel.textContent = showIndonesian ? "Read in English" : "Baca dalam Bahasa Indonesia";
});

    const heroVisual = document.querySelector(".hero-visual");
    const heroImage = document.querySelector("#hero-image");
    const previousSlideButton = document.querySelector("#slide-prev");
    const nextSlideButton = document.querySelector("#slide-next");
    const slideCount = document.querySelector("#slide-count");
    const slideCaption = document.querySelector("#slide-caption");

    if (heroVisual && heroImage && previousSlideButton && nextSlideButton && slideCount && slideCaption) {
        const slides = [
            {
                src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
                alt: "Students collaborating around a laptop",
                caption: "LEARNING THROUGH COLLABORATION"
            },
            {
                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
                alt: "A student working on a laptop in a bright workspace",
                caption: "CURIOSITY IN EVERY PROJECT"
            },
            {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
                alt: "University students sharing ideas around a table",
                caption: "IDEAS GROW BETTER TOGETHER"
            }
        ];
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let activeSlide = 0;
        let slideRequestId = 0;
        let autoplayInterval;

        const showSlide = (requestedSlide) => {
            activeSlide = (requestedSlide + slides.length) % slides.length;
            const slide = slides[activeSlide];
            const requestId = ++slideRequestId;
            const incomingImage = new Image();

            incomingImage.onload = () => {
                if (requestId !== slideRequestId) return;
                heroImage.classList.add("is-transitioning");
                window.setTimeout(() => {
                    if (requestId !== slideRequestId) return;
                    heroImage.src = slide.src;
                    heroImage.alt = slide.alt;
                    slideCaption.textContent = slide.caption;
                    slideCount.textContent = `PROFILE / 2026 · ${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
                    window.requestAnimationFrame(() => heroImage.classList.remove("is-transitioning"));
                }, 280);
            };

            incomingImage.onerror = () => {
                if (requestId === slideRequestId) heroImage.classList.remove("is-transitioning");
            };

            incomingImage.src = slide.src;
        };

        const stopAutoplay = () => {
            window.clearInterval(autoplayInterval);
            autoplayInterval = undefined;
        };

        const startAutoplay = () => {
            if (reducedMotion.matches || document.hidden || autoplayInterval) return;
            autoplayInterval = window.setInterval(() => showSlide(activeSlide + 1), 6000);
        };

        previousSlideButton.addEventListener("click", () => showSlide(activeSlide - 1));
        nextSlideButton.addEventListener("click", () => showSlide(activeSlide + 1));
        heroVisual.addEventListener("pointerenter", stopAutoplay);
        heroVisual.addEventListener("pointerleave", startAutoplay);
        heroVisual.addEventListener("focusin", stopAutoplay);
        heroVisual.addEventListener("focusout", (event) => {
            if (!heroVisual.contains(event.relatedTarget)) startAutoplay();
        });
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) stopAutoplay();
            else startAutoplay();
        });
        reducedMotion.addEventListener("change", () => {
            if (reducedMotion.matches) stopAutoplay();
            else startAutoplay();
        });

        startAutoplay();
    }

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));