Feature: WebdriverIO Home Page

    As a test automation engineer,
    I want to have access to the main WebdriverIO documentation links from the home page
    so that I could find the information that could allow me to create a new automation project.

    Background: 
        Given I have opened the home page

    Scenario: Home Page should provide a quick "getting started" link
        When I click on the getting started button
        Then I should be taken to the getting started page
    
    Scenario: Home Page should allow access to the API documentation from the header slider
        When I select the API link from the navigation slider
        Then I should be taken to the API documentation page
    
    Scenario: Home Page should allow access to the current and past versions
        When I select the Versions link from the navigation bar
        Then I should see a link to the current version
        And I should see links to the previous versions