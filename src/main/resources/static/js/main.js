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

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));