import { Element } from '@wdio/sync';
import NavigationSlider from '../components/NavigationSlider';

export default class BasePage {
    get pageTitle():Element { return $('#__docusaurus'); }
    get navigationSlider(): NavigationSlider { return new NavigationSlider('Navigation Slider', '.slidingNav'); }

    open(path: string): void {
        browser.url(path);
        console.log(`Opened ${browser.getUrl()}`);
    }

    getPageTitle(): string {
        this.pageTitle.waitForDisplayed();
        const titleText = this.pageTitle.getText();
        console.log(`The displayed page title is "${titleText}"`);
        return titleText;
    }
}