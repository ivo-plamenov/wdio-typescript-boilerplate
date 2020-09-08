import UIComponent from './UIComponent';

export default class NavigationSlider extends UIComponent {
    constructor(name: string, private locator: string) {
        super(name);
    }

    selectItem(itemText: string): void {
        $(this.locator).waitForDisplayed();
        const menuElement = $(this.locator).$(`//a[text()="${itemText}"]`);
        menuElement.waitForClickable();
        menuElement.click();
        console.log(`Clicked on the ${this.name()} item with text "${itemText}"`);
    }
}