function SettingsBill() {

var callsWithSettings = 0;
var smsWithSettings = 0;
var combinedTotal = 0;

var callValue = 0;
var smsValue = 0;
var warningValue = 0;
var criticalValue = 0;

//FUNCTIONS
function settings(callInput,smsInput,warningInput,criticalInput){

  callValue = parseFloat(callInput.value);
  smsValue = parseFloat(smsInput.value);
  warningValue = parseFloat(warningInput.value);
  criticalValue = parseFloat(criticalInput.value);
  return {
    callValue,
    smsValue,
    warningValue,
    criticalValue
  }
}

function calculate_Calls(callValue,selectedItem) {
    if (selectedItem === "call") {
      callsWithSettings += callValue;
    }
  }
  function calculatedCalls() {
    return callsWithSettings.toFixed(2);
  }

  function calculate_Sms(smsValue,selectedItem) {
    if (selectedItem === "sms") {
      smsWithSettings += smsValue;
    }
  }
  function calculatedSms() {
    return smsWithSettings.toFixed(2);
  }

  function calculate_Total() {
    combinedTotal = callsWithSettings + smsWithSettings;
  }
  function calculatedTotal() {
    return combinedTotal.toFixed(2);
  }

  return {
    settings,
    calculate_Calls,
    calculatedCalls,
    calculate_Sms,
    calculatedSms,
    calculate_Total,
    calculatedTotal
  }
}
