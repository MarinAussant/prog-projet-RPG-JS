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
monstreVictime = listeMonstre[0];

function choixPerso(laZoneDeTexte , actPerso){
    laZoneDeTexte.firstElementChild.innerHTML = "Que voulez vous que "+actPerso[2]+" fasse ?";
    laZoneDeTexte.style.display = 'flex';
}

function tourSuivant(laZoneDeTexte){
    if (listePerso.indexOf(actualPerso) < 3){
        actualPerso = listePerso[(listePerso.indexOf(actualPerso)+1)];
        choixPerso(laZoneDeTexte,actualPerso);
    }
    else {
        laZoneDeTexte.style.display = 'none';
        actualPerso = listePerso[0];
        attaque();
    }
}

function attaque(){
    listePerso.forEach(persoAct => {
        if (persoAct[6] == "atq"){
            monstreVictime[4] -= persoAct[3];
            console.log(monstreVictime[4]);
        }
        if (persoAct[6] == "def"){
            
        }
        if (persoAct[6] == "spe"){
            
        }
    });
}

texteAtq.onclick = function() {
    actualPerso[6] = "atq";
    actualPerso[8] = "atq";
    tourSuivant(zoneTexte);
}

texteDef.onclick = function() {
    actualPerso[6] = "def";
    actualPerso[8] = "def";
    tourSuivant(zoneTexte);
}

texteSpe.onclick = function() {
    actualPerso[6] = "spe";
    actualPerso[8] = "spe";
    tourSuivant(zoneTexte);
}

listeMonstre[0][0].onclick = function(){
    monstreVictime[0].style.border = "none";
    monstreVictime = listeMonstre[0]
    console.log(monstreVictime);
    monstreVictime[0].style.border = "thick solid #FF0000";
}

listeMonstre[1][0].onclick = function(){
    monstreVictime[0].style.border = "none";
    monstreVictime = listeMonstre[1]
    console.log(monstreVictime);
    monstreVictime[0].style.border = "thick solid #FF0000";
}

listeMonstre[2][0].onclick = function(){
    monstreVictime[0].style.border = "none";
    monstreVictime = listeMonstre[2]
    console.log(monstreVictime);
    monstreVictime[0].style.border = "thick solid #FF0000";
}

/*
listeMonstre.forEach(montreAct => {
    montreAct[0].onclick = function() { 
        monstreVictime = parseInt(monstreAct[1]);
        console.log(monstreVictime);
        monstreVictime[0].style.border = "thick solid #FF0000";
        
    }
});
*/

//modif pour qu'une border rouge apparaisse au clic

choixPerso(zoneTexte,actualPerso);



// Exercice : débuggez ce script :)
