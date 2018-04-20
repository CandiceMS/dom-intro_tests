// get a reference to the textbox where the bill type is to be entered
var input = document.querySelector('.billTypeText');
//get a reference to the add button
var addBtn = document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var callsTotal = document.querySelector('.callTotalOne');
var smsTotal = document.querySelector('.smsTotalOne');
var total = document.querySelector('.totalOne');
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var calls = 0;
var sms = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = input.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        calls += 2.75;
    }
    else if (billTypeEntered === "sms"){
        sms += 0.75;
    }

    callsTotal.innerHTML = calls.toFixed(2);
    smsTotal.innerHTML = sms.toFixed(2);
    var totalCost = calls + sms;
    total.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){

        total.classList.add("danger");
    }
    else if (totalCost >= 30){
        total.classList.add("warning");
    }
}

addBtn.addEventListener('click', textBillTotal);
