/* =========================================================
   MISSION 10 000 €
   Navigation principale de l'application
   ========================================================= */


/* =========================================================
   VARIABLES
   ========================================================= */

// Mission actuellement sélectionnée
let missionSelectionnee = null;


/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS HTML
   ========================================================= */

const btnCommencer = document.getElementById("btnCommencer");

const boutonsGroupes = document.querySelectorAll(".groupe");

const btnLancerMission = document.getElementById("btnLancerMission");

const missionTitre = document.getElementById("missionTitre");

const missionDescription = document.getElementById("missionDescription");

const jeuNomMission = document.getElementById("jeuNomMission");


/* =========================================================
   FONCTION : CHANGER D'ÉCRAN
   ========================================================= */

function afficherEcran(idEcran) {

    // On récupère tous les écrans
    const ecrans = document.querySelectorAll(".screen");

    // On les cache tous
    ecrans.forEach(function (ecran) {
        ecran.classList.remove("active");
    });

    // On récupère l'écran demandé
    const nouvelEcran = document.getElementById(idEcran);

    // On l'affiche
    if (nouvelEcran) {
        nouvelEcran.classList.add("active");
    }

    const branding = document.getElementById("gameBranding");

    if (branding) {
        if (idEcran === "accueil") {
            branding.style.display = "none";
        } else {
            branding.style.display = "flex";
        }
    }

}


/* =========================================================
   ACCUEIL
   ========================================================= */

btnCommencer.addEventListener("click", function () {

    afficherEcran("choix-groupe");

});


/* =========================================================
   CHOIX DU GROUPE
   ========================================================= */

boutonsGroupes.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        /*
           Exemple :
           data-groupe="2"
           devient :
           numeroGroupe = 2
        */

        const numeroGroupe = this.dataset.groupe;

        // On récupère la mission correspondante dans data.js
        missionSelectionnee = missions[numeroGroupe];

        // Sécurité
        if (!missionSelectionnee) {
            console.error("Mission introuvable :", numeroGroupe);
            return;
        }

        // On met les informations dans l'écran Mission
        missionTitre.innerHTML = `<img src="${missionSelectionnee.icone}" alt="" class="mission-titre-icone">
        <span>${missionSelectionnee.nom}</span>`;

        missionDescription.textContent =
            missionSelectionnee.description;

        // On affiche l'écran mission
        afficherEcran("mission");

    });

});

/* =========================================================
   LANCER LA MISSION
   ========================================================= */

btnLancerMission.addEventListener("click", function () {

    // Vérification
    if (!missionSelectionnee) {
        console.error("Aucune mission sélectionnée.");
        return;
    }

   
    // Nom + image de la mission dans le header du jeu
    jeuNomMission.innerHTML = `<img src="${missionSelectionnee.icone}" alt="" class="jeu-mission-icone"> <span>${missionSelectionnee.nom}</span>`;

    // On affiche l'écran de jeu
    afficherEcran("jeu");

    // Démarrage du jeu
    demarrerPartie();

    // Démarrage du chrono 
    demarrerChronoMission();

});
/* =========================================================
   DÉFI 10 000 € -> PITCH
   ========================================================= */

   const btnPitch = document.getElementById("btnPitch");
   const btnTerminer = document.getElementById("btnTerminer");
   
   
   /*
      L'équipe a trouvé comment atteindre 10 000 €
      -> elle passe à la préparation du pitch
   */
   
   btnPitch.addEventListener("click", function () {
   
       // Afficher l'écran du pitch
       afficherEcran("pitch");
   
       // Démarrer le chrono de 2 minutes
       demarrerChronoPitch();
   
   });
   
   
   /* =========================================================
      PITCH -> FIN DE LA MISSION
      ========================================================= */
   
   btnTerminer.addEventListener("click", function () {
   
       // Arrêter le chrono du pitch s'il tourne encore
       if (intervalPitch !== null) {
   
           clearInterval(intervalPitch);
   
           intervalPitch = null;
   
       }
   
       // Afficher l'écran final
       afficherEcran("fin");
   
   });