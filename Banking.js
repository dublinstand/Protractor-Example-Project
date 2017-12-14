describe("Test Automation of a banking app", function() {
	
	it("validate customer login", function() {
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		browser.manage().window().maximize();
		
		//We can click on a button, by passing its text with By.buttonText("value")
		element(By.buttonText("Customer Login")).click();
		browser.sleep(2000);
		
		//we verify that correct title is displayed
		expect(browser.getTitle()).toContain("Protractor practice");
		
		//get all elements from the drop down list
		element.all(by.css("#userSelect option")).then(function(items) {
			
			console.log("----printing values from dropdown list ----");
			console.log("Total values in dropdown are: " + items.length);			
			for (var i = 0; i < items.length; i++) {

				items[i].getText().then(function(text) {
					console.log(text);
				});				
			}
			
			console.log("----printing value attributes from dropdown list ----");
			for (var j = 0; j < items.length; j++) {
				
				items[j].getAttribute("value").then(function(text) {
					console.log(text);					
				});				
			}			
		});	
		
//		element(by.model("custId")).element(by.css("[value='2']")).click();
		element(by.model("custId")).$("[value='2']").click();
		browser.sleep(2000);
		
		element(by.buttonText("Login")).click();
		
//		element(by.binding("user")).getText().then(function(text) {
//			console.log(text);
//			expect(text).toBe("Harry Potter");			
//		});
		
		expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
	});
});