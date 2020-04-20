// spec.js
// Describe function adds a Test Suite
describe('Check browser methods', function () {

// it function adds a Test Case
  it('Should manage browser', function () {
    browser.ignoreSynchronization = true;
    browser.get("http://www.google.com");
    browser.manage().window().maximize();
    browser.sleep(3000);
    browser.refresh();
    browser.sleep(2000);
    browser.get("http://www.bbc.com");
    browser.sleep(1000);
    browser.navigate().back();
    browser.sleep(1000);
    browser.navigate().forward();
    browser.sleep(1000);
    browser.get("http://www.bbc.com");
    browser.getCurrentUrl().then(function (url) {
      console.log(url);
    })
    browser.getTitle().then(function (title) {
      console.log(title);
    })
  });

});
