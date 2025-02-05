import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

const appVersion = process.env.APPIUM_APP_VERSION_ANDROID

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ["../tests/spec/android/**/*.spec.ts"],
    capabilities: [
        {
            platformName: "Android",
            "wdio:maxInstances": 1,
            "appium:deviceName": process.env.APPIUM_DEVICE_NAME_ANDROID,
            "appium:platformVersion": process.env.APPIUM_PLATFORM_VERSION_ANDROID,
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "apps", `Android.SauceLabs.Mobile.Sample.app.${appVersion}.apk`),
            "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity",
            "appium:newCommandTimeout": process.env.APPIUM_NEW_COMMAND_TIMEOUT || 240,
            "appium:webviewConnectTimeout": process.env.WEBVIEW_CONNECT_TIMEOUT || 5000
        },
    ],
};
