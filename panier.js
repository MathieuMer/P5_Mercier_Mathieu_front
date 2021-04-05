// Récupération du contenu du panier dans le localstorage
let tabLocalStorage = JSON.parse(localStorage.getItem("shopCart"));

// Créer le tableau panier récapitulatif du panier
const tableauBody = document.getElementById(`tableau-body`);
for (i = 0; i < tabLocalStorage.length; i++) {
    const line = document.createElement("tr");
    line.id = `ligne${[i]}`;
    line.innerHTML = 
    `<th scope="row" id='num${[i]}' class="align-middle">${i + 1}</th>
    <td id='imageth${[i]}'><img id='image${[i]}' class="img-thumbnail img-fluid" width="150px" src="" alt="peluche"></td>
    <td id='name${[i]}' class="align-middle"></td>
    <td id='color${[i]}' class="align-middle"></td>
    <td class="align-middle"><button type="button" id='quantity_moins_${[i]}' class="btn btn-primary"><i class="fa fa-minus"></i></button></td>
    <td id='quantity${[i]}' class="align-middle"></td>
    <td class="align-middle"><button type="button" id='quantity_plus_${[i]}' class="btn btn-primary"><i class="fa fa-plus"></i></button></td>
    <td id='prixU${[i]}' class="align-middle"></td>
    <td id='prixT${[i]}' class="align-middle"></td>
    <td class="align-middle"><button type="button" id='supp${[i]}' class="btn btn-primary"><i class="fa fa-trash"></i></button></td>`;
    tableauBody.appendChild(line);
}

// Remplir le tableau récapitulatif du panier
for (i = 0; i < tabLocalStorage.length; i++) {
    // image
    const image = document.getElementById(`image${[i]}`);
    image.src = tabLocalStorage[i][5];
    // nom
    const name = document.getElementById(`name${[i]}`);
    name.textContent = tabLocalStorage[i][0];
    // couleur
    const color = document.getElementById(`color${[i]}`);
    color.textContent = tabLocalStorage[i][1];
    // quantité
    const quantity = document.getElementById(`quantity${[i]}`);
    quantity.textContent = tabLocalStorage[i][3];
    // prix unitaire
    const prixU = document.getElementById(`prixU${[i]}`);
    prixU.textContent = `${tabLocalStorage[i][2] / 100}.00 €`;
    // prix total par articles
    const prixT = document.getElementById(`prixT${[i]}`);
    prixT.textContent = `${(tabLocalStorage[i][2] / 100) * tabLocalStorage[i][3]}.00 €`;
}

// Calcul et affichage du prix Total à payer
const prixTotalPanier = document.getElementById(`prix-total-panier`);
function calcPrixTotal (tabLocalStorage) {
    var prixTotalPanier = 0;
    for (i = 0; i < tabLocalStorage.length; i++){
        prixTotalPanier = prixTotalPanier + (tabLocalStorage[i][3] * tabLocalStorage[i][2]);
    }
    prixTotalPanier = prixTotalPanier / 100;
    console.log(prixTotalPanier);
    return prixTotalPanier;
}
prixTotalPanier.textContent = `${calcPrixTotal(tabLocalStorage)}.00 €`;

// Fonction quantité +1 et -1 d'un article via les boutons + et -
var addOne = function() {
    var lastChar = this.id.substr(this.id.length - 1);
    tabLocalStorage[lastChar][3] = tabLocalStorage[lastChar][3] + 1;
    localStorage.setItem('shopCart',JSON.stringify(tabLocalStorage));
    document.location.reload();
}

// Fonction quantité -1
var delOne = function(){
    var lastChar = this.id.substr(this.id.length - 1);
    tabLocalStorage[lastChar][3] = tabLocalStorage[lastChar][3] - 1;
    console.log('le tab',tabLocalStorage[lastChar][3]);
    // if quantity = 0
    if (tabLocalStorage[lastChar][3] === 0) {
        var userConfirm = confirm(`Vous êtes sur le point de supprimer ${tabLocalStorage[lastChar][0]} de votre panier :( \nConfirmer ?`);
        if (userConfirm == true) {
            alert`Votre article a été retiré du panier`;
            tabLocalStorage.splice(lastChar,1);
            localStorage.setItem('shopCart',JSON.stringify(tabLocalStorage));
            document.location.reload();
        } else {
            tabLocalStorage[lastChar][3] = tabLocalStorage[lastChar][3] + 1;
            document.location.reload();
        };
    };
    localStorage.setItem('shopCart',JSON.stringify(tabLocalStorage));
    document.location.reload();
}

// Fonction supprimer l'article du panier
var supCart = function(){
    var lastChar = this.id.substr(this.id.length - 1);
    var userConfirm = confirm(`Vous êtes sur le point de supprimer ces articles de votre panier :( \nConfirmer ?`);
    if (userConfirm == true) {
        alert`Vos articles ont étés retirés du panier`;
        tabLocalStorage.splice(lastChar,1);
        localStorage.setItem('shopCart',JSON.stringify(tabLocalStorage));
        document.location.reload();
    } else {
        document.location.reload();
    };
}

// Appel des fonctions +1, -1, et suppression lors du clic
for (i = 0; i < tabLocalStorage.length; i++) {
    document.getElementById(`quantity_moins_${i}`).onclick = delOne;
    document.getElementById(`quantity_plus_${i}`).onclick = addOne;
    document.getElementById(`supp${[i]}`).onclick = supCart;
}





