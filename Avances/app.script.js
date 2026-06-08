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

    const pages = document.querySelectorAll('.page-item');
    const div = document.getElementById('content');
    pages.forEach(page => page.addEventListener('click', function(event){
        event.preventDefault();
        const number = page.getAttribute('data-page');
        pages.forEach(index => index.classList.remove('active'));
        page.classList.add('active');
        div.innerHTML = `<p>contenu de la page ${number}</p>`;
    }));
        
    })