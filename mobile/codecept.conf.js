const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\Наташа\\Desktop\\codeceptJS\\apk\\app_debug-116643-84a20f.apk',
      platform: 'Android',
      device: 'ZC554KL',
      waitForTimeout: 5000,
      desiredCapabilities: {
        platformName: 'Android',
        platformVersion: '7.1.1',
        appPackage: 'dev.akat.filmreel',
        appActivity: 'com.akat.filmreel.ui.MainActivity',
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}