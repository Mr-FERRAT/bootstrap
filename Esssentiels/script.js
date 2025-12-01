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