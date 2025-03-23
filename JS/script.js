//1--------------------------------------------------------------------------------------  
// creer les variables necessaires en recuperant les elements dans le DOM : 

/*const champArticle = document.getElementById("champArticle");
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
    champArticle.remove;*/




    /*//2: exo ------------------------------------------------------------------------------------------
    //a partir un input type number avec l'id number1
    //a partir d'un autre input de type number avec l'id number2
    //fonction calculer la multiplication des deux number
    //afficher dans une div le resultat

    let boutton = document.getElementById("bouton");
    let resultat = document.getElementById("resultat");

    function calcul (){
        let number1 = parseFloat(document.getElementById("number1").value);
        let number2 = parseFloat(document.getElementById("number2").value);
        let multiplication = number1 * number2;
        return multiplication
    };
    
    function afficherResultat (){
        let texte = document.createElement("p");
        texte.textContent = calcul();
        resultat.appendChild(texte);
    };

    
     boutton.addEventListener("click", afficherResultat);
     */

    const modalLayer = document.getElementById("modal-layer");




   document.querySelectorAll("[data-modal]").forEach((link) =>{
        
        link.addEventListener("click", function(event){
            event.preventDefault();                              // dit a JS "ne fait pas le fonctionnement par defaut du navigateur" sur les <a>

            const element = event.currentTarget;
            const modal = document.getElementById(element.dataset.modal);
            if (modal){
                modalLayer.classList.add("active");
                modal.classList.add("active");
            }
        });
   });

   document.querySelectorAll(".modal [data-close]").forEach((link) =>{
        link.addEventListener("click", function(event){
            event.preventDefault();

            const element = event.currentTarget;
            element.closest(".modal").classList.remove("active");
            modalLayer.classList.remove("active");
        });    
   });

