/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


// TODO : compléter ce fichier pour ajouter les liens à la page web


listeLiens.forEach(function (listeLien) { // boucle foreach pour traiter chaque site un par un

	// var lien = document.createElement ("div");
	// lien.id = "lien"
	
	// création de l'lement titre cliquable
	var titreElt = document.createElement("a");
		titreElt.href = listeLien.url;
		titreElt.style.color = "#428bca";
		titreElt.style.textDecoration = "none";
	    titreElt.style.marginRight = "5px";
		titreElt.appendChild(document.createTextNode(listeLien.titre));
	
	// création du champ texte avec l'url du site
	var urlElt = document.createElement("span");
		urlElt.appendChild(document.createTextNode(listeLien.url));
		
	// création de la première ligne
	var ligneTitreElt = document.createElement("h4");
		ligneTitreElt.style.margin = "0px";
		ligneTitreElt.appendChild(titreElt);
		ligneTitreElt.appendChild(urlElt);
	
	// création de la ligne avec le nom de l'auteur
	var auteurElt = document.createElement("span");
		auteurElt.appendChild(document.createTextNode("Ajouté par " + listeLien.auteur));
	
	// création de la div contenu les deux ligne créer précedemment
	var divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(auteurElt);
	
	
	// insertion de la div enfant de la div contenu
	document.getElementById("contenu").appendChild(divLienElt);
	
});


