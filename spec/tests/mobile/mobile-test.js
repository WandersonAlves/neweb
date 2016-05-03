beforeEach(function () {
    browser.get('http://localhost:8081/');
    browser.waitForAngular();
    if (element(by.id('btn-menu')).isPresent()) {
        element(by.id('btn-menu')).click().then(function () {
            if (element(by.id('sobre')).isPresent()) {
                element(by.id('sobre')).click().then(function () {browser.driver.sleep(2000);});
            }
        });
    }
}, 10000);

describe('Mobile tests', function () {
    it('About: when click about div, open the about div *duh*', function () {
        expect(element(by.css('#sobre-div')).getCssValue('display')).toEqual('block');
        browser.driver.sleep(2000);
    });

    it('About: when click about div, scroll the inner area', function () {
        browser.driver.executeScript("$('#sobre-div').scrollTop($('#sobre-div').prop('scrollHeight'));");
        browser.driver.sleep(2000);
        browser.driver.executeScript("$('#sobre-div').scrollTop(0);");
    });
});