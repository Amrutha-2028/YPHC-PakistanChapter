const counters = document.querySelectorAll('.statistics-number');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Observer to start counting when section is visible
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.getElementById('statistics-section'));

document.getElementById("y").textContent = new Date().getFullYear();