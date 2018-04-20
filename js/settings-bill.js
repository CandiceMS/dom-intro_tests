//DOM ELEMENT REFERENCES:
// SETTINGS INPUTS
var callSet = document.querySelector('.callCostSetting');
var smsSet = document.querySelector('.smsCostSetting');
var warningSet = document.querySelector('.warningLevelSetting');
var criticalSet = document.querySelector('.criticalLevelSetting');

//BUTTONS TO UPDATE / CALCULATE
var settingsAdd = document.querySelector('.settingsAddBtn');
var update = document.querySelector('.updateSettings');

//TOTALS
var totalCalls = document.querySelector('.callTotalSettings');
var totalSms = document.querySelector('.smsTotalSettings');
var totalWithSettings = document.querySelector('.totalSettings')

//Global variables to store calculations from functions
var callsWithSettings = 0;
var smsWithSettings = 0;
var totalTotal = 0;

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
 function settings (){
   var updateCall = parseFloat(callSet.value);
   var updateSms = parseFloat(smsSet.value);
   var updateWarning = parseFloat(warningSet.value);
   var updateCritical = parseFloat(criticalSet.value);

   var selectedBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (selectedBtn){
      var selectedValue = selectedBtn.value
    }
   function calculateSettings() {
     if (selectedValue === "call") {
       callsWithSettings += updateCall;
     }
     if (selectedValue === "sms") {
       smsWithSettings += updateSms;
     }
     totalCalls.innerHTML = callsWithSettings.toFixed(2);
     totalSms.innerHTML = smsWithSettings.toFixed(2);
      totalTotal = callsWithSettings + smsWithSettings;
     totalWithSettings.innerHTML = totalTotal.toFixed(2);
   }

   function thresholds() {
     if (totalTotal) {

     }

   }

 }
 update.addEventListener('click', settings);
 settingsAdd.addEventListener('click', calculateSettings);
