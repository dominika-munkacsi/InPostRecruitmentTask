import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

const appVersion = process.env.APPIUM_APP_VERSION_iOS

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ["../tests/spec/ios/**/*.spec.ts"],
    capabilities: [
        {
            platformName: "iOS",
            "wdio:maxInstances": 1,
            "appium:deviceName": process.env.APPIUM_DEVICE_NAME_iOS,
            "appium:platformVersion": process.env.APPIUM_PLATFORM_VERSION_iOS,
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:app": join(process.cwd(), "apps", `iOS.Simulator.SauceLabs.Mobile.Sample.app.${appVersion}.zip`),
            "appium:newCommandTimeout": process.env.APPIUM_NEW_COMMAND_TIMEOUT || 240,
            "appium:webviewConnectTimeout": process.env.WEBVIEW_CONNECT_TIMEOUT || 5000
        },
    ],
};
