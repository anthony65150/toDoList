//creer les variables necessaires en recuperant les elements dans le DOM : 

const champArticle = document.getElementById("champArticle");
const ajoutArticle = document.getElementById("ajoutArticle");
const articlesAjoutes = document.getElementById("articlesAjoutes");
let compteur = 1;


//Creer une fonction pour ajouter les elements dans la liste

function ajoutElement(){
    //creer les elements : 
    let ajoutLi = document.createElement("li");
    let bouttonSupprimer = document.createElement("button");
    let texte = document.createElement("p");

    //configurer le contenu des elements ajoutés :
    texte.textContent = `${compteur} : ${champArticle.value}`;
    bouttonSupprimer.textContent ="Mis dans le panier";
    compteur ++;

    //action du boutton "Mis dans le panier"
    bouttonSupprimer.onclick = function(){
        ajoutLi.remove();
        compteur --;
    };

    //assembler les elements ajouter a la liste

    ajoutLi.appendChild(texte);
    ajoutLi.appendChild(bouttonSupprimer);
    articlesAjoutes.appendChild(ajoutLi);
}

    

    //attacher evenement au boutton

    ajoutArticle.addEventListener("click", ajoutElement);
    champArticle.remove;