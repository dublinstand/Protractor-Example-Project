describe("Locator testing By Model", function(){

    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    });

    it("Automating User Reg form", function(){

        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("username");
        element(by.buttonText("Login")).click();

        browser.sleep(2000);

        var loginText = element(by.className("ng-scope")).getText();

        loginText.then(function(text){
            console.log(text);
            expect(text).toContain("Home");
        })
    });
});
