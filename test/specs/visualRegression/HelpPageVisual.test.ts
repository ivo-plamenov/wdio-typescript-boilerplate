import HelpPage from 'src/pages/Help.page';
import { expect } from 'chai'; 

describe('Help page Visual Regression Tests', () => {
    beforeEach(() => {
        HelpPage.openPage();
    });

    it('should preserve its tab order', () => {
        expect(browser.checkTabbablePage('helpPageTabOrder')).to.equal(0);
    });
});