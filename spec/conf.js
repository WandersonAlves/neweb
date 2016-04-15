exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
    'browserName': 'chrome'
    },
    specs: ['spec.js']
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
