var logger = require('./log');

describe("Validating the calculator app", function(){

    var expected_text;

    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        logger.log('info', 'Navigating to the Website');
    });

    afterEach(function(){
        console.log("afterEach Method")
    });

    it("validate 1 + 1 = 2", function(){
        var firstField = element(by.model("first"));
        var secondField = element(by.model("second"));
        var goButton = element(by.buttonText("Go!"));

        firstField.sendKeys(1);
        secondField.sendKeys(1);
        goButton.click();

        browser.sleep(2000);

        expected_text = element(by.binding("latest")).getText();
        expected_text.then(function(text){
            console.log("Result is: " + text);
            expect(parseInt(text)).toBe(2);
            logger.log('info', 'validate 1 + 1 = 2');
        });
    });

    it("validate 2 + 2 = 4", function(){
        var firstField = element(by.model("first"));
        var secondField = element(by.model("second"));
        var goButton = element(by.buttonText("Go!"));

        firstField.sendKeys(2);
        secondField.sendKeys(2);
        goButton.click();

        browser.sleep(2000);

        expected_text = element(by.binding("latest")).getText();
        expected_text.then(function(text){
            console.log("Result is: " + text);
            expect(parseInt(text)).toEqual(4);
            expect(parseInt(text)).not.toBe(10);
        });
    });
});
