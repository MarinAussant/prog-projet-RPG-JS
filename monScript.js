personnages = document.getElementById("persos");
ennemis = document.getElementById("monstres");

zoneTexte = document.getElementById("zoneTexte");
bulleTexte = document.getElementById("bulle");

listeMonstre =  [
                [ennemis.children[0],"1","Gaelle",30,500,"waiting"],
                [ennemis.children[1],"2","John",10,2000,"waiting"],
                [ennemis.children[2],"3","Yoann",20,1000,"waiting"]
                ];

listePerso =    [
                [personnages.children[0],"1","Jean",100,100,150,"waiting","Epée furtive","inut","t-atq","alive"],
                [personnages.children[1],"2","Rika",90,110,40,"waiting","Energie des 100 soleils","inut","t-soin","alive"],
                [personnages.children[2],"3","Lubin",150,80,250,"waiting","Attaque Lourde","inut","t-atq","alive"],
                [personnages.children[3],"4","Claude",120,150,2,"waiting","Resistance aux dégats","inut","t-def","alive"]
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
        phaseAttaque();
    }
}

function phaseAttaque(){

    setTimeout(() => {

        bulleTexte.style.backgroundColor = "black";
        listePerso.forEach(persoAct => {
            if (persoAct[6] == "atq"){
                setTimeout(() => {
                    monstreVictime[4] -= persoAct[3];
                    bulleTexte.firstElementChild.innerHTML = persoAct[2]+" attaque simplement "+monstreVictime[2]+" et lui inflige "+persoAct[3]+" de dégat !";
                },((parseInt(persoAct[1])-1)*2000));

            }
            if (persoAct[6] == "spe"){
                if (persoAct[9] == "t-atq"){
                    setTimeout(() => {
                        monstreVictime[4] -= persoAct[5];
                        bulleTexte.firstElementChild.innerHTML = persoAct[2]+" utilise son attaque spéciale '"+persoAct[7]+"' sur "+monstreVictime[2]+" et lui inflige "+persoAct[5]+" de dégat !";
                    },((parseInt(persoAct[1])-1)*2000));
                }
                if (persoAct[9] == "t-soin"){
                    setTimeout(() => {
                        listePerso.forEach(persoSoin => {
                            persoSoin[4] += persoAct[5];
                        })
                        bulleTexte.firstElementChild.innerHTML = persoAct[2]+" utilise sa compétence spéciale '"+persoAct[7]+"' et soigne tous les personnages de"+persoAct[5]+" HP !";
                    },((parseInt(persoAct[1])-1)*2000));
                }
            }
            if (persoAct[6] == "def"){
                bulleTexte.firstElementChild.innerHTML = persoAct[2]+" se défend, il recevra 3 fois moins de dégat au prochain tour !";
            }
        });

    },1000);

    setTimeout(()=> {

        bulleTexte.style.backgroundColor = "red";
        listeMonstre.forEach(monstreAct => {
            
            setTimeout(()=>{
                persoVictime = Math.floor(Math.random()*4);
                console.log(persoVictime);

                if (listePerso[persoVictime][6] == "def"){
                    listePerso[persoVictime][4] -= monstreAct[3]/3;
                    bulleTexte.firstElementChild.innerHTML = monstreAct[2]+" attaque "+listePerso[persoVictime][2]+" et lui inflige "+monstreAct[3]+" de dégat malgré sa defense !";
                }
                // ICI (Modif le tableau Player pour ajouter des points de déf) 
                else {
                    listePerso[persoVictime][4] -= monstreAct[3];
                    bulleTexte.firstElementChild.innerHTML = monstreAct[2]+" attaque "+listePerso[persoVictime][2]+" et lui inflige "+monstreAct[3]+" de dégat !";
                }
            },((parseInt(monstreAct[1])-1)*2000));

        });

    },9000);
    
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

choixPerso(zoneTexte,actualPerso);
