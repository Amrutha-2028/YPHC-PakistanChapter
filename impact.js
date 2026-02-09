const counters = document.querySelectorAll('.statistics-number');
const speed = 200; // The higher the slower

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc means smoother and slower
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

// Start counting when the section is visible
window.addEventListener('scroll', () => {
    const section = document.getElementById('statistics-section');
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight) {
        startCounters();
    }
}, { once: true }); // Runs only once