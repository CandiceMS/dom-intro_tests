//DOM ELEMENT REFERENCES:
// SETTINGS INPUTS ELEMENTS
var callSet = document.querySelector('.callCostSetting').value;
  var updatedCall = parseFloat(callSet);
var smsSet = document.querySelector('.smsCostSetting').value;
  var updatedSms = parseFloat(smsSet);
var warningSet = document.querySelector('.warningLevelSetting').value;
  var updatedWarning = parseFloat(warningSet);
var criticalSet = document.querySelector('.criticalLevelSetting').value;
  var updatedCritical = parseFloat(criticalSet);

//BUTTONS ELEMENTS TO UPDATE / CALCULATE
var settingsAdd = document.querySelector('.settingsAddBtn');
var updated = document.querySelector('.updateSettings');

//TOTALS ELEMENTS
var totalCalls = document.querySelector('.callTotalSettings');
var totalSms = document.querySelector('.smsTotalSettings');
var totalWithSettings = document.querySelector('.totalSettings');

//Global variables to store calculations from functions
var callsWithSettings = 0;
var smsWithSettings = 0;

var callValue = 0;
var smsValue = 0;

updated.addEventListener('click', settings);


function settings(){
  if (updatedCall > 0) {
   callValue = updatedCall;
  }
  if (updatedSms > 0) {
   smsValue = updatedSms;
  }
}
  function calculate() {

    var selectedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (selectedBtn){
        var item = selectedBtn.value
      }

  if (item === "call") {
    callsWithSettings += callValue;
  }
  if (item === "sms") {
    smsWithSettings += smsValue;
  }
  totalCalls.innerHTML = callsWithSettings.toFixed(2);
  totalSms.innerHTML = smsWithSettings.toFixed(2);
  var totalTotal = callsWithSettings + smsWithSettings;
  totalWithSettings.innerHTML = totalTotal.toFixed(2);
  }
  settingsAdd.addEventListener('click', calculate);



//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
