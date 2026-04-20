document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    const openMobileMenu = () => {
        document.body.classList.add('menu-open');
    };

    const closeMobileMenu = () => {
        document.body.classList.remove('menu-open');
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });
    }

    // --------------------------------------------------
    // 2. Mobile Dropdown Logic (New Feature)
    // --------------------------------------------------
    // Select all toggle buttons (the arrows next to menu items)
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


    // --------------------------------------------------
    // 3. Dynamic Portfolio Sections
    // --------------------------------------------------
    const portfolioSections = document.querySelectorAll('.portfolio-section');

    // Function to set the active section
    const setActiveSection = (clickedSection) => {
        // First, remove 'active' from all sections
        portfolioSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Then, add 'active' to the one that was clicked
        if (clickedSection) {
            clickedSection.classList.add('active');
        }
    };

    // Add click event to each section
    portfolioSections.forEach(section => {
        section.addEventListener('click', () => {
            setActiveSection(section);
        });
    });

    // On initial load, find the section that has the 'active' class
    const initialActive = document.querySelector('.portfolio-section.active');
    if (initialActive) {
        setActiveSection(initialActive); 
    } else if (portfolioSections.length > 0) {
        // As a fallback, activate the second section if none is set
        setActiveSection(portfolioSections[1]);
    }
});