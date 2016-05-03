beforeEach(function () {
    browser.get('http://localhost:8081/');
    browser.manage().window().setSize(1600, 1000);
    browser.waitForAngular();
}, 10000);

describe('About section testing', function () {
    it('when click about div, open the about div *duh*', function () {
        if (element(by.id('sobre')).isPresent()) {
            element(by.id('sobre')).click().then(function () {
                expect(element(by.css('#sobre-div')).getCssValue('display')).toEqual('block');
                browser.driver.sleep(2000);
            });
        }
    });

    it('when click about div, scroll the inner area', function () {
        if (element(by.id('sobre')).isPresent()) {
            element(by.id('sobre')).click().then(function () {
                browser.driver.executeScript("$('#sobre-div').scrollTop($('#sobre-div').prop('scrollHeight'));");
                browser.driver.sleep(2000);
                browser.driver.executeScript("$('#sobre-div').scrollTop(0);");
            });
        }
    });
});