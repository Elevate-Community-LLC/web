function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.elcom-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath == currentPath) {
            link.classList.add('elcom-active');
        } else {
            link.classList.remove('elcom-active');
        }
    });
}