document.addEventListener('DOMContentLoaded', function() {
    // **Form Feedback Interaction**
    const form = document.getElementById('feedback-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback').value;

        if (name && feedback) {
            responseMessage.textContent = `Terima kasih, ${name}! Feedback Anda telah terkirim.`;
            responseMessage.style.color = '#2fc3df';
            form.reset();

            // Hapus pesan setelah beberapa detik
            setTimeout(() => {
                responseMessage.textContent = '';
            }, 3000);
        } else {
            responseMessage.textContent = "Tolong lengkapi semua kolom.";
            responseMessage.style.color = 'red';
        }
    });

    // **Gallery Image Hover Effect**
    const galleryImages = document.querySelectorAll('.gallery .content-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // **Scroll Animation**
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => { 
        handleScrollAnimation();
    });

    // **Navbar Active State Update on Scroll**
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
