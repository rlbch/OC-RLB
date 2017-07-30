/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var nombreMystere = Math.floor(Math.random() * 100) + 1;
var nombreSaisi = prompt("A vous de jouez, Entrez un nombre :");
console.log(nombreMystere)
 
// boucle pour les six essais
for (i = 1; i <= 6; i++) {
	
 
// structure conditionnelle pour comparaison nombreSaisi et nombreMystere
                if (nombreSaisi < nombreMystere) {
                               console.log(nombreSaisi + " est trop petit");
								var nombreSaisi = prompt("Essaie encore, Entrez un nombre :");
                } else {
                               if (nombreSaisi > nombreMystere) {
                               console.log(nombreSaisi + " est trop grand");
							   var nombreSaisi = prompt("Essaie encore, Entrez un nombre :");
                } else {
								
								console.log("Bravo ! la solution était " + nombreMystere);
								console.log("Vous avez trouvé en " + i + " essais");
								break;
				}
                }

				if (i === 6) {
								console.log("PERDU!");
							}
				
				
				}
 

 
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + nombreMystere + ")");

// TODO : complétez le programme