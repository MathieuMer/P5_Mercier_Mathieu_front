// Récupération du contenu du panier dans le localstorage
let tabLocalStorage = JSON.parse(localStorage.getItem("shopCart"));

for (i = 0; i < tabLocalStorage.length; i++) {
    const tableauBody = document.getElementById(`tableau-body`);
    //Créer la ligne
    const createElementTr = document.createElement("tr");
    createElementTr.id = `ligne-${[i =+ 1]}`;
    tableauBody.appendChild(createElementTr);

    const createElementTh = document.createElement("th");
    createElementTh.textContent = `${[i =+ 1]}`;
    createElementTr.appendChild(createElementTh);   


}