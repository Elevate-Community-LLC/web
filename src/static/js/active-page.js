function setActivePage() {
    const currentPath = window.location.pathname.toLocaleLowerCase();
    const navLinks = document.querySelectorAll('.elcom-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLocaleLowerCase().replace(/\#/, '');

        if (currentPath.includes(linkPath)) {
            link.classList.add('elcom-active');
        } else {
            link.classList.remove('elcom-active');
        }
    });
}