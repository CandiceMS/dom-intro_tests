describe('Input text to calculate', function(){

    it('should return the calls total as R8.25 for 3 calls only', function(){
        assert.equal(textBillTotal((callsOnly)'call','call','call'), 'R8.25');
    });
    it('should return the sms total R3.00 for 4 sms only', function(){
        assert.equal(textBillTotal((smsOnly)'sms','sms','sms','sms'), 'R3.00');
    });
    it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){
        assert.equal(textBillTotal((totalCallSms)'sms','sms','call','call'), 'R7.00');
    });
});
