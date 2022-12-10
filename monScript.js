personnages = document.getElementById("persos");
ennemis = document.getElementById("monstres");

zoneTexte = document.getElementById("zoneTexte");
bulleTexte = document.getElementById("bulle");

texteStatsPerso1 = document.getElementById("stat1");
texteStatsPerso2 = document.getElementById("stat2");
texteStatsPerso3 = document.getElementById("stat3");
texteStatsPerso4 = document.getElementById("stat4");

texteStatsMonstre1 = document.getElementById("statM1");
texteStatsMonstre2 = document.getElementById("statM2");
texteStatsMonstre3 = document.getElementById("statM3");

barreDeVie1 = document.getElementById("life1");
barreDeVie2 = document.getElementById("life2");
barreDeVie3 = document.getElementById("life3");
barreDeVie4 = document.getElementById("life4");

barreDeVieM1 = document.getElementById("lifeM1");
barreDeVieM2 = document.getElementById("lifeM2");
barreDeVieM3 = document.getElementById("lifeM3");

barreDeMana1 = document.getElementById("mana1");
barreDeMana2 = document.getElementById("mana2");
barreDeMana3 = document.getElementById("mana3");
barreDeMana4 = document.getElementById("mana4");

nom1 = document.getElementById("nom1");
nom2 = document.getElementById("nom2");
nom3 = document.getElementById("nom3");
nom4 = document.getElementById("nom4");

nomM1 = document.getElementById("nomM1");
nomM2 = document.getElementById("nomM2");
nomM3 = document.getElementById("nomM3");

listeMonstre =  [
                [ennemis.children[0],"1","Dracul-Gaelle",30,500,"alive"],
                [ennemis.children[1],"2","Grand-John",200,2000,"alive"],
                [ennemis.children[2],"3","Yoann-Ô",20,1000,"alive"]
                ];

listePerso =    [
                [personnages.children[0],"1","J-M",3000,100,1,150,"waiting","Epée furtive","inut","t-atq","alive",100,100,true],
                [personnages.children[1],"2","Rika",90,110,1,40,"waiting","Energie des 100 soleils","inut","t-soin","alive",110,100,true],
                [personnages.children[2],"3","Lubinbinks",150,80,1,250,"waiting","Attaque Lourde","inut","t-atq","alive",80,100,true],
                [personnages.children[3],"4","Claude-Ô",120,150,1,1,"waiting","Resistance aux dégats","inut","t-def","alive",150,100,true]
                ];


texteAtq = zoneTexte.children[1];
texteDef = zoneTexte.children[2];
texteSpe = zoneTexte.children[3];

actualPerso = listePerso[0];
actualPerso[0].style.border = "thick solid #FFD700";
monstreVictime = listeMonstre[0];
monstreVictime[0].children[1].style.border = "thick solid #FF0000";
updateStat();
defOnclickMonstre();
defOnclickAction();



listePerso.forEach(persoAct => {
    persoAct[0].style.display = "flex";
    persoAct[0].style.alignItems = "center";
})

listeMonstre.forEach(monstreAct => {
    monstreAct[0].style.display = "flex";
    monstreAct[0].style.alignItems = "center"; 
})

listeMonstre.forEach(monstreAct => {
    monstreAct[0].children[1].onmouseover = () => {
        monstreAct[0].children[0].style.visibility = "visible"
    }
    monstreAct[0].children[1].onmouseout= () =>{
        monstreAct[0].children[0].style.visibility = "hidden"
    }
    monstreAct[0].children[0].style.visibility = "hidden"
})


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

    listePerso.forEach(persoAct => {
        persoAct[0].children[0].children[0].innerHTML = persoAct[2];
        persoAct[0].children[0].children[1].innerHTML = "Attaque : "+persoAct[3]+" - Def : "+persoAct[5];
        persoAct[0].children[1].children[0].innerHTML = "Mana : "+persoAct[13];
        persoAct[0].children[1].children[1].innerHTML = "HP : "+persoAct[4];
    })

    listeMonstre.forEach(monstreAct => {
        monstreAct[0].children[0].children[0].innerHTML = monstreAct[2];
        monstreAct[0].children[0].children[1].innerHTML = "Attaque : "+monstreAct[3];
        monstreAct[0].children[0].children[2].children[0].innerHTML = "HP : "+monstreAct[4];
    })

}

function phaseAttaque(){

    setTimeout(() => {
        bulleTexte.style.visibility = "visible";
        bulleTexte.style.backgroundColor = "black";
        tempNumPerso = -1;
        listePerso.forEach(persoAct => {
            tempNumPerso += 1;
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

                    if (persoAct[10] == "t-atq"){
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

            },tempNumPerso*2000);
            
        });

    },1000);
    setTimeout(()=> {

        bulleTexte.style.backgroundColor = "red";
        tempNumMonstre = -1;
        listeMonstre.forEach(monstreAct => {
            tempNumMonstre +=1;
            setTimeout(()=>{

                persoVictime = Math.floor(Math.random()*(listePerso.length));
                console.log(listePerso);
                console.log(persoVictime);
                listePerso[persoVictime][4] -= Math.floor(monstreAct[3] / listePerso[persoVictime][5]);
                bulleTexte.firstElementChild.innerHTML = monstreAct[2]+" attaque "+listePerso[persoVictime][2]+" et lui inflige "+Math.floor(monstreAct[3] / listePerso[persoVictime][5])+" de dégat !";
                if(listePerso[persoVictime][4]<=0){
                    listePerso[persoVictime][4] = 0;
                    listePerso[persoVictime][11] = "dead";
                }
                updateStat();

            },(tempNumMonstre*2000));

        });

    },9000 - ((4 - listePerso.length)*2000));

    setTimeout(()=>{
        actuScene();
    },2000 * listeMonstre.length + 2000 * listePerso.length);
    
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

    if (comptJoueurMort == listePerso.length && comptMonstreMort < listeMonstre.length){
        bulleTexte.style.backgroundColor = "red";
        bulleTexte.firstElementChild.innerHTML = "Tous les personnages sont morts. Les monstres ont gagné...";
    }
    else if (comptJoueurMort < listePerso.length && comptMonstreMort == listeMonstre.length){
        bulleTexte.style.backgroundColor = "black";
        bulleTexte.firstElementChild.innerHTML = "Tous les monstres sont morts. Vous avez gagné !";
    }
    else if (comptJoueurMort == listePerso.length && comptMonstreMort == listeMonstre.length){
        bulleTexte.style.backgroundColor = "blanc";
        bulleTexte.style.color = "black";
        bulleTexte.firstElementChild.innerHTML = "Les deux camps se sont entre-tués... Match Nul !";
    }
    else{

        listePerso = tempListeJoueurVivant;
        listeMonstre = tempListeMonstreVivant;
        actualPerso = listePerso[0];
        actualPerso[0].style.border = "thick solid #FFD700";
        monstreVictime = listeMonstre[0];
        monstreVictime[0].children[1].style.border = "thick solid #FF0000";
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
            actualPerso[9] = "atq";
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
            monstreVictime[0].children[1].style.border = "none";
            monstreVictime = monstreAct;
            console.log(monstreVictime);
            monstreVictime[0].children[1].style.border = "thick solid #FF0000";
        }
    });
}

choixPerso(zoneTexte,actualPerso);