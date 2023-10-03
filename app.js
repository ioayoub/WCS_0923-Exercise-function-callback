/**
 *
 * @param {string} sentence - Récupère la valeur complète saisie par l'utilisateur
 * @param {function} callback - Function callback qui gère l'affichage des différentes lettres dans le HTML
 */
const revertSentence = (sentence, callback) => {};

/**
 *
 * @param {string} letter - Lettre reçue en paramètre
 */
const printLetter = (letter) => {
  //Implémentez la logique pour ajouter la lettre reçue en paramètre dans le bon élement HTML
};

/*
  ! ⚠️ NE PAS TOUCHER A CETTE PARTIE ⚠️
 */

// Appele la fonction revertSentence avec la phrase saisie et une fonction de rappel
document.querySelector("#revertbutton").addEventListener("click", () => {
  const sentence = document.getElementById("input").value;

  // Analysez bien la ligne suivante :
  revertSentence(sentence, printLetter);
});
