document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close the menu if a link is clicked (for smoother navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});