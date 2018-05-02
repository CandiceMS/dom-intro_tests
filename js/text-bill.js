
function textBillTotal(input){

  var calls = 0;
  var sms = 0;
  var totalCost = 0;

  function callsOnly(input){
    if (input === "call"){
        calls += 2.75;
    }
    return calls.toFixed(2);
  }

  function smsOnly(input) {
    if (input === "sms"){
        sms += 0.75;
    }
    return sms.toFixed(2);
  }

  function totalCallSms(calls,sms) {
    totalCost = calls + sms;
    return totalCost.toFixed(2);
  }
}
