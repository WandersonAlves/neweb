exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['no-sandbox']
        }
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
    },
    specs: ['tests/**/*.js']
};