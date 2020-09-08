import { Given, When, Then } from 'cucumber';
import WdioHome from '../pages/WdioHome.page';
import PostPage from '../pages/Post.page';
import VersionsPage from '../pages/Versions.page';
import { expect } from 'chai'; 

Given('I have opened the home page', () => {
    WdioHome.openPage();
});

When('I click on the getting started button', () => {
    WdioHome.openGetStarted();
});

When('I select the API link from the navigation slider', () => {
    WdioHome.navigationSlider.selectItem('API');
});

When('I select the Versions link from the navigation bar', () => {
    WdioHome.navigationSlider.selectItem('Versions');
});

Then('I should be taken to the getting started page', () => {
    expect(PostPage.getPageTitle()).to.equal('Getting Started');
});

Then('I should be taken to the API documentation page', () => {
    expect(PostPage.getPageTitle()).to.equal('API Docs');
});

Then('I should see a link to the current version', () => {
    expect(VersionsPage.getCurrentVersion()).to.equal('v6');
});

Then('I should see links to the previous versions', () => {
    expect(VersionsPage.getPreviousVersions()).to.have.members(['v5', 'v4']);
});