personnages = document.getElementById("persos");
ennemis = document.getElementById("monstres");

zoneTexte = document.getElementById("zoneTexte");

listeMonstre =  [
                [ennemis.children[0],"1","Gaelle",30,500,"waiting"],
                [ennemis.children[1],"2","John",10,2000,"waiting"],
                [ennemis.children[2],"3","Yohann",20,1000,"waiting"]
                ];

listePerso =    [
                [personnages.children[0],"1","Jean",100,100,150,"waiting","Epée furtive","inut","alive"],
                [personnages.children[1],"2","Rika",90,110,40,"waiting","Soin","inut","alive"],
                [personnages.children[2],"3","Lubin",150,80,250,"waiting","Attaque Lourde","inut","alive"],
                [personnages.children[3],"4","Claude",120,150,2,"waiting","Resistance aux dégats","inut","alive"]
                ];

texteAtq = zoneTexte.children[1];
texteDef = zoneTexte.children[2];
texteSpe = zoneTexte.children[3];

actualPerso = listePerso[0];
monstreVictime = 0;

function choixPerso(){
    affichageOption();
}

texteAtq.onclick = function() {
    actualPerso[6] = "atq";
    actualPerso[8] = "atq";
    tourSuivant()
}

texteDef.onclick = function() {
    actualPerso[6] = "def";
    actualPerso[8] = "def";
    tourSuivant()
}

texteSpe.onclick = function() {
    actualPerso[6] = "spe";
    actualPerso[8] = "spe";
    tourSuivant()
}

function tourSuivant(){
    if (listePerso.indexOf(actualPerso) < 3){
        actualPerso = listePerso[(listePerso.indexOf(actualPerso)+1)];
        choixPerso();
    }
    else {
        zoneTexte.style.display = 'none';
        actualPerso = listePerso[0];

    }
}

function affichageOption() {
    //zoneTexte.firstElementChild.innerHTML = "Que voulez vous que personnage fasse ?"
    zoneTexte.firstElementChild.innerHTML = "Que voulez vous que "+actualPerso[2]+" fasse ?";
    zoneTexte.style.display = 'flex';
}

function attaque(){
    listePerso.forEach(persoAct => {
        if (persoAct[6] == "atq"){

        }
        if (persoAct[6] == "def"){
            
        }
        if (persoAct[6] == "spe"){
            
        }
    });
}


listeMonstre.forEach(montreAct => {
    montreAct[0].onclick = function() {
        monstreVictime = montreAct;
        console.log(monstreVictime);
        monstreVictime[0].style.border = "thick solid #FF0000";
        
    }
});

//modif pour qu'une border rouge apparaisse au clic

choixPerso();



// Exercice : débuggez ce script :)
