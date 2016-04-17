exports.config = {
    framework: 'mocha',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    mochaOpts: {
        reporter: 'spec',
        slow: 3000,
        enableTimeouts: false
    },
    specs: ['tests/**/*.js']
};

if (process.env.SNAP_CI) {
    exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}