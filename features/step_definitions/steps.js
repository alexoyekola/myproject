const { client } = require('nightwatch-cucumber')
const { After, Before, Given, Then, When, And, But } = require('cucumber')
var dragAndDrop = require('html-dnd').codeForSelectors;
var Page = client.page.PageObjects()
var MyTDate = new Date(); var dd = MyTDate.getDate(); var mm = Number(MyTDate.getMonth())+1; var yyyy = MyTDate.getFullYear()
if(dd<10){ dd='0'+dd }
if(mm<10){ mm='0'+mm }
var MyYMDDate = yyyy+'-'+mm+'-'+dd; var MyDMYDate = dd+"-"+mm+"- "+yyyy
var FirstTime = 1

Before("@BaseURL", () => {
    client.url(client.launch_url)
})

// Login Testing
Given(/^User is on the login screen$/, () => {  
    return Page.waitForElementVisible('@UsernameInput')
})

When(/^User enters username: "([^"]*)" and password: "([^"]*)"$/, (username,password) => {  
    // Enter login credentials
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    return Page.click('@LoginBtn')
})
Then(/^User successfully logged into Forsight/, () => {
    return Page.waitForElementVisible('@Logo')
})
Then(/^User receives the error messages "([^"]*)" or "([^"]*)"$/, (usernameerror, passworderror) => {
    // Error Messages login
    if(!!usernameerror){
        return Page.waitForElementVisible('@LoginErrorMessageOne').assert.containsText('@LoginErrorMessageOne', usernameerror)
    }
    if(!!passworderror){
        return Page.waitForElementVisible('@LoginErrorMessageTwo').assert.containsText('@LoginErrorMessageTwo', passworderror)
    }
})

Given(/^User is on the home page/, () => {
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    return Page.waitForElementVisible('@Logo')
})
When(/^User navigates to design screen/, () => {
    Page.waitForElementVisible('@ProcessManagementIcon', 30000)
    Page.click('@ProcessManagementIcon')
    client.pause(1000)
    Page.waitForElementVisible('@ProcessManagementText')
    Page.waitForElementVisible('@DesignsIcon', 30000)
    Page.click('@DesignsIcon')
    return Page.click('@DesignsIcon')
})
Then(/^User inputs design details and saves/, () => {
    Page.waitForElementVisible('@AddDesignBtn').click('@AddDesignBtn')
    Page.waitForElementVisible('@DesignNameInput').setValue('@DesignNameInput', 'test_design_alex')
    Page.waitForElementVisible('@DescriptionBox').click('@DescriptionBox').setValue('@DescriptionBox', 'this is a test')
    client.pause(1000)
    return Page.waitForElementVisible('@Create_DesignBtn').click('@Create_DesignBtn') 
})
Then(/^User successfully created new design/, () => {
    return Page.waitForElementVisible('@DesignUpdatedPopUp')
})