class LocatorStrategy {
    private constructor() {}

    static staticText(text: string): ChainablePromiseElement {
        return driver.isAndroid ? $(`//android.widget.TextView[@text="${text}"]`) : $(`//XCUIElementTypeStaticText[@name="${text}"]`)
    }
}

export default LocatorStrategy;