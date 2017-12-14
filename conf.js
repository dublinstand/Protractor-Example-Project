// conf.js
exports.config = {
  directConnect:true,
  capabilities: {
	  'browserName': 'chrome'
  },
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ValidateTitlesTest.js'],

  //Options to be passed to Jasmine
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //here we set up our allure report and where to store a screenshot after each test
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
        resultsDir: 'allure-results'
      }
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }
};