/* =========================================================
   MISSION 10 000 €
   Gestion des chronomètres
   ========================================================= */


/* =========================================================
   VARIABLES
   ========================================================= */

   let tempsRestant = jeu.dureeMission; // 20 minutes
   let intervalMission = null;
   
   let tempsPitchRestant = jeu.dureePitch; // 2 minutes
   let intervalPitch = null;
   
   
   /* =========================================================
      ÉLÉMENTS HTML
      ========================================================= */
   
   const timerElement =
       document.getElementById("timer");
   
   const pitchTimerElement =
       document.getElementById("pitchTimer");
   
   
   /* =========================================================
      FORMAT DU TEMPS
      Exemple : 1199 secondes -> 19:59
      ========================================================= */
   
   function formaterTemps(secondes) {
   
       const minutes =
           Math.floor(secondes / 60);
   
       const secondesRestantes =
           secondes % 60;
   
       return (
           String(minutes).padStart(2, "0")
           + ":" +
           String(secondesRestantes).padStart(2, "0")
       );
   }
   
   
   /* =========================================================
      AFFICHAGE DU CHRONO PRINCIPAL
      ========================================================= */
   
   function afficherTempsMission() {
   
       timerElement.textContent =
           formaterTemps(tempsRestant);
   
   
       /* -----------------------------------------
          Alertes visuelles
          ----------------------------------------- */
   
       // Moins de 5 minutes
       if (tempsRestant <= 300) {
   
           timerElement.parentElement.classList.add(
               "timer-warning"
           );
   
       }
   
   
       // Moins d'une minute
       if (tempsRestant <= 60) {
   
           timerElement.parentElement.classList.add(
               "timer-danger"
           );
   
       }
   
   }
   
   
   /* =========================================================
      DÉMARRER LE CHRONO
      ========================================================= */
   
   function demarrerChronoMission() {
   
       // On évite plusieurs chronos simultanés
       clearInterval(intervalMission);
   
       // Réinitialisation
       tempsRestant = jeu.dureeMission;
   
       timerElement.parentElement.classList.remove(
           "timer-warning",
           "timer-danger"
       );
   
       afficherTempsMission();
   
   
       intervalMission = setInterval(function () {
   
           tempsRestant--;
   
           afficherTempsMission();
   
   
           /* -----------------------------------------
              FIN DU TEMPS
              ----------------------------------------- */
   
           if (tempsRestant <= 0) {
   
               clearInterval(intervalMission);
   
               intervalMission = null;
   
               finDuTempsMission();
   
           }
   
       }, 1000);
   
   }
   
   
   /* =========================================================
      ARRÊTER LE CHRONO
      ========================================================= */
   
   function arreterChronoMission() {
   
       if (intervalMission !== null) {
   
           clearInterval(intervalMission);
   
           intervalMission = null;
   
       }
   
   }
   
   
   /* =========================================================
      FIN DES 20 MINUTES
      ========================================================= */
   
   function finDuTempsMission() {
   
       tempsRestant = 0;
   
       afficherTempsMission();
   
       jouerSonnerie();
   
       afficherDefi10000();
   
   }
   
   
   /* =========================================================
      CHRONO DU PITCH
      ========================================================= */
   
   function demarrerChronoPitch() {
   
       clearInterval(intervalPitch);
   
       tempsPitchRestant = jeu.dureePitch;
   
       afficherTempsPitch();
   
   
       intervalPitch = setInterval(function () {
   
           tempsPitchRestant--;
   
           afficherTempsPitch();
   
   
           if (tempsPitchRestant <= 0) {
   
               clearInterval(intervalPitch);
   
               intervalPitch = null;
   
               finDuPitch();
   
           }
   
       }, 1000);
   
   }   
   /* =========================================================
      AFFICHAGE DU CHRONO DU PITCH
      ========================================================= */
   
   function afficherTempsPitch() {
   
       pitchTimerElement.textContent =
           formaterTemps(tempsPitchRestant);
   
   }
   
   
   /* =========================================================
      FIN DU PITCH
      ========================================================= */
   
   function finDuPitch() {
       tempsPitchRestant = 0;
   
       afficherTempsPitch();
   
       pitchTimerElement.textContent ="TEMPS ÉCOULÉ !";
        
       jouerSonnerie();
   
   }