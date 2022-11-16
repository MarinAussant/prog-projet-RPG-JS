maDiv = document.getElementById("maDiv");
valeurResultat = document.getElementById("valeurResultat");
afficheAction = document.getElementById("afficheAction");



personnages = document.getElementById("persos");
console.log(personnages);

zoneTexte = document.getElementById("zoneTexte");
console.log(zoneTexte);

maDiv.onclick = function() {
    valeurResultat.innerHTML = parseInt(valeurResultat.innerHTML)+10*compt;
    afficheAction.innerHTML = "J'ai ajouté "+10*compt+" !";
    compt += 1;
}

function choix() {
    console.log(personnages.children);
    for (let lePerso of personnages.children){
        choix = affichageOption(lePerso);
    };
}

function affichageOption(perso) {
    //zoneTexte.firstElementChild.innerHTML = "Que voulez vous que personnage fasse ?"
    zoneTexte.firstElementChild.innerHTML = "Que voulez vous que "+perso.id+" fasse ?"
    zoneTexte.style.display = 'flex'
}

choix();



// Exercice : débuggez ce script :)
