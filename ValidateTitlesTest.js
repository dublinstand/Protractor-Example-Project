describe("Validate the Title from home page", function(){

    var title;

    beforeEach(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        title = browser.getTitle();
    });

    it("Enter the correct title", function(){

        title.then(function(text){
            console.log("First test with title: " + text);
            expect(text).toEqual("Protractor practice website - Banking App");
        });
    });

    it("Enter the incorrect title", function(){

        title.then(function(text){
            expect(text).toEqual("Protractor1 practice website - Calculator");
        });
    });
});
