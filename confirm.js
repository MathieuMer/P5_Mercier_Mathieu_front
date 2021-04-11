// Récupérer ID de la commande dans le localstorage
let orderObject = JSON.parse(localStorage.getItem("order"));

//Affiche l'ID de la commande
const spanId = document.getElementById('commande-id');
spanId.textContent = orderObject.orderId;

localStorage.removeItem('order');
localStorage.removeItem("shopCart");