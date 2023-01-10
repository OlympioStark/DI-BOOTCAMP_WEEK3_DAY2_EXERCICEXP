//Déclarez une variable globale nommée allBoldItems
let allBoldItems;

// Créez une fonction appelée getBold_items()qui ne prend aucun paramètre
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

//Créez une fonction appelée highlight()qui change la couleur de tout le texte en gras en bleu
function highlight() {
    allBoldItems.forEach((item) => {
        item.style.color = 'blue';
    });
}

//Créez une fonction appelée return_normal()qui change la couleur de tout le texte en gras en noi
function returnNormal() {
    allBoldItems.forEach((item) => {
        item.style.color = 'black';
    });
}

//Obtenir tous les éléments en gras
getBoldItems();

//Appelez la fonction highlight()sur mouseover
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnNormal);