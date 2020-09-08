import BasePage from "./Base.page";

class HelpPage extends BasePage {

    openPage(): HelpPage {
        super.open('/help.html');
        browser.pause(5000);
        return this;
    }
}

export default new HelpPage();