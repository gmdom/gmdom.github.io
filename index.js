document.getElementById('buttonId1').addEventListener(function () {
    openForm();
});
PWCheckout.Bind('tokenCreated', OnTokenReceived);
//PWCheckout.AddActionButton('buttonId1');
function openForm() {
    var customerUniqueId = 'dd';
    var captureUrl = 'https://';
    var myPublicKey = '';
    PWCheckout.OpenIframeCustom(captureUrl + '?key=' + myPublicKey + '&session_id=' + customerUniqueId, customerUniqueId);
}
PWCheckout.SetProperties({
    name: 'Demo Test.',
    email: 'gpigni@pagosweb.com.uy',
    //image: 'http://mitienda.com/images/logocheckout.png',
    button_label: 'Pagar #monto#',
    description: 'Checkout Creditel Test.',
    currency: 'DOP',
    amount: '100',
    lang: 'ESP',
    form_id: 'shoppingcart_form',
    checkout_card: 1,
    autoSubmit: 'true'
});
function OnTokenReceived(token) {
    alert(token.TokenId);
    var textview = document.getElementById('PWTokenAux');
    textview.value = token.TokenId;
}
// document
//   .getElementById('btnCheckout')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     myFunction();
//   });
