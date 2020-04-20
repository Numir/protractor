// spec.js
// Describe function adds a Test Suite
describe('Check browser methods', function() {

    // it function adds a Test Case
    it('Should manage browser', function() {
        browser.ignoreSynchronization = true;

        browser.get("https://www.pluralsight.com");
        browser.manage().window().getSize() //ekran boyutu defult
            .then((size) => (console.log("Width:" + size.width + " Height:" + size.height)));

        browser.sleep(7000); //Ara
        browser.manage().window().setSize(1920, 1080); //boyutu değiştir 1920x1080
        browser.get("https://www.udemy.com");

        browser.sleep(7000); //Ara
        browser.manage().window().maximize(); //ekranı kapla
        browser.get("https://www.linkedin.com");

        browser.sleep(7000); //Ara
        browser.manage().window().setSize(1400, 800); //boyutu değiştir 1400x800        
        browser.get(" https://www.coursera.org");

        browser.getCurrentUrl().then(function(url) {
            console.log(url);
        })
        browser.getTitle().then(function(title) {
            console.log(title);
        })

        //biraz farklı fonksiyonlar.
        browser.refresh();
        browser.navigate().back();
        browser.sleep(1000);
        browser.navigate().forward();

        // browserı kapatıyoruz.
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        });



    });

});


/*

 browser.manage().window().maximize();
 
browser.driver.manage().window().maximize();

var x = 150;
var y = 100;
browser.driver.manage().window().setPosition(x, y);
*/