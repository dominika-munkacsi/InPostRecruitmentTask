# InPostRecruitmentTask

## Stack:
1. Appium
2. WebdriverIO
3. TypeScript

## How to run:
### Pre-install dependencies:
1. Appium
2. WebdriverIO
3. TypeScript
4. mocha
5. Plugins for XCUITest and UIAutomator2

### Setup environment variables:
   * **Mandatory:**
     * APPIUM_APP_VERSION_ANDROID - version of the Android application on which you are planning to run tests (f.e. 2.7.1).

       **NOTE: Binary files of the apps MUST be placed inside `{projectRoot}/apps/` folder. Both binaries for Android and iOS MUST follow naming convention: `Android.SauceLabs.Mobile.Sample.app.${appVersion}.apk` and `iOS.Simulator.SauceLabs.Mobile.Sample.app.${appVersion}.zip` accordingly.**
       
     * APPIUM_DEVICE_NAME_ANDROID - name of connected Android Device or Emulator on which You are planning to run Android tests (f.e. Pixel 7 Pro)
     * APPIUM_PLATFORM_VERSION_ANDROID - platform version of connected Android Device or Emulator on which You are planning to run Android tests (f.e. 15)

     * APPIUM_DEVICE_NAME_iOS -  name of connected iOS Device or Simulator on which You are planning to run iOS tests (f.e. iPhone SE (3rd generation)
     * APPIUM_PLATFORM_VERSION_iOS - platform version of connected iOS Device or Simulator on which You are planning to run Android tests (f.e. 15)
   
   * Optional:
       * APPIUM_NEW_COMMAND_TIMEOUT - value that will be passed to capabilities' `appium:newCommandTimeout`. Default value: 240
       * WEBVIEW_CONNECT_TIMEOUT - value that will be passed to capabilities' `appium:webviewConnectTimeout`. Default value: 5000
       * APPIUM_WAIT_FOR_TIMEOUT - maximum timeout (milliseconds) to wait for an element during test execution. Default value: 45_000
       * APPIUM_CONNECTION_RETRY_TIMEOUT - maximum timeout (milliseconds) to wait for retrying to connect to Appium server. Default value: 20_000
       * APPIUM_CONNECTION_RETRY_COUNT - maximum tries to retry to connect to Appium server. Default value: 3
       * APPIUM_TEST_TIMEOUT - maximum duration (milliseconds) of single test. Default value: 60_000
