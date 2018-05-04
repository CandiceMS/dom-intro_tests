describe('Input text to calculate', function(){

    it('should return the calls total as R8.25 for 3 calls only', function(){

      var addCalls = TextBillTotal();

        addCalls.callsOnly('call');
        addCalls.callsOnly('call');
        addCalls.callsOnly('call');

    assert.equal(8.25, addCalls.returnCalls());
    });

    it('should return the sms total R3.00 for 4 sms only', function(){

      var addSms = TextBillTotal();

        addSms.smsOnly('sms');
        addSms.smsOnly('sms');
        addSms.smsOnly('sms');
        addSms.smsOnly('sms');

    assert.equal(3.00, addSms.returnSms());
    });

    it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){

      var addTotal = TextBillTotal();

        addTotal.callsOnly('call');
        addTotal.callsOnly('call');
        addTotal.smsOnly('sms');
        addTotal.smsOnly('sms');

        addTotal.totalCallSms();

    assert.equal(7.00, addTotal.returnTotal());
    });
});
