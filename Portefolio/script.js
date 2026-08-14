// Envoyer le mail
function sendMail (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent('Nouveau message de '+ name +'\nEcrit par: ' + mail);
    const body = encodeURIComponent('Sujet du message: \n\n'+ message);
    const mailToLink = 'mawloud.ferrat@gmail.com?subject=' + subject + '&body=' +body;
    window.location.href = mailToLink;
}

document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('constactForm');
    form.addEventListener('submit', sendMail);
})