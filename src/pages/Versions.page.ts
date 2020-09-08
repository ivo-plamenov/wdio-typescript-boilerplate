import BasePage from './Base.page';
import PageElement from 'src/components/PageElement.component';
import { Element } from '@wdio/sync';

class Versions extends BasePage {
    get currentVerion(): PageElement { return new PageElement('Current version', 'article table:nth-child(3) td:nth-child(1)'); }
    get previousVersions(): Element[] { return $$('article table:nth-child(6) td:nth-child(1)'); }

    getCurrentVersion(): string {
        return this.currentVerion.getText();
    }

    getPreviousVersions(): string[] {
        browser.waitUntil(() => this.previousVersions.length > 0, {
            timeout: 20000,
            timeoutMsg: 'No previous versions were found after a timeout of 20 sec.'
        });
        let oldVersions: string[] = [];
        this.previousVersions.forEach(versionElement => oldVersions.push(versionElement.getText()));
        console.log(`Found the previous versions: ${oldVersions}`);
        return oldVersions;
    }
}

export default new Versions();