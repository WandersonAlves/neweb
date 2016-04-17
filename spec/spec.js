beforeEach(function () {
    browser.get('http://localhost:8080/');
    browser.manage().window().setSize(1600, 1000);
}, 10000);

describe('Protractor NEW.EB/ Testing Suite', function () {
    it('should have a title', function () {
        // NOTE Espera que o nome da pagina seja a descrita abaixo
        expect(browser.getTitle()).toEqual('GRUPO NEW.EB/');
        console.log("should have a title", "passed");
    });

    it('when click about div, open the about div *duh*', function () {
        if (element(by.id('sobre')).isPresent()) {
            element(by.id('sobre')).click().then(function () {
                expect(element(by.css('#sobre-div')).getCssValue('display')).toEqual('block');
                browser.driver.sleep(2000);
                console.log("when click about div, open the about div *duh*", "passed");
            });
        }
    });

    it('when click about div, scroll the inner area', function () {
        if (element(by.id('sobre')).isPresent()) {
            element(by.id('sobre')).click().then(function () {
                browser.driver.sleep(2000);
                browser.driver.executeScript("$('#sobre-div').scrollTop($('#sobre-div').prop('scrollHeight'));");
                browser.driver.sleep(2000);
                browser.driver.executeScript("$('#sobre-div').scrollTop(0);");
                console.log("when click about div, scroll the inner area", "passed");
            });
        }

    });
});