// Déclaration des variables
//const serverUrl = "http://localhost:3000/api/teddies";
const serverUrl = "https://ab-p5-api.herokuapp.com/api/teddies";
// Appel fonction principale
main()

// Fonction Principale:
async function main() {
  const productList = await getProductList()
  console.log("Elements reçus du server grâce à la requête fetch ",productList);
  productContent(productList);
}

// Fonction getProductList: récupération des données sur le serveur
function getProductList() {
  return fetch(serverUrl)
  .then(function(response) {
    return response.json()
    .then(function(products) {
      return products;
    })
    .catch(function(error) {
      alert(error)
    });
  });
}

// Fonction productContent: Selectionne les élements HTML et leur passe le contenu récupéré sur le serveur
function productContent(productList) {
  for (i = 0; i < productList.length; i++) {

    const cardImg = document.getElementById(`product-${i}-img`);
    cardImg.src = productList[i].imageUrl;

    const cardName = document.getElementById(`product-${i}-name`);
    cardName.innerText = productList[i].name;

    const cardDescription = document.getElementById(`product-${i}-description`);
    cardDescription.innerText = productList[i].description;

    const cardPrice = document.getElementById(`product-${i}-price`);
    cardPrice.innerText = `${productList[i].price / 100}.00 €`;

    const cardLink = document.getElementById(`product-${i}-link`);
    cardLink.href = `product.html?id=${productList[i]._id}`;
  }
}