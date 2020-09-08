import BasePage from './Base.page'
import Button from 'src/components/Button.component';
import PageElement from 'src/components/PageElement.component';

class WdioHome extends BasePage {
    get getStartedButton(): Button { return new Button('Get Started', '//a[text()="Get Started"]'); }
    get projectLogo(): PageElement { return new PageElement('Project Logo', '.projectLogo'); }
    get projectTitle(): PageElement { return new PageElement('Project Title', '.projectTitle'); }

    openPage(): WdioHome {
        super.open('/');
        return this;
    }

    openGetStarted(): void {
        this.getStartedButton.click();
    }
}

export default new WdioHome();