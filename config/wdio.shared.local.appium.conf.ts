import { config as baseConfig } from './wdio.shared.conf.js';

export const config = {
    ...baseConfig,
    services: [
        ...baseConfig.services || [],
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    log: './logs/appium.log',
                },
            },
        ],
    ],
    before: async ()=> {
        // Reduce the timeout for the Android's UiSelector locator strategy, so it will not wait for 10 seconds if it can't find an element
        if (driver.isAndroid){
            await driver.updateSettings({
                waitForSelectorTimeout: 3_000
            });
        }
    }
};