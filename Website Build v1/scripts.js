document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonials-slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds

    // Example for parallax effect
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image');
        let scrollPosition = window.scrollY;

        // Adjust the parallax effect based on scroll position
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Portfolio Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Toggle Menu Functionality
    function toggleMenu() {
        const navLinks = document.querySelector('#nav-container nav ul');
        navLinks.classList.toggle('active');
    }

    // Add event listener to burger icon
    const burgerIcon = document.querySelector('.burger-icon');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleMenu);
    }
});
