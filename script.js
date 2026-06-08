// --- 1. Terminal Typing Effect ---
const text = "Hi, I'm Baishnavi Kumari";
const speed = 100; // Milliseconds per character
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Initialize typing effect on load
window.onload = () => {
    typeWriter();
};

// --- 2. Scroll Reveal Animation ---
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed to lock it in place
            observer.unobserve(entry.target); 
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});