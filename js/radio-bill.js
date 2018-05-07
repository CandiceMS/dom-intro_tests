function RadioBill(billItemType){

  var callsOnly = 0;
  var smsOnly = 0;
  var totalRadio = 0;

function calculateCallSms(billItemType) {
  if (billItemType === "call") {
          callsOnly += 2.75;
       }
  if (billItemType === "sms") {
         smsOnly += 0.75;
       }
}
//    function callCalculate(billItemType) {
//      if (billItemType === "call") {
//        callsOnly += 2.75;
//      }
//    }
    function callsTotal() {
      return callsOnly.toFixed(2);
    }

//    function smsCalculate(billItemType) {
//      if (billItemType === "sms") {
//        smsOnly += 0.75;
//      }
//    }
    function smsTotal() {
      return smsOnly.toFixed(2);
    }
    function totalCalculate() {
      totalRadio = callsOnly + smsOnly;
    }
    function totalReturn(){
      return totalRadio.toFixed(2);
    }

    return {
  //    callCalculate,
      calculateCallSms,
      callsTotal,
  //    smsCalculate,
      smsTotal,
      totalCalculate,
      totalReturn
    }
  }
