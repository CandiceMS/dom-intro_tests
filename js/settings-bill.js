//DOM ELEMENT REFERENCES:
// SETTINGS INPUTS ELEMENTS
var callSet = document.querySelector('.callCostSetting');
var smsSet = document.querySelector('.smsCostSetting');
var warningSet = document.querySelector('.warningLevelSetting');
var criticalSet = document.querySelector('.criticalLevelSetting');

//BUTTONS ELEMENTS TO UPDATE / CALCULATE
var settingsAdd = document.querySelector('.settingsAddBtn');
var updated = document.querySelector('.updateSettings');
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings');

//TOTALS ELEMENTS
var totalCalls = document.querySelector('.callTotalSettings');
var totalSms = document.querySelector('.smsTotalSettings');
var totalWithSettings = document.querySelector('.totalSettings');

//Global variables to store values/calculations from functions
var callsWithSettings = 0;
var smsWithSettings = 0;
var combinedTotal = 0;

var callValue = 0;
var smsValue = 0;
var warningValue = 0;
var criticalValue = 0;

//FUNCTIONS
function settings(){

  callValue = parseFloat(callSet.value);
  smsValue = parseFloat(smsSet.value);
  warningValue = parseFloat(warningSet.value);
  criticalValue = parseFloat(criticalSet.value);
}

function calculate() {

      console.log(warningValue);
      console.log(callValue);
      console.log(smsValue);

    var checkedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedBtn){
        var item = checkedBtn.value
      }

      if (combinedTotal >= criticalValue) {
        return;
      }

    if (item === "call") {
      callsWithSettings += callValue;
    }
    if (item === "sms") {
      smsWithSettings += smsValue;
    }

    combinedTotal = callsWithSettings + smsWithSettings;

    totalCalls.innerHTML = callsWithSettings.toFixed(2);
    totalSms.innerHTML = smsWithSettings.toFixed(2);
    totalWithSettings.innerHTML = combinedTotal.toFixed(2);

    if (combinedTotal >= criticalValue){
      totalWithSettings.classList.add("danger");
    }
    if (combinedTotal < criticalValue){
      totalWithSettings.classList.remove("danger");
    }

    if (combinedTotal >= warningValue){
      totalWithSettings.classList.add("warning");
    }
    if (combinedTotal < warningValue){
      totalWithSettings.classList.remove("warning");
    }
}
  updated.addEventListener('click', settings);
  settingsAdd.addEventListener('click', calculate);


//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
