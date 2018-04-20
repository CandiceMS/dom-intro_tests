//get a reference to the calculate button
var myCalButton = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var myBillTotal = document.querySelector('.billTotal');
//get a reference to the billString
var myBillString = document.querySelector('.billString');

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(){
  var enterText = myBillString.value;
  var usageSplit = enterText.split(",");
  var totalBill = 0;
  for (var i = 0; i < usageSplit.length; i++){
    if (usageSplit[i].trim() === "call"){
      totalBill += 2.75;
    }
    else if (usageSplit[i].trim() === "sms"){
    totalBill += 0.75;
    }
  }
  var roundedBillTotal = totalBill.toFixed(2);
    myBillTotal.innerHTML = roundedBillTotal;

    if (roundedBillTotal > 20.00) {
      myBillTotal.classList.add("warning");
    }
    if (roundedBillTotal < 20.00) {
      myBillTotal.classList.remove('warning')
    }
    if (roundedBillTotal > 30.00) {
      myBillTotal.classList.add("danger");
    }
    if (roundedBillTotal < 30.00) {
      myBillTotal.classList.remove("danger")
    }
}
//link the function to a click event on the calculate button
myCalButton.addEventListener('click', totalPhoneBill);
