/* =========================================================
   MISSION 10 000 €
   Moteur principal du jeu
   ========================================================= */


/* =========================================================
   VARIABLES DU JEU
   ========================================================= */

// Numéro de l'étape actuelle
let etapeActuelleIndex = 0;

// Permet de savoir si la partie a commencé
let partieCommencee = false;

let jokerActuel = null;

let tempsJoker = 60;

let intervalJoker = null;


/* =========================================================
   ÉLÉMENTS HTML
   ========================================================= */

const carteIcone =
    document.getElementById("carteIcone");

const carteType =
    document.getElementById("carteType");

const carteTitre =
    document.getElementById("carteTitre");

const carteDescription =
    document.getElementById("carteDescription");

const btnEtapeSuivante =
    document.getElementById("btnEtapeSuivante");

const affichageEtape =
    document.getElementById("etapeActuelle");

const progressionValeur =
    document.getElementById("progressionValeur");

const jokerTimerContainer =
    document.getElementById("jokerTimerContainer");

const jokerTimer =
    document.getElementById("jokerTimer");

const btnLancerJoker =
    document.getElementById("btnLancerJoker");


/* =========================================================
   DÉMARRER UNE PARTIE
   ========================================================= */

function demarrerPartie() {
    // Sécurité
    if (!missionSelectionnee) {
        console.error(
            "Impossible de démarrer : aucune mission sélectionnée."
        );

        return;
    }

    // On recommence toujours à la première étape
    etapeActuelleIndex = 0;
    partieCommencee = true;

    // Réinitialisation des jokers
    reinitialiserJokers();

    // Affichage de la première carte
    afficherEtape();

}


/* =========================================================
   AFFICHER UNE ÉTAPE
   ========================================================= */

function afficherEtape() {

    if (!missionSelectionnee) {
        return;
    }

    const etapes = missionSelectionnee.etapes;

    const etape = etapes[etapeActuelleIndex];

    // Si l'étape n'existe pas
    if (!etape) {
        afficherDefi10000();
        return;
    }


    /* -------------------------
       Contenu de la carte
       ------------------------- */

    carteIcone.textContent =
        etape.icone;

    carteType.textContent =
        etape.type;

    carteTitre.textContent =
        etape.titre;

    carteDescription.textContent =
        etape.description;

    btnEtapeSuivante.textContent =
        etape.bouton;


    /* -------------------------
       Numéro de l'étape
       ------------------------- */

    affichageEtape.textContent =
        etapeActuelleIndex + 1;


    /* -------------------------
       Barre de progression
       ------------------------- */

    const progression =
        ((etapeActuelleIndex + 1) / 5) * 100;

    progressionValeur.style.width =
        progression + "%";

}


/* =========================================================
   PASSER À L'ÉTAPE SUIVANTE
   ========================================================= */

function etapeSuivante() {

    if (!partieCommencee) {
        return;
    }

    etapeActuelleIndex++;

    /*
       Les missions possèdent 4 cartes.

       Après la quatrième carte,
       on passe au défi commun des 10 000 €.
    */

    if (
        etapeActuelleIndex >=
        missionSelectionnee.etapes.length
    ) {

        afficherDefi10000();

        return;
    }

    afficherEtape();

}


/* =========================================================
   DÉFI FINAL : 10 000 €
   ========================================================= */

function afficherDefi10000() {

    partieCommencee = false; 

    // Arrêt du chrono des 20 minutes
    arreterChronoMission();

    // Progression complète
    progressionValeur.style.width = "100%";

    // Étape 5
    affichageEtape.textContent = "5";

    // On change d'écran
    afficherEcran("objectif10000");

}

/* =========================================================
   CLIC SUR LE BOUTON DE LA CARTE
   ========================================================= */

btnEtapeSuivante.addEventListener(
    "click",
    function () {

        etapeSuivante();

    }
);

/* =========================================================
   JOKERS
   ========================================================= */


// État des trois jokers
let jokersUtilises = {
    indice: false,
    benevole: false,
    echange: false
};


/* =========================================================
   ÉLÉMENTS HTML DES JOKERS
   ========================================================= */

const boutonsJokers =
    document.querySelectorAll(".joker");

const popupJoker =
    document.getElementById("popupJoker");

const jokerIcone =
    document.getElementById("jokerIcone");

const jokerTitre =
    document.getElementById("jokerTitre");

const jokerDescription =
    document.getElementById("jokerDescription");

const btnFermerJoker =
    document.getElementById("btnFermerJoker");


/* =========================================================
   RÉINITIALISER LES JOKERS
   ========================================================= */

function reinitialiserJokers() {

    jokersUtilises = {
        indice: false,
        benevole: false,
        echange: false
    };

    boutonsJokers.forEach(function (bouton) {

        bouton.disabled = false;

        bouton.classList.remove("utilise");

    });

}


/* =========================================================
   UTILISER UN JOKER
   ========================================================= */

function utiliserJoker(typeJoker) {

    // Le joker a déjà été utilisé
    if (jokersUtilises[typeJoker]) {
        return;
    }


    // Récupération des informations depuis data.js
    const joker = jokers[typeJoker];

    if (!joker) {
        console.error("Joker introuvable :", typeJoker);
        return;
    }


    // On mémorise le joker actuellement ouvert
    jokerActuel = typeJoker;


    // Icône
    jokerIcone.textContent =
        joker.icone;

    // Nom
    jokerTitre.textContent =
        joker.nom;


    /* -----------------------------------------
       Par défaut :
       aucun chrono
       ----------------------------------------- */

    jokerTimerContainer.style.display = "none";

    btnLancerJoker.style.display = "none";


    /* =========================================
       JOKER 1 : COUP DE POUCE
       ========================================= */

        if (typeJoker === "indice") {

            jokerDescription.innerHTML = `
                <strong>Votre équipe est bloquée ?</strong>
                <br><br>
        
                Une aide secrète vous attend... 👀
                <br><br>
        
                Demandez l'enveloppe
                <strong>💡 COUP DE POUCE</strong>
                à l'un des animateurs :
                <br><br>
        
                <strong>Slimane • Eugénie • Ahmed</strong>
                <br><br>
        
                ⚠️ Ouvrez-la avec toute votre équipe !
            `;
        
        }
    
    

    /* =========================================
       JOKER 2 : SOS ANIMATEUR
       ========================================= */

    else if (typeJoker === "benevole") {

        jokerDescription.textContent =
            "☎️ Appelez Slimane, Eugénie ou Ahmed. "
            + "Vous disposez d'une minute pour expliquer "
            + "votre problème et obtenir un conseil.";

        // Afficher le chrono
        jokerTimerContainer.style.display = "block";

        // Afficher le bouton
        btnLancerJoker.style.display = "inline-block";

        btnLancerJoker.textContent =
            "☎️ LANCER LE SOS";

    }


    /* =========================================
       JOKER 3 : ESPION SOLIDAIRE
       ========================================= */

    else if (typeJoker === "echange") {

        jokerDescription.textContent =
            "🕵️ Choisissez exactement 2 personnes de votre équipe. "
            + "Elles disposent d'une minute pour aller rencontrer "
            + "une autre équipe, récupérer une idée ou un conseil, "
            + "puis revenir dans leur équipe.";

        // Afficher le chrono
        jokerTimerContainer.style.display = "block";

        // Afficher le bouton
        btnLancerJoker.style.display = "inline-block";

        btnLancerJoker.textContent =
            "🕵️ LANCER LES ESPIONS";

    }


    // Réinitialiser l'affichage du chrono
    tempsJoker = 60;

    jokerTimer.textContent = "01:00";

    jokerTimer.classList.remove(
        "joker-timer-danger",
        "joker-timer-fin"
    );

    btnLancerJoker.disabled = false;


    // Affichage du popup
    popupJoker.classList.add("active");


    // Le joker est maintenant considéré comme utilisé
    jokersUtilises[typeJoker] = true;


    // Désactivation du bouton correspondant
    const bouton =
        document.querySelector(
            `[data-joker="${typeJoker}"]`
        );

    if (bouton) {

        bouton.disabled = true;

        bouton.classList.add("utilise");

    }

}


/* =========================================================
   CLIC SUR LES JOKERS
   ========================================================= */

boutonsJokers.forEach(function (bouton) {

    bouton.addEventListener(
        "click",
        function () {

            const typeJoker =
                this.dataset.joker;

            utiliserJoker(typeJoker);

        }
    );

});


/* =========================================================
   LANCER LE CHRONO D'UN JOKER
   ========================================================= */

function lancerChronoJoker() {

    // Évite deux chronos simultanés
    clearInterval(intervalJoker);

    tempsJoker = 60;

    jokerTimer.textContent = "01:00";

    jokerTimer.classList.remove(
        "joker-timer-danger",
        "joker-timer-fin"
    );


    // Empêche de relancer le bouton
    btnLancerJoker.disabled = true;

    btnLancerJoker.textContent =
        "JOKER EN COURS...";


    intervalJoker = setInterval(
        function () {

            tempsJoker--;

            jokerTimer.textContent =
                formaterTemps(tempsJoker);


            /* ---------------------------------
               10 dernières secondes
               --------------------------------- */

            if (tempsJoker <= 10) {

                jokerTimer.classList.add(
                    "joker-timer-danger"
                );

            }


            /* ---------------------------------
               Temps terminé
               --------------------------------- */

            if (tempsJoker <= 0) {

                clearInterval(intervalJoker);

                intervalJoker = null;

                finChronoJoker();

            }

        },
        1000
    );

}


/* =========================================================
   FIN DU CHRONO JOKER
   ========================================================= */

function finChronoJoker() {

    jokerTimer.textContent = "00:00";

    jokerTimer.classList.remove(
        "joker-timer-danger"
    );

    jokerTimer.classList.add(
        "joker-timer-fin"
    );


    /* -----------------------------------------
       ESPION SOLIDAIRE
       ----------------------------------------- */

    if (jokerActuel === "echange") {

        jokerTitre.textContent =
            "🚨 TEMPS ÉCOULÉ !";

        jokerDescription.textContent =
            "Les 2 espions doivent revenir immédiatement "
            + "dans leur équipe et partager ce qu'ils ont découvert.";

    }


    /* -----------------------------------------
       SOS ANIMATEUR
       ----------------------------------------- */

    else if (jokerActuel === "benevole") {

        jokerTitre.textContent =
            "⏰ FIN DU SOS !";

        jokerDescription.textContent =
            "Merci Slimane, Eugénie ou Ahmed ! "
            + "Retournez maintenant à votre mission.";

    }


    // Sonnerie
    jouerSonnerie();


    // On cache le bouton de lancement
    btnLancerJoker.style.display = "none";

}


/* =========================================================
   BOUTON LANCER LE JOKER
   ========================================================= */

btnLancerJoker.addEventListener(
    "click",
    function () {

        lancerChronoJoker();

    }
);


/* =========================================================
   SONNERIE
   ========================================================= */

function jouerSonnerie() {

    const son = new Audio(
        "assets/sounds/alert.mp3"
    );

    son.volume = 0.8;

    son.play().catch(function (erreur) {

        console.log(
            "Impossible de jouer la sonnerie.",
            erreur
        );

    });
    setTimeout(function () {

        son.pause();
        son.currentTime = 0;

    }, 2000);

}


/* =========================================================
   FERMER LE POPUP
   ========================================================= */
btnFermerJoker.addEventListener("click", function () {

    // Si le chrono du joker tourne encore,
    // on l'arrête proprement
    if (intervalJoker !== null) {

        clearInterval(intervalJoker);
        intervalJoker = null;

    }

    // Réinitialisation
    tempsJoker = 60;

    jokerTimer.textContent = "01:00";

    jokerTimer.classList.remove(
        "joker-timer-danger",
        "joker-timer-fin"
    );

    btnLancerJoker.disabled = false;

    // Fermer le popup
    popupJoker.classList.remove("active");

});