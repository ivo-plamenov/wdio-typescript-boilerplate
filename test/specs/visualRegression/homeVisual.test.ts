import WdioHome from 'src/pages/WdioHome.page';
import { expect } from 'chai'; 

describe('Homepage Visual Regresison Test', () => {
    beforeEach(() => {
        WdioHome.openPage();
    });

    it('should display a logo on the home page', () => {
        expect(browser.checkElement(WdioHome.projectLogo.displayedElement(), 'homeLogo')).to.equal(0);
    });
    it('should display a project title on the home page', () => {
        expect(browser.checkElement(WdioHome.projectTitle.displayedElement(), 'projectTitle')).to.equal(0);
    });
    it('should preserve its page layout', () => {
        expect(browser.checkFullPageScreen('homePage')).to.equal(0);
    });
});