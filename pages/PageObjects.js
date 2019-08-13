    // Page object library for Forsight
module.exports = {
    url: 'https://hellouat.forsight.online/auth',
    elements: {
// Login Page
        Logo: {selector: '#left-menu > div:nth-child(6) > img', locateStrategy: 'css selector'},
        UsernameInput: {selector: '#continueInput', locateStrategy: 'css selector'},
        PasswordInput: {selector: '#userExistsPassword', locateStrategy: 'css selector'},
        ConfirmUsername: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container.m-t-30 > div.col-12.m-t-24 > button', locateStrategy: 'css selector'},
        LoginBtn: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container > div > div:nth-child(4) > div > div > button', locateStrategy: 'css selector'},
// Navigation bar
        ProcessManagementIcon: {selector: '//*[@id="left-menu"]/ul/li[1]/img', locateStrategy: 'xpath'},
        ProcessManagementText: {selector: '//*[@id="left-menu"]/ul/li[1]/div[2]', locateStrategy: 'xpath'},
        DesignsIcon: {selector: '//*[@id="process-management-expandable"]/li[2]/div[1]', locateStrategy: 'xpath'},
// Designs Screen
        AddDesignBtn: {selector: 'body > app-root > div.main-content > div > account > div > div.row.m-t-40 > div > add-button.float-right.m-l-16.ng-star-inserted > div > div > div.add-button', locateStrategy: 'css selector'},
        DesignNameInput: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(2) > div.col-lg-7 > input', locateStrategy: 'css selector'},
        VariableTypeBtn: {selector: '//*[@id="5e14e7c5-ee9a-c1ba-7a08-4ad9d988db14"]/span/img', locateStrategy: 'xpath'},
        VariableNameInput: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(5) > div > process-definition-parameters > div > div:nth-child(2) > div:nth-child(4) > input', locateStrategy: 'css selector'},
        VariableValueInput: {selector: '#\38 53b0f7d-d3ff-2cf0-0351-8d3fef9ed978', locateStrategy: 'css selector'},
        TypeAttribute: {selector: '//*[@id="e0ae8fcc-5cd1-fab1-e2e8-c08be643691e"]/div[2]', locateStrategy: 'xpath'},
        DescriptionBox: {selector: '/html/body/app-root/div[2]/div/new-process-definition/div/div[3]/div/textarea', locateStrategy: 'xpath'},
        TypeValue: {selector: '#\38 2921faa-c4e5-8808-4687-e6ed09c37346 > div:nth-child(1)', locateStrategy: 'css selector'},
        Create_DesignBtn: {selector: 'body > app-root > div.main-content > div > new-process-definition > div > div:nth-child(8) > div.col-md-12.m-t-40 > button.form-btn.float-right.footer-btn-pos.m-l-24.ng-star-inserted', locateStrategy: 'css selector'},
        DesignUpdatedPopUp: {selector: 'body > div.cdk-visually-hidden', locateStrategy: 'css selector'},
        // Activity
        NewActivityBtn: {selector: '//*[@id="add-activity-btn"]/div/div/div', locateStrategy: 'xpath'},
        AddActivityBtn: {selector: '#add-activity-dropdown > div > div.body > button', locateStrategy: 'css selector'},
        }
}