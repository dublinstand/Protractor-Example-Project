var Objects = require('./Objects.json');
var using = require('jasmine-data-provider');

describe("Locator testing By Repeater", function () {

    beforeEach(function(){

        //because we test a non angular application we need to ignore the synchronization
        browser.ignoreSynchronization = true;
        browser.get(Objects.testsiteurl);
        console.log("Test site url is: " + Objects.testsiteurl);
    });

    using([{username:"FirstUsername"}, {username:"secondUserName"}], function(data){
        it("Validate user credentials from data provider", function () {
            console.log("This is the username: -?>" + data.username);
            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(data.username);
        });

    });

    function dataProvider() {
        return [
            {username: "FirstUsername"},
            {username: "secondUserName"}
        ]
    }
    using(dataProvider, function(data){
        it("Validate user credentials from data provider using a method", function () {
            console.log("This is the username: -?>" + data.username);
            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(data.username);
        });
    });

    it("Validate user credentials from JSON file", function () {
        element(by.xpath(Objects.locators.loginpage.username)).sendKeys(Objects.userdetails.username);
    });
});

