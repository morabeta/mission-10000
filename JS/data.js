/* =========================================================
   MISSION 10 000 €
   Données et scénarios des 4 équipes
   Festival des Solidarités de la Jeunesse 2026
   ========================================================= */


/* =========================================================
   INFORMATIONS GÉNÉRALES DU JEU
   ========================================================= */

   const jeu = {

    objectifCollectif: 40000,

    objectifEquipe: 10000,

    dureeMission: 20 * 60, // 20 minutes en secondes

    dureePitch: 2 * 60// 2 minutes

};


/* =========================================================
   LES 4 MISSIONS
   ========================================================= */

const missions = {

    /* =====================================================
       GROUPE 1
       COLLECTE SUR DES ÉVÉNEMENTS
       ===================================================== */

    1: {

        id: 1,

        icone: "./assets/images/icons/icon_event.jpeg",

        nom: "Collecte sur des événements",

        description:
            "Imaginez une action de collecte originale, visible et réalisable lors d'un festival, d'une manifestation ou d'une fête locale.",

        contexte:
            "Les événements permettent de rencontrer de nouveaux publics et de faire connaître le Secours populaire. Mais parmi toutes les animations présentes, il peut être difficile de se démarquer.",


        /* -----------------------------------------
           ÉTAPES DU JEU
           ----------------------------------------- */

        etapes: [

            {
                type: "CRÉATION",
                icone: "./assets/images/icons/creation.png",
                titre: "Inventez votre concept",

                description:
                    "Imaginez une action de collecte originale à organiser pendant un événement. Donnez également un nom à votre projet.",

                bouton:
                    "NOUS AVONS NOTRE IDÉE"
            },


            {
                type: "CONTRAINTE",
                icone: "./assets/images/icons/petit_budget.png",
                titre: "Petit budget !",

                description:
                    "Votre fédération ne peut investir que 100 € pour lancer l'opération. Comment réalisez-vous votre idée avec ce budget ?",

                bouton:
                    "NOUS AVONS UNE SOLUTION"
            },


            {
                type: "DÉFI",
                icone: "./assets/images/icons/generations.png",
                titre: "Toutes les générations",

                description:
                    "Votre action doit donner envie à différentes générations de participer. Comment faites-vous participer aussi bien les jeunes que les personnes plus âgées ?",

                bouton:
                    "DÉFI RELEVÉ"
            },


            {
                type: "IMPRÉVU",
                icone: "./assets/images/icons/meteo.png",
                titre: "La météo change tout !",

                description:
                    "Le jour de l'événement, une forte pluie est annoncée et une partie du public risque de ne pas venir. Comment adaptez-vous votre collecte ?",

                bouton:
                    "NOUS AVONS UN PLAN B"
            }

        ],


        /* -----------------------------------------
           COUP DE POUCE
           ----------------------------------------- */

        indice:
            "Pensez à quelque chose que les participants peuvent acheter, faire, découvrir ou expérimenter pendant l'événement.",


        /* -----------------------------------------
           EXEMPLES POUR LES ANIMATEURS
           ----------------------------------------- */

        exemples: [
            "Goodies solidaires",
            "Maquillage",
            "Vinyles",
            "Animation participative",
            "Collecte déambulatoire"
        ]

    },


    /* =====================================================
       GROUPE 2
       OUTILS NUMÉRIQUES
       ===================================================== */

    2: {

        id: 2,

        icone: "./assets/images/icons/outils_numeriques.png",

        nom: "Outils numériques",

        description:
            "Imaginez une action de collecte innovante utilisant les outils numériques pour toucher de nouveaux donateurs.",

        contexte:
            "Les réseaux sociaux, les cagnottes et les outils numériques offrent de nouvelles possibilités de sensibilisation et de collecte, mais ils sont encore parfois peu utilisés dans les fédérations.",


        etapes: [

            {
                type: "CRÉATION",
                icone: "./assets/images/icons/creation.png",
                titre: "Imaginez votre collecte digitale",

                description:
                    "Inventez une action utilisant le numérique pour collecter autrement. Donnez un nom à votre projet.",

                bouton:
                    "NOTRE CONCEPT EST PRÊT"
            },


            {
                type: "CONTRAINTE",
                icone: "./assets/images/icons/contrainte_media.png",
                titre: "Faites simple !",

                description:
                    "Votre action doit pouvoir être comprise et utilisée facilement, même par quelqu'un qui maîtrise peu les outils numériques. Comment faites-vous ?",

                bouton:
                    "NOUS AVONS ADAPTÉ L'IDÉE"
            },


            {
                type: "DÉFI",
                icone: "./assets/images/icons/generations.png",
                titre: "Connectez les générations",

                description:
                    "Comment votre projet numérique peut-il faire participer différentes générations et pas uniquement les jeunes ?",

                bouton:
                    "DÉFI RELEVÉ"
            },


            {
                type: "IMPRÉVU",
                icone: "./assets/images/icons/annule.png",
                titre: "Votre influenceur annule !",

                description:
                    "La personne qui devait promouvoir votre opération sur les réseaux sociaux annule au dernier moment. Comment continuez-vous à faire connaître votre collecte ?",

                bouton:
                    "NOUS AVONS UN PLAN B"
            }

        ],


        indice:
            "Pensez aux réseaux sociaux, QR codes, cagnottes, vidéos, lives ou événements numériques.",


        exemples: [
            "QR code solidaire",
            "Cagnotte en ligne",
            "Challenge sur les réseaux sociaux",
            "Live solidaire",
            "Créateurs de contenu"
        ]

    },


    /* =====================================================
       GROUPE 3
       COLLECTE AU TRONC
       ===================================================== */

    3: {

        id: 3,

        icone: "./assets/images/icons/icon_tronc.png",

        nom: "Réinventer la collecte au tronc",

        description:
            "Imaginez une collecte au tronc plus dynamique, attractive et vivante que la collecte traditionnelle.",

        contexte:
            "La collecte au tronc permet de collecter tout en créant du contact humain, mais elle peut parfois sembler répétitive ou peu attractive.",


        etapes: [

            {
                type: "CRÉATION",
                icone: "./assets/images/icons/creation.png",
                titre: "Réinventez le tronc",

                description:
                    "Imaginez une nouvelle manière de collecter au tronc qui donne envie aux passants de s'arrêter et de participer.",

                bouton:
                    "NOUS AVONS NOTRE CONCEPT"
            },


            {
                type: "CONTRAINTE",
                icone: "./assets/images/icons/pas_de_stand.png",
                titre: "Pas de stand !",

                description:
                    "Vous n'avez pas le droit d'installer un stand fixe. Votre collecte doit pouvoir se déplacer. Comment faites-vous ?",

                bouton:
                    "NOUS NOUS ADAPTONS"
            },


            {
                type: "DÉFI",
                icone: "./assets/images/icons/generations.png",
                titre: "Une collecte intergénérationnelle",

                description:
                    "Comment rendre votre collecte suffisamment attractive pour faire participer des bénévoles et donateurs de différentes générations ?",

                bouton:
                    "DÉFI RELEVÉ"
            },


            {
                type: "IMPRÉVU",
                icone: "./assets/images/icons/ignorance.png",
                titre: "Personne ne s'arrête !",

                description:
                    "Les passants voient votre tronc mais continuent leur chemin. Vous devez attirer leur attention sans les forcer à donner. Que faites-vous ?",

                bouton:
                    "NOUS AVONS UNE SOLUTION"
            }

        ],


        indice:
            "Le tronc n'est pas obligé de rester immobile. Pensez au mouvement, au jeu, à la musique ou à une animation.",


        exemples: [
            "Collecte déambulatoire",
            "Défi solidaire",
            "Animation musicale",
            "Costumes",
            "Mini-jeux"
        ]

    },


    /* =====================================================
       GROUPE 4
       COMMERCES DE PROXIMITÉ
       ===================================================== */

    4: {

        id: 4,

        icone: "./assets/images/icons/icon_commercants.jpg",

        nom: "Mobiliser les commerçants",

        description:
            "Imaginez une initiative ponctuelle ou durable avec des commerçants de votre territoire pour développer la collecte.",

        contexte:
            "Les commerces de proximité peuvent devenir des partenaires importants pour faire connaître le Secours populaire et créer du lien sur le territoire.",


        etapes: [

            {
                type: "CRÉATION",
                icone: "./assets/images/icons/creation.png",
                titre: "Imaginez votre partenariat",

                description:
                    "Inventez une initiative avec un ou plusieurs commerçants de votre territoire et donnez un nom à votre projet.",

                bouton:
                    "NOTRE PARTENARIAT EST PRÊT"
            },


            {
                type: "CONTRAINTE",
                icone: "./assets/images/icons/convaincre.png",
                titre: "Il faut convaincre !",

                description:
                    "Le commerçant vous demande : « Pourquoi devrais-je participer ? ». Trouvez un argument qui lui donne envie de rejoindre votre initiative.",

                bouton:
                    "NOUS AVONS NOTRE ARGUMENT"
            },


            {
                type: "DÉFI",
                icone: "./assets/images/icons/generations.png",
                titre: "Faites participer le quartier",

                description:
                    "Votre projet doit créer du lien entre commerçants, habitants, jeunes et personnes plus âgées. Comment les faites-vous participer ensemble ?",

                bouton:
                    "DÉFI RELEVÉ"
            },


            {
                type: "IMPRÉVU",
                icone: "./assets/images/icons/imprevu.png",
                titre: "Plusieurs commerces refusent",

                description:
                    "Vous contactez plusieurs commerçants mais certains refusent de participer. Comment adaptez-vous votre stratégie pour que le projet puisse continuer ?",

                bouton:
                    "NOUS AVONS UN PLAN B"
            }

        ],


        indice:
            "Pensez à ce qui pourrait être simple pour le commerçant et visible pour ses clients : caisse, vitrine, ticket, QR code ou événement.",


        exemples: [
            "QR code en caisse",
            "Arrondi solidaire",
            "Produit solidaire",
            "Défi entre commerçants",
            "Journée solidaire"
        ]

    }

};


/* =========================================================
   JOKERS
   ========================================================= */
const jokers = {

    indice: {
        icone: "./assets/images/icons/help-icon.png",
        nom: "Coup de pouce",

        description:
            "Votre équipe reçoit un indice pour vous aider à avancer."
    },

    benevole: {
        icone: "./assets/images/icons/sos.png",
        nom: "SOS Animateur",

        description:
            "Appelez Slimane, Eugénie ou Ahmed. Vous avez droit à 1 minute pour expliquer votre problème et obtenir un conseil."
    },

    echange: {
        icone: "./assets/images/icons/espion.png",
        nom: "Espion solidaire",

        description:
            "Choisissez exactement 2 personnes de votre équipe. Elles disposent d'une minute pour aller rencontrer une autre équipe, récupérer une idée ou un conseil, puis revenir."
    }

};