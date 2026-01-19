function clickSimple(){
    alert("Bouton appuyé");
}

function activateBtn(){
    const btn = document.getElementById("disabled");
    if (btn.classList.contains("disabled")){
        btn.classList.remove("disabled");
        btn.textContent = "Je suis actif";
    } else{
        btn.classList.add("disabled");
        btn.textContent = "Je ne suis pas actif";
    }
}

window.addEventListener("DOMContentLoaded",function(){
    this.document.getElementById("my-form").addEventListener("submit",function(e){
        e.preventDefault();
        const mail= document.getElementById("email");
        const emailValue = mail.value;
        if (emailValue.lenght <= 0) {
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
        } 
        else {
            mail.classList.remove("is-invalid");
            mail.classList.add("is-valid");
        }
    })
});