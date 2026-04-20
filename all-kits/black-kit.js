document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselContent = document.querySelector('.carousel-content');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    // Function to open the menu
    const openMobileMenu = () => {
        document.body.classList.add('menu-open');
    };

    // Function to close the menu
    const closeMobileMenu = () => {
        document.body.classList.remove('menu-open');
    };

    // Event Listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileOverlay) {
        // Close menu if clicking on the dark overlay (but not the white content)
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });
    }


    const slider = document.querySelector('.project-slider-container');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            e.preventDefault(); // Prevent default text selection
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2.5; // Drag speed multiplier
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // --- 2. Dynamic Progress Bar for Slider ---
    const progressThumb = document.querySelector('.progress-thumb');
    if (slider && progressThumb) {
        slider.addEventListener('scroll', () => {
            // Calculate the maximum scrollable distance
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            
            // Get the current scroll position
            const currentScroll = slider.scrollLeft;
            
            // Calculate the percentage scrolled
            const scrollPercentage = (currentScroll / maxScroll) * 100;
            
            // Set the width of the green thumb
            progressThumb.style.width = scrollPercentage + '%';
        });
    }

    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-header');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Stop the click from bubbling up to parents
            e.stopPropagation();

            // Find the parent container (li.mobile-dropdown)
            const parent = btn.closest('.mobile-dropdown');

            // Toggle the 'active' class to show/hide the sub-menu
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });


    const scrollTopBtn = document.querySelector('.scroll-to-top');

    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    if (carouselWrapper && carouselContent && prevBtn && nextBtn) {
        
        const scrollAmount = () => {
            // Get the first card
            const firstCard = carouselContent.querySelector('.carousel-card');
            if (!firstCard) return 300; // Default fallback
            
            // Get card width + gap
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(cardStyle.marginRight) || 0; // Just in case
            const cardGap = parseFloat(window.getComputedStyle(carouselContent).gap) || 24;
            
            // We scroll one card width + one gap
            return firstCard.offsetWidth + cardGap;
        };

        nextBtn.addEventListener('click', () => {
            carouselWrapper.scrollLeft += scrollAmount();
        });

        prevBtn.addEventListener('click', () => {
            carouselWrapper.scrollLeft -= scrollAmount();
        });
    }

});



