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
                [ennemis.children[0],"1","Gaelle",30,500,"alive"],
                [ennemis.children[1],"2","John",200,2000,"alive"],
                [ennemis.children[2],"3","Yoann",20,1000,"alive"]
                ];

listePerso =    [
                [personnages.children[0],"1","Jean",3000,100,1,150,"waiting","Epée furtive","inut","t-atq","alive",100,100,true],
                [personnages.children[1],"2","Rika",90,110,1,40,"waiting","Energie des 100 soleils","inut","t-soin","alive",110,100,true],
                [personnages.children[2],"3","Lubin",150,80,1,250,"waiting","Attaque Lourde","inut","t-atq","alive",80,100,true],
                [personnages.children[3],"4","Claude",120,150,1,1,"waiting","Resistance aux dégats","inut","t-def","alive",150,100,true]
                ];

texteStatsPerso1.innerHTML = "Attaque : "+listePerso[0][3]+" - Def : "+listePerso[0][5];
texteStatsPerso2.innerHTML = "Attaque : "+listePerso[1][3]+" - Def : "+listePerso[1][5];
texteStatsPerso3.innerHTML = "Attaque : "+listePerso[2][3]+" - Def : "+listePerso[2][5];
texteStatsPerso4.innerHTML = "Attaque : "+listePerso[3][3]+" - Def : "+listePerso[3][5];

barreDeVie1.innerHTML = "HP : "+listePerso[0][4];
barreDeVie2.innerHTML = "HP : "+listePerso[1][4];
barreDeVie3.innerHTML = "HP : "+listePerso[2][4];
barreDeVie4.innerHTML = "HP : "+listePerso[3][4];

barreDeMana1.innerHTML = "Mana : "+listePerso[0][13];
barreDeMana2.innerHTML = "Mana : "+listePerso[1][13];
barreDeMana3.innerHTML = "Mana : "+listePerso[2][13];
barreDeMana4.innerHTML = "Mana : "+listePerso[3][13];

listeJoueurVivant = [];
listeMonstreVivant = [];

nom1.innerHTML = listePerso[0][2];
nom2.innerHTML = listePerso[1][2];
nom3.innerHTML = listePerso[2][2];
nom4.innerHTML = listePerso[3][2];

texteAtq = zoneTexte.children[1];
texteDef = zoneTexte.children[2];
texteSpe = zoneTexte.children[3];

actualPerso = listePerso[0];
actualPerso[0].style.border = "thick solid #FFD700";
monstreVictime = listeMonstre[0];
monstreVictime[0].style.border = "thick solid #FF0000";
defOnclickMonstre();
defOnclickAction();

listePerso[0][0].style.display = "flex";
listePerso[0][0].style.alignItems = "center";
listePerso[1][0].style.display = "flex"; 
listePerso[1][0].style.alignItems = "center";
listePerso[2][0].style.display = "flex";
listePerso[2][0].style.alignItems = "center";
listePerso[3][0].style.display = "flex";
listePerso[3][0].style.alignItems = "center"; 

function choixPerso(laZoneDeTexte , actPerso){
    
    laZoneDeTexte.firstElementChild.innerHTML = "Que voulez vous que "+actPerso[2]+" fasse ?";
    laZoneDeTexte.style.display = 'flex';

    if (actPerso[9]=="atq"){
        texteAtq.innerHTML = " ̶A̶t̶t̶a̶q̶u̶e̶";
    }
    else {
        texteAtq.innerHTML = "Attaque";
    }
    
    if (actPerso[9]=="def"){
        texteDef.innerHTML = " ̶D̶é̶f̶e̶n̶s̶e̶";
    }
    else {
        texteDef.innerHTML = "Défense";
    }

    if (actPerso[9]=="spe" || actPerso[13] < 50){
        texteSpe.innerHTML = " ̶C̶a̶p̶a̶c̶i̶t̶é̶ ̶S̶p̶é̶c̶i̶a̶l̶e̶";
    }
    else {
        texteSpe.innerHTML = "Capacité Spéciale";
    }



    texteAtq.visibility

}

function tourSuivant(laZoneDeTexte){
    if (listePerso.indexOf(actualPerso) < (listePerso.length - 1)){
        actualPerso[0].style.border = "none";
        actualPerso = listePerso[(listePerso.indexOf(actualPerso)+1)];
        actualPerso[0].style.border = "thick solid #FFD700";
        choixPerso(laZoneDeTexte,actualPerso);
    }
    else {
        laZoneDeTexte.style.display = 'none';
        actualPerso[0].style.border = "none";
        actualPerso = listePerso[0];
        phaseAttaque();
    }
}

function updateStat(){
    texteStatsPerso1.innerHTML = "Attaque : "+listePerso[0][3]+" - Def : "+listePerso[0][5];
    texteStatsPerso2.innerHTML = "Attaque : "+listePerso[1][3]+" - Def : "+listePerso[1][5];
    texteStatsPerso3.innerHTML = "Attaque : "+listePerso[2][3]+" - Def : "+listePerso[2][5];
    texteStatsPerso4.innerHTML = "Attaque : "+listePerso[3][3]+" - Def : "+listePerso[3][5];

    barreDeVie1.innerHTML = "HP : "+listePerso[0][4];
    barreDeVie2.innerHTML = "HP : "+listePerso[1][4];
    barreDeVie3.innerHTML = "HP : "+listePerso[2][4];
    barreDeVie4.innerHTML = "HP : "+listePerso[3][4];

    barreDeMana1.innerHTML = "Mana : "+listePerso[0][13];
    barreDeMana2.innerHTML = "Mana : "+listePerso[1][13];
    barreDeMana3.innerHTML = "Mana : "+listePerso[2][13];
    barreDeMana4.innerHTML = "Mana : "+listePerso[3][13];
}

function phaseAttaque(){

    setTimeout(() => {
        bulleTexte.style.visibility = "visible";
        bulleTexte.style.backgroundColor = "black";
        listePerso.forEach(persoAct => {
            setTimeout(() => {

                if (persoAct[7] == "atq"){
                    monstreVictime[4] -= persoAct[3];
                    bulleTexte.firstElementChild.innerHTML = persoAct[2]+" attaque simplement "+monstreVictime[2]+" et lui inflige "+persoAct[3]+" de dégat !";
                }

                if (persoAct[7] == "spe"){

                    persoAct[13] -= 50;
                    if (persoAct[13]<50){
                        persoAct[14] = false;
                    }

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

                if(monstreVictime[4]<=0){
                    monstreVictime[4] = 0;
                    monstreVictime[5] = "dead";
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
                if(listePerso[persoVictime][4]<=0){
                    listePerso[persoVictime][4] = 0;
                    listePerso[persoVictime][11] = "dead";
                }
                updateStat();

            },((parseInt(monstreAct[1])-1)*2000));

        });

    },9000);

    setTimeout(()=>{
        actuScene();
    },16000);
    
}

function actuScene(){

    comptJoueurMort = 0;

    comptMonstreMort = 0;

    tempListeMonstreVivant = [];

    tempListeJoueurVivant = [];
   
    listeMonstre.forEach(monstreAct => {
        if(monstreAct[5]=="dead"){
            monstreAct[0].style.visibility = "hidden";
            comptMonstreMort += 1;
        }
        else{
            tempListeMonstreVivant.push(monstreAct);
        }
    });

    listePerso.forEach(persoAct => {
        if(persoAct[11]=="dead"){
            persoAct[0].style.visibility = "hidden";
            comptJoueurMort += 1;
        }
        else{
            persoAct[13]+=10;
            tempListeJoueurVivant.push(persoAct);
        }
    });

    if (comptJoueurMort == listePerso.lenght && comptMonstreMort < listeMonstre.lenght){
        bulleTexte.style.backgroundColor = "red";
        bulleTexte.firstElementChild.innerHTML = "Tous les personnages sont morts. Les monstres ont gagné...";
    }
    else if (comptJoueurMort < listePerso.lenght && comptMonstreMort == listeMonstre.lenght){
        bulleTexte.style.backgroundColor = "black";
        bulleTexte.firstElementChild.innerHTML = "Tous les monstres sont morts. Vous avez gagné !";
    }
    else if (comptJoueurMort == listePerso.lenght && comptMonstreMort == listeMonstre.lenght){
        bulleTexte.style.backgroundColor = "blanc";
        bulleTexte.style.color = "black";
        bulleTexte.firstElementChild.innerHTML = "Les deux camps se sont entre-tués... Match Nul !";
    }
    else{

        listePerso = tempListeJoueurVivant;
        listeMonstre = tempListeMonstreVivant;
        actualPerso = listePerso[0];
        monstreVictime = listeMonstre[0];
        monstreVictime[0].style.border = "thick solid #FF0000";
        defOnclickMonstre();
        defOnclickAction();
        bulleTexte.style.visibility = "hidden";
        choixPerso(zoneTexte,actualPerso);

    }
}

function defOnclickAction(){

    // Le supression de l'option est faite pour tout le monde
    // Il faut effectuer l'affichage ou non dans choixPerso()
    

    texteAtq.onclick = function() {

        if (actualPerso[9] != "atq"){
            actualPerso[7] = "atq";
            tourSuivant(zoneTexte);
        }
    }
    
    texteDef.onclick = function() {

        if (actualPerso[9] != "def"){
            actualPerso[7] = "def";
            actualPerso[9] = "def";
            tourSuivant(zoneTexte);
        }
    }
    
    texteSpe.onclick = function() {
        if (actualPerso[9] != "spe" && actualPerso[13] >= 50){
            actualPerso[7] = "spe";
            actualPerso[9] = "spe";
            tourSuivant(zoneTexte);
        }
    }
}



function defOnclickMonstre(){

    listeMonstre.forEach(monstreAct => {
        monstreAct[0].onclick = function(){
            monstreVictime[0].style.border = "none";
            monstreVictime = monstreAct;
            console.log(monstreVictime);
            monstreVictime[0].style.border = "thick solid #FF0000";
        }
    });
}

choixPerso(zoneTexte,actualPerso);