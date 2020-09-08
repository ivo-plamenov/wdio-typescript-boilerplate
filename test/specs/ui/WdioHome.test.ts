import WdioHome from 'src/pages/WdioHome.page';
import PostPage from 'src/pages/Post.page';
import VersionsPage from 'src/pages/Versions.page';
import { expect } from 'chai'; 

describe('WebdriverIO Home Page', () => {
    before(() => {
        WdioHome.openPage();
    });
    it('should provide a quick "getting started" link', () => {
        WdioHome.openGetStarted();
        expect(PostPage.getPageTitle()).to.equal('Getting Started');
    });
    it('should allow access to the API documentation from the header slider', () => {
        WdioHome.navigationSlider.selectItem('API');
        expect(PostPage.getPageTitle()).to.equal('API Docs');
    });
    it('should allow access to the current and past versions', () => {
        WdioHome.navigationSlider.selectItem('Versions');
        expect(VersionsPage.getCurrentVersion()).to.equal('v6');
        expect(VersionsPage.getPreviousVersions()).to.have.members(['v5', 'v4']);
    });
});