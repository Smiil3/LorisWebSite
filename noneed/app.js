// app.js
const lol = document.querySelector('button')
const lol2 = document.querySelector('.aleluia')
const lol3 = document.querySelector('.aleluia2')
let nbr = 0
document.addEventListener('DOMContentLoaded', () => {
    // Effectuer une requête AJAX pour récupérer les données
    lol.addEventListener('click',()=>{
        fetch('http://localhost:3000/recuperer-donnees')
      .then(response => response.json())
      .then(data => {
        // Manipuler les données récupérées ici
        console.log(data);
        // Afficher les données dans #resultats, par exemple
        document.getElementById('resultats').innerHTML = JSON.stringify(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
    })
    lol2.addEventListener('click', ()=> {
        const nouvellesDonnees = {
            champ1: `Valeur1${nbr}`,
            champ2: `Valeur2${nbr}`,
          };
          nbr++
          // Envoi de la requête POST vers le serveur Node.js
          fetch('http://localhost:3000/ajouter-donnees', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(nouvellesDonnees)
          })
          .then(response => response.json())
          .then(data => {
            // Manipuler la réponse du serveur (peut être vide ou contenir un message de confirmation)
            console.log(data);
          })
          .catch(error => console.error('Erreur lors de l\'ajout de données :', error));
    })
    lol3.addEventListener('click', ()=> {
        id = nbr
        fetch('http://localhost:3000/supprimer-donnees', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // Mettez à jour l'interface utilisateur ou effectuez d'autres actions si nécessaire
          })
          .catch(error => console.error('Erreur lors de la suppression de données :', error));
    })
    document.querySelector('.lolss').addEventListener('click', ()=> {
      
    })
  });