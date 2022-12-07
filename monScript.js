personnages = document.getElementById("persos");
ennemis = document.getElementById("monstres");

zoneTexte = document.getElementById("zoneTexte");
bulleTexte = document.getElementById("bulle");

texteStatsPerso1 = document.getElementById("stat1");
texteStatsPerso2 = document.getElementById("stat2");
texteStatsPerso3 = document.getElementById("stat3");
texteStatsPerso4 = document.getElementById("stat4");

barreDeVie1 = document.getElementById("life1");
barreDeVie2 = document.getElementById("life2");
barreDeVie3 = document.getElementById("life3");
barreDeVie4 = document.getElementById("life4");

barreDeMana1 = document.getElementById("mana1");
barreDeMana2 = document.getElementById("mana2");
barreDeMana3 = document.getElementById("mana3");
barreDeMana4 = document.getElementById("mana4");

nom1 = document.getElementById("nom1");
nom2 = document.getElementById("nom2");
nom3 = document.getElementById("nom3");
nom4 = document.getElementById("nom4");

listeMonstre =  [
                [ennemis.children[0],"1","Gaelle",30,500,"waiting"],
                [ennemis.children[1],"2","John",10,2000,"waiting"],
                [ennemis.children[2],"3","Yoann",20,1000,"waiting"]
                ];

listePerso =    [
                [personnages.children[3],"1","Jean",100,100,1,150,"waiting","Epée furtive","inut","t-atq","alive",100,100],
                [personnages.children[7],"2","Rika",90,110,1,40,"waiting","Energie des 100 soleils","inut","t-soin","alive",110,100],
                [personnages.children[11],"3","Lubin",150,80,1,250,"waiting","Attaque Lourde","inut","t-atq","alive",80,100],
                [personnages.children[15],"4","Claude",120,150,1,1,"waiting","Resistance aux dégats","inut","t-def","alive",150,100]
                ];

texteStatsPerso1.innerHTML = "Attaque : "+listePerso[0][4]+" - Def : "+listePerso[0][5];
texteStatsPerso2.innerHTML = "Attaque : "+listePerso[1][4]+" - Def : "+listePerso[1][5];
texteStatsPerso3.innerHTML = "Attaque : "+listePerso[2][4]+" - Def : "+listePerso[2][5];
texteStatsPerso4.innerHTML = "Attaque : "+listePerso[3][4]+" - Def : "+listePerso[3][5];

barreDeVie1.innerHTML = "HP : "+listePerso[0][3];
barreDeVie2.innerHTML = "HP : "+listePerso[1][3];
barreDeVie3.innerHTML = "HP : "+listePerso[2][3];
barreDeVie4.innerHTML = "HP : "+listePerso[3][3];

barreDeMana1.innerHTML = "Mana : "+listePerso[0][3];
barreDeMana2.innerHTML = "Mana : "+listePerso[1][3];
barreDeMana3.innerHTML = "Mana : "+listePerso[2][3];
barreDeMana4.innerHTML = "Mana : "+listePerso[3][3];

nom1.innerHTML = listePerso[0][2];
nom2.innerHTML = listePerso[1][2];
nom3.innerHTML = listePerso[2][2];
nom4.innerHTML = listePerso[3][2];

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
        phaseAttaque();
    }
}

function updateStat(){
    texteStatsPerso1.innerHTML = "Attaque : "+listePerso[0][4]+" - Def : "+listePerso[0][5];
    texteStatsPerso2.innerHTML = "Attaque : "+listePerso[1][4]+" - Def : "+listePerso[1][5];
    texteStatsPerso3.innerHTML = "Attaque : "+listePerso[2][4]+" - Def : "+listePerso[2][5];
    texteStatsPerso4.innerHTML = "Attaque : "+listePerso[3][4]+" - Def : "+listePerso[3][5];

    barreDeVie1.innerHTML = "HP : "+listePerso[0][3];
    barreDeVie2.innerHTML = "HP : "+listePerso[1][3];
    barreDeVie3.innerHTML = "HP : "+listePerso[2][3];
    barreDeVie4.innerHTML = "HP : "+listePerso[3][3];

    barreDeMana1.innerHTML = "Mana : "+listePerso[0][3];
    barreDeMana2.innerHTML = "Mana : "+listePerso[1][3];
    barreDeMana3.innerHTML = "Mana : "+listePerso[2][3];
    barreDeMana4.innerHTML = "Mana : "+listePerso[3][3];
}

function phaseAttaque(){

    setTimeout(() => {

        bulleTexte.style.backgroundColor = "black";
        listePerso.forEach(persoAct => {
            setTimeout(() => {

                if (persoAct[7] == "atq"){
                    monstreVictime[4] -= persoAct[3];
                    bulleTexte.firstElementChild.innerHTML = persoAct[2]+" attaque simplement "+monstreVictime[2]+" et lui inflige "+persoAct[3]+" de dégat !";
                }

                if (persoAct[7] == "spe"){

                    if (persoAct[9] == "t-atq"){
                        monstreVictime[4] -= persoAct[6];
                        bulleTexte.firstElementChild.innerHTML = persoAct[2]+" utilise son attaque spéciale '"+persoAct[8]+"' sur "+monstreVictime[2]+" et lui inflige "+persoAct[6]+" de dégat !";
                    }

                    if (persoAct[10] == "t-soin"){
                        listePerso.forEach(persoSoin => {
                            persoSoin[4] += persoAct[6];
                        })
                        bulleTexte.firstElementChild.innerHTML = persoAct[2]+" utilise sa compétence spéciale '"+persoAct[8]+"' et soigne tous les personnages de"+persoAct[6]+" HP !";
                    }

                    if (persoAct[10] == "t-def"){
                        listePerso.forEach(persoDef => {
                            persoDef[5] += persoAct[6];
                        })
                        bulleTexte.firstElementChild.innerHTML = persoAct[2]+" utilise sa compétence spéciale '"+persoAct[8]+"' et ajoute de la défense à tous les personnages de"+persoAct[6]+" !";
                    }

                }
                if (persoAct[7] == "def"){
                    persoAct[5] += 2;   
                    bulleTexte.firstElementChild.innerHTML = persoAct[2]+" se défend, cela renforce sa défense de 2 pour le prochain tour !";
                }

                updateStat();

            },(parseInt(persoAct[1])-1)*2000);
            
        });

    },1000);

    setTimeout(()=> {

        bulleTexte.style.backgroundColor = "red";
        listeMonstre.forEach(monstreAct => {
            
            setTimeout(()=>{

                persoVictime = Math.floor(Math.random()*4);

                listePerso[persoVictime][4] -= Math.floor(monstreAct[3] / listePerso[persoVictime][5]);
                bulleTexte.firstElementChild.innerHTML = monstreAct[2]+" attaque "+listePerso[persoVictime][2]+" et lui inflige "+Math.floor(monstreAct[3] / listePerso[persoVictime][5])+" de dégat !";

                updateStat();

            },((parseInt(monstreAct[1])-1)*2000));

        });

    },9000);
    
}

texteAtq.onclick = function() {
    actualPerso[7] = "atq";
    actualPerso[9] = "atq";
    tourSuivant(zoneTexte);
}

texteDef.onclick = function() {
    actualPerso[7] = "def";
    actualPerso[9] = "def";
    tourSuivant(zoneTexte);
}

texteSpe.onclick = function() {
    actualPerso[7] = "spe";
    actualPerso[9] = "spe";
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

choixPerso(zoneTexte,actualPerso);