const { client } = require('nightwatch-cucumber')
const { After, Before, Given, Then, When, And, But } = require('cucumber')
 
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