//Envoyer le mail
function sendMail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent('Nouveau message de ' + name + '\nEcrit par: ' + mail);
    const body = encodeURIComponent('Sujet du message: \n\n' + message);
    const mailToLink = 'mailto:info@codabee.com?subject=' + subject + '&body=' + body;
    window.location.href = mailToLink;
}

function closeMenu(event) {
    const collapse = document.querySelector('.navbar-collapse');
    if (collapse.classList.contains('show')) {
        new bootstrap.Collapse(collapse).hide();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    //envoi  de mail
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', sendMail);

    //Fermer le menu
    const navList = document.querySelectorAll('.navbar-nav a');
    navList.forEach(nav => {
        nav.addEventListener('click', closeMenu);
    })
        

});