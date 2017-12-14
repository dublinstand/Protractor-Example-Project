describe("Locator testing By Repeater", function () {


    it("Adding few records in a table", function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        var firstField = element(by.model("first"));
        var secondField = element(by.model("second"));
        var goButton = element(by.id("gobutton"));

        firstField.sendKeys("5");
        secondField.sendKeys("7");
        goButton.click();

        firstField.sendKeys("4");
        secondField.sendKeys("6");
        goButton.click();
    });

    it("Print data from the first row", function () {

        console.log("Printing the first row data");

        var firstRow = element(by.repeater("result in memory").row(0));
        firstRow.getText().then(function (text) {
            console.log(text);
        });

    });

    it("Print data from first column in first row", function () {

        console.log("Printing the first column from the first row data");

        var firstRowFirstColumn = element(by.repeater("result in memory").row(0).column("result.timestamp"));
        firstRowFirstColumn.getText().then(function (text) {
            console.log(text);
        });
    });

    it("Print data for the entire table", function () {

        console.log("Printing the fthe entire tabl");

        var entireTable = element.all(by.repeater("result in memory"));
        entireTable.getText().then(function (text) {
            console.log(text);
        });
    });
});
