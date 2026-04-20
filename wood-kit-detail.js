document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

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
});