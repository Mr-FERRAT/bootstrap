const bootstrap = require("bootstrap");

document.addEventListener("DOMContentLoaded", function()
{
    const allLinks = document.querySelectorAll(".nav-link, list-group-item")

    allLinks.forEach(link =>{
        link.addEventListener('click', function(event){
            event.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target){
                let navbarHeight = document.querySelector('.navbar'),offsetHeight;
                let position = target.offsetTop - navbarHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
                let offcanvas = document.querySelector('.offcanvas.show');
                if(offcanvas){
                    let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                    bsOffcanvas.hide();
                }
            }
        });
    });
});