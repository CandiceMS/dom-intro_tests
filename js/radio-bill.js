var addRadio = document.querySelector('.radioBillAddBtn');
var callsTwo = document.querySelector('.callTotalTwo');
var smsTwo = document.querySelector('.smsTotalTwo');
var totalBoth = document.querySelector('.totalTwo');

var callsOnly = 0;
var smsOnly = 0;

function radioBill(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    }
  if (billItemType === "call") {
    callsOnly += 2.75;
  }
  if (billItemType === "sms") {
    smsOnly += 0.75;
  }

  callsTwo.innerHTML = callsOnly.toFixed(2);
  smsTwo.innerHTML = smsOnly.toFixed(2);
  var totalRadio = callsOnly + smsOnly;
  totalBoth.innerHTML = totalRadio.toFixed(2);

  if (totalRadio >= 50){

      totalBoth.classList.add("danger");
  }
  else if (totalRadio >= 30){
      totalBoth.classList.add("warning");
  }
}
  addRadio.addEventListener('click', radioBill);
