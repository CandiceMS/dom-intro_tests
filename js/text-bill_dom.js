function textBillDom(textBillTotal){
  var input = document.querySelector('.billTypeText');
  var addBtn = document.querySelector('.addToBillBtn');
  var callsTotal = document.querySelector('.callTotalOne');
  var smsTotal = document.querySelector('.smsTotalOne');
  var total = document.querySelector('.totalOne');

      callsTotal.innerHTML = textBillTotal[calls];
      smsTotal.innerHTML = textBillTotal[sms];
      total.innerHTML = textBillTotal[totalCost];

      if (total >= 50){

          total.classList.add("danger");
      }
      else if (total >= 30){
          total.classList.add("warning");
      }
}
addBtn.addEventListener('click', textBillDom);