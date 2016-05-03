exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['no-sandbox',
                   '--window-size=1000,1600']
        },
        specs: ['tests/web/**/*.js']
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
    },
    jasmineNodeOpts: {
        print: function () {}
    }
};