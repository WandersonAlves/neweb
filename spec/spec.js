describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.get('http://localhost:8080/');
        // NOTE Espera que o nome da pagina seja a descrita abaixo
        expect(browser.getTitle()).toEqual('GRUPO NEW.EB/');
    });
    
    it('when click about div, open the about div *duh*', function () {
        browser.get('http://localhost:8080/');
        
        element(by.id('sobre')).click();
        // NOTE Espera que apos clicar no botao de 'sobre', a div de sobre esteja visivel
        expect(element(by.css('#sobre-div')).getCssValue('display')).toEqual('block');
    });
});