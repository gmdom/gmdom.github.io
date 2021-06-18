//PWCheckout.Bind('tokenCreated', OnTokenReceived);
PWCheckout.AddActionButton('buttonId1');
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
// function OnTokenReceived(token) {
//   alert(token.TokenId);
//   document.getElementById('PWTokenAux').value = token.TokenId;
// }
// document
//   .getElementById('btnCheckout')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     myFunction();
//   });
