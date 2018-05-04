describe('Input and update values to calculate', function(){

    it('should return the calls total as R6.00 for 3 calls only', function(){

      var addCallValue = SettingsBill();

        addCallValue.calculate_Calls(2,'call');
        addCallValue.calculate_Calls(2,'call');
        addCallValue.calculate_Calls(2,'call');

    assert.equal(6.00, addCallValue.calculatedCalls());
    });

    it('should return the sms total as R4.00 for 4 sms only', function(){

      var addSmsValue = SettingsBill();

        addSmsValue.calculate_Sms(1,'sms');
        addSmsValue.calculate_Sms(1,'sms');
        addSmsValue.calculate_Sms(1,'sms');
        addSmsValue.calculate_Sms(1,'sms');

    assert.equal(4.00, addSmsValue.calculatedSms());
    });

    it('should return the grand total as R18.00 for 2 sms and 2 calls', function(){

      var addTotalValues = SettingsBill();

        addTotalValues.calculate_Calls(5,'call');
        addTotalValues.calculate_Calls(5,'call');
        addTotalValues.calculate_Sms(4,'sms');
        addTotalValues.calculate_Sms(4,'sms');

        addTotalValues.calculate_Total();

    assert.equal(18.00, addTotalValues.calculatedTotal());
    });
});
