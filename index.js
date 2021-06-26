document.getElementById('buttonId1').addEventListener('click', openForm);
PWCheckout.Bind('tokenCreated', OnTokenReceived);
//PWCheckout.AddActionButton('buttonId1');
function openForm(event) {
  event.preventDefault();
  var customerUniqueId = 'UI_ddf8c7a1-74c2-4781-a424-ae36de50fd76';
  var captureUrl = 'https://lab.cardnet.com.do/servicios/tokens/v1/Capture/';
  var myPublicKey = 'mfH9CqiAFjFQh_gQR_1TQG_I56ONV7HQ';
  PWCheckout.OpenIframeCustom(
    captureUrl + '?key=' + myPublicKey + '&session_id=' + customerUniqueId,
    customerUniqueId
  );
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
  autoSubmit: 'false',
  empty: 'true',
});
function OnTokenReceived(token) {
  //alert(token.TokenId);
  var textview = document.getElementById('PWTokenAux');
  textview.value = token.TokenId;
}
// document
//   .getElementById('btnCheckout')
//   .addEventListener('click', function (event) {
//     event.preventDefault();
//     myFunction();
//   });
