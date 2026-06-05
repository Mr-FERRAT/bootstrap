document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    const links = document.querySelectorAll('.nav-link');
        links.forEach(function (navLink) {
            navLink.addEventListener('click', function() {
                const attribute = toggler.getAttribute('aria-expanded');
                if (attribute === 'true'){
                    toggler.click();
                }
            });
        });
    });