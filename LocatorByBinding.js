describe("Locator testing By Binding", function(){

    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
    });

    it("Validating a calculator", function(){

        var firstField = element(by.model("first"));
        var secondField = element(by.model("second"));
        var goButton = element(by.id("gobutton"));

        firstField.sendKeys(1);
        secondField.sendKeys(1);
        goButton.click();

        browser.sleep(2000);

        var expected_text = element(by.binding("latest")).getText();
        expected_text.then(function(text){
            console.log("Result is: " + text);
            expect(parseInt(text)).toBe(2);
        });
    });
});
