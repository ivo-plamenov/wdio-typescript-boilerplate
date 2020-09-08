import UIComponent from "./UIComponent";
import { Element } from '@wdio/sync';

export default class PageElement extends UIComponent {
    constructor(name: string, private locator: string) {
        super(name);
    }

    displayedElement(): Element {
        $(this.locator).waitForDisplayed();
        return $(this.locator);
    }

    getText(): string {
        $(this.locator).waitForDisplayed();
        const elementText = $(this.locator).getText();
        console.log(`The text of element <${this.name()}> is "${elementText}"`);
        return elementText;
    }
}