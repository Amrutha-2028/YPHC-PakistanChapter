// 1. COUNTING ANIMATION LOGIC
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

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
    }
}, { threshold: 0.2 });

const statsSection = document.getElementById('statistics-section');
if (statsSection) observer.observe(statsSection);

// 2. BULLETPROOF TOOLTIP LOGIC
const tooltip = document.getElementById('map-tooltip');

setTimeout(() => {
    const paths = document.querySelectorAll('svg path');

    paths.forEach(path => {
        path.addEventListener('mousemove', function(e) {
            // Get name from class or name attribute
            let name = this.getAttribute('class') || this.getAttribute('name') || "";
            
            // Ignore generic SVG paths
            if (!name || name.includes('st') || name.includes('land')) {
                tooltip.style.display = 'none';
                return;
            }

            // Clean up name
            let cleanName = name.replace('highlight', '').replace(/[\\._-]/g, ' ').trim();
            
            // Force the tooltip to show and move
            tooltip.innerText = cleanName;
            tooltip.style.display = 'block';
            tooltip.style.visibility = 'visible'; // Extra insurance
            tooltip.style.opacity = '1';          // Extra insurance
            
            // Use clientX/Y for fixed positioning or pageX/Y for absolute
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        path.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
}, 1000);