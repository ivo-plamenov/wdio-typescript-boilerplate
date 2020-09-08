import UIComponent from './UIComponent';

export default class Button extends UIComponent {
    constructor(name: string, private locator: string) {
        super(name);
    }

    click(): void {
        $(this.locator).waitForClickable();
        $(this.locator).click();
        console.log(`Clicked on the <${this.name()}> button.`);
    }
}