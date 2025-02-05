import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    /**
     * NOTE: This is just a placeholder and will be overwritten by each specific configuration
     */
    specs: [],
    /**
     * NOTE: This is just a place holder and will be overwritten by each specific configuration
     */
    capabilities: [],
    logLevel: 'debug',
    bail: process.env.APPIUM_BAIL || 0,
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    waitforTimeout: process.env.APPIUM_WAIT_FOR_TIMEOUT || 45_000,
    connectionRetryTimeout: process.env.APPIUM_CONNECTION_RETRY_TIMEOUT || 20_000,
    connectionRetryCount: process.env.APPIUM_CONNECTION_RETRY_COUNT || 3,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: process.env.APPIUM_TEST_TIMEOUT || 60_000
    }
};