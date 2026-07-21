const words = [
    "Data Analyst",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section=>{
    observer.observe(section);
});
const topButton = document.getElementById("topBtn");
console.log(topButton);
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

topButton.onclick = scrollToTop;