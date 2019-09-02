const { client } = require('nightwatch-cucumber')
const { After, Before, Given, Then, When } = require('cucumber')
var assert = require('assert');
const { dragAndDrop } = require('html-dnd').codeForSelectors;
var Page = client.page.PageObjects()
var MyTDate = new Date(); var dd = MyTDate.getDate(); var mm = Number(MyTDate.getMonth())+1; var yyyy = MyTDate.getFullYear();
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
Then(/^User successfully logged into Forsight$/, () => {
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

Given(/^User is on the home page$/, () => {
    //User logged in and is on the home page
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    return Page.waitForElementVisible('@Logo')
})

//Designs Screen
When(/^User navigates to design screen$/, () => {
    
    Page.waitForElementVisible('@ProcessManagementIcon', 30000)
    Page.click('@ProcessManagementIcon')    //navigating to the menu bar and selecting a screen
    client.pause(1000)
    Page.waitForElementVisible('@ProcessManagementText')
    Page.waitForElementVisible('@DesignsIcon', 30000)
    Page.click('@DesignsIcon')
    return Page.click('@DesignsIcon')
})
Then(/^User inputs design details and saves$/, () => {
    Page.waitForElementVisible('@AddDesignBtn').click('@AddDesignBtn')
    Page.waitForElementVisible('@DesignNameInput').setValue('@DesignNameInput', 'test_design_alex')
    Page.waitForElementVisible('@DescriptionBox').click('@DescriptionBox').setValue('@DescriptionBox', 'this is a test')
    // Whilst creating a new design inputting the details of its name, description and values
    client.pause(10000)
    return Page.waitForElementVisible('@Create_DesignBtn').click('@Create_DesignBtn') 
})
Then(/^User successfully created new design$/, () => {
    return Page.waitForElementVisible('@DesignUpdatedPopUp')
})
Then(/^User adds activities$/, () => {
    Page.waitForElementVisible('@NewActivityBtn').click('@NewActivityBtn')
    client.pause(5000)
    Page.click('@AddActivityBtn')
    client.pause(2000)
    Page.waitForElementVisible('@UploadActivity')
    client.pause(3000)
    Page.moveToElement('@UploadActivity', 0, 0)
    client.mouseButtonDown(0)
    Page.moveToElement('//*[@id="activity-diagram-component"]/svg', 40, 130)
    client.pause(3000)
    client.mouseButtonUp(0)
    client.pause(5000)
    Page.waitForElementVisible('@NewActivityBtn').click('@NewActivityBtn')
    client.pause(5000)
    Page.click('@AddActivityBtn')
    client.pause(10000)
    Page.waitForElementVisible('@NewActivityBtn').click('@NewActivityBtn')
    client.pause(5000)
    Page.click('@AddActivityBtn')
    client.pause(15000)
    return Page.waitForElementVisible('@SaveBtn').click('@SaveBtn')
})
Then(/^User updates upload activities$/, () => {
    Page.waitForElementVisible('@UploadTableDataActivity').click('@UploadTableDataActivity')
    client.pause(10000)
    Page.waitForElementVisible('@UploadSampleBtn').click('@UploadSampleBtn')
    client.pause(3000)
    Page.waitForElementVisible('@OutputTableNameInput').clearValue('@OutputTableNameInput')
    Page.waitForElementVisible('@OutputTableNameInput').setValue('@OutputTableNameInput', 'testAP')
    Page.waitForElementVisible('@OutputTableNameSaveBtn').click('@OutputTableNameSaveBtn')
    client.pause(3000)
    Page.waitForElementVisible('@SelectHeaderRowBtn').click('@SelectHeaderRowBtn')
    Page.waitForElementVisible('@SelectHeaderRowInput').setValue('@SelectHeaderRowInput', '1')
    Page.click('@ConfirmHeadRowBtn')
    client.pause(3000)
    Page.waitForElementVisible('@ConfirmSelectionBtn').click('@ConfirmSelectionBtn')
    client.pause(3000)
    Page.waitForElementVisible('@SaveBtn').click('@SaveBtn')
    return client.pause(3000)
})

//Entities Screen
Given(/^User is on the entities screen$/, () => {
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexanderoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    Page.waitForElementVisible('@Logo')
    Page.waitForElementVisible('@OrganisationSettingsIcon', 30000).click('@OrganisationSettingsIcon')
    client.pause(1000)
    Page.waitForElementVisible('@OrganisationSettingsText')
    Page.waitForElementVisible('@EntitiesIcon', 30000).click('@EntitiesIcon')
    return Page.click('@EntitiesIcon')
})
When(/^User creates new entity$/, () => {
    Page.waitForElementVisible('@AddBtn').click('@AddBtn')
    Page.click('@NewEntityBtn')
    Page.waitForElementVisible('@NewEntityNameInput').setValue('@NewEntityNameInput', 'Test_Entity')
    Page.waitForElementVisible('@NewEntitySaveBtn')
    return Page.click('@NewEntitySaveBtn')
})
Then(/^User has successfully created new entity$/, () => {
    Page.waitForElementVisible('@EntitiesTitle')
    return client.pause(2000)
})
When(/^User copies an entity$/, () => {
    Page.waitForElementVisible('@EntityDetailsBtn').click('@EntityDetailsBtn')
    client.pause(1000)
    Page.waitForElementVisible('@CopyEntityBtn').click('@CopyEntityBtn')
    Page.click('@CopyEntityBtn')
    client.pause(1000)
    Page.waitForElementVisible('@CopyBtn')
    return Page.click('@CopyBtn')
})
Then(/^User has successfully copied an entity$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})
When(/^User selects to hide an entity$/, () => {
    Page.waitForElementVisible('@EntityDetailsBtn').click('@EntityDetailsBtn')
    Page.waitForElementVisible('@HideEntityBtn')
    client.pause(1000)
    return Page.click('@HideEntityBtn')
})
Then(/^User has successfully hidden an entity$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})

//Periods screen 
Given(/^User is on the periods screen$/, () => {
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexanderoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    Page.waitForElementVisible('@Logo')
    Page.waitForElementVisible('@OrganisationSettingsIcon', 30000).click('@OrganisationSettingsIcon')
    client.pause(1000)
    Page.waitForElementVisible('@OrganisationSettingsText')
    Page.waitForElementVisible('@PeriodsIcon', 30000).click('@PeriodsIcon')
    return Page.click('@PeriodsIcon')
})
When(/^User creates new period$/, () => {
    Page.waitForElementVisible('@AddBtn').click('@AddBtn')
    Page.waitForElementVisible('@NewPeriodNameInput').setValue('@NewPeriodNameInput', 'test_Monthly')
    client.pause(5000)
    Page.waitForElementVisible('@SelectDateBtn').click('@SelectDateBtn')
    Page.click('@SelectDateBtn')
    Page.waitForElementVisible('@DateAug01').click('@DateAug01')
    Page.waitForElementVisible('@PrePopulateBtn').click('@PrePopulateBtn')
    Page.waitForElementVisible('@NewPeriodSaveBtn')
    return Page.click('@NewPeriodSaveBtn')
})
Then(/^User has successfully created new period$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})

//Users Screen
Given(/^User is on the users screen$/, () => {
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexanderoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    Page.waitForElementVisible('@Logo')
    Page.waitForElementVisible('@OrganisationSettingsIcon', 30000).click('@OrganisationSettingsIcon')
    client.pause(1000)
    Page.waitForElementVisible('@OrganisationSettingsText')
    Page.waitForElementVisible('@UsersIcon', 30000).click('@UsersIcon')
    return Page.click('@UsersIcon')    
})
When(/^User sends invitation link$/, () => {
    Page.waitForElementVisible('@AddBtn').click('@AddBtn')
    Page.waitForElementVisible('@EmailAddInput').setValue('@EmailAddInput', 'alexoyekola@gmail.com')
    Page.waitForElementVisible('@FullNameInput').setValue('@FullNameInput', 'Bob McTesting')
    Page.waitForElementVisible('@JobTitleInput').setValue('@JobTitleInput', 'Tester')
    Page.waitForElementVisible('@InvitationMessage').setValue('@InvitationMessage', 'Testing invite functionality')
    client.pause(3000)
    Page.waitForElementVisible('@InviteBtn')
    return Page.click('@InviteBtn')
})
Then(/^User has successfully invited a new user$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})
When(/^User attempts to hide a user$/, () => {
    Page.waitForElementVisible('@UserDetailsBtn').click('@UserDetailsBtn')
    Page.waitForElementVisible('@HideUserBtn')
    client.pause(1000)
    return Page.click('@HideUserBtn')
})
Then(/^User has successfully hidden a user$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})
When(/^User attempts to delete a user$/, () => {
    Page.waitForElementVisible('@UserDetailsBtn').click('@UserDetailsBtn')
    Page.waitForElementVisible('@DeleteUserBtn')
    client.pause(1000)
    return Page.click('@DeleteUserBtn')
})
Then(/^User has successfully deleted a user$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})

//User Groups
Given(/^User is on the user groups screen$/, () => {
    Page.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', 'alexanderoyekola@piccadillygroup.com')
    Page.waitForElementVisible('@ConfirmUsername').click('@ConfirmUsername')
    Page.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', 'Dragonfly1!')
    Page.click('@LoginBtn')
    Page.waitForElementVisible('@Logo')
    Page.waitForElementVisible('@OrganisationSettingsIcon', 30000).click('@OrganisationSettingsIcon')
    client.pause(1000)
    Page.waitForElementVisible('@OrganisationSettingsText')
    Page.waitForElementVisible('@UserGroupsIcon', 30000).click('@UserGroupsIcon')
    return Page.click('@UserGroupsIcon')    
})
When(/^User creates user group with members$/, () => {
    Page.waitForElementVisible('@AddBtn').click('@AddBtn')
    Page.waitForElementVisible('@UserGroupNameInput').setValue('@UserGroupNameInput', 'Test_Group')
    Page.waitForElementVisible('@AddMembersInput').setValue('@AddMembersInput', 'Lexi')
    Page.waitForElementVisible('@SuggestedName').click('@SuggestedName')
    Page.waitForElementVisible('@AddMembersBtn').click('@AddMembersBtn')
    Page.waitForElementVisible('@NewUserGroupSaveBtn')
    return Page.click('@NewUserGroupSaveBtn')
})
Then(/^User successfully created a new user group$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})
When(/^User opens a user group and deletes a user$/, () => {
    Page.waitForElementVisible('@UserGroupExm').click('@UserGroupExm')
    Page.waitForElementVisible('@DeleteUserDetailsBtn').click('@DeleteUserDetailsBtn')
    Page.waitForElementVisible('@UGDeleteUserBtn').click('@UGDeleteUserBtn')
    Page.waitForElementVisible('@NewUserGroupSaveBtn')
    return Page.click('@NewUserGroupSaveBtn')
})
Then(/^User successfully deleted a user within a user group$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})
When(/^User deletes a created user group$/, () => {
    Page.waitForElementVisible('@UserGroupExm').click('@UserGroupExm')
    Page.waitForElementVisible('@DeleteUserGroup')
    return Page.click('@DeleteUserGroup')
})
Then(/^User successfully deleted a user group$/, () => {
    return Page.waitForElementVisible('@SuccessfulMessage')
})

//TEST TO IMPLEMENT DRAG AND DROP
Given(/^User is on page$/, () => {
    return client.url("http://jqueryui.com/resources/demos/draggable/default.html")
})
Then(/^Drag and drop success$/, () => {
    client.useCss()
    Page.waitForElementVisible('#draggable', 5000);
    client.pause(5000)
    Page.moveToElement('#draggable', 0, 0)
    client.mouseButtonDown(0)
    Page.moveToElement('body', 200, 600) // Move to offset position of 200(x) 600(y)
    client.mouseButtonUp(0)
    return client.pause(5000)  // Keep browser open for 10 seconds so you can see result
})


//DRAG AND DROP ON AN ACTIVITY
/* 
client.useXpath()
Page.waitForElementVisible('//*[@id="activity-diagram-component"]/svg/g/g[2]/g[7]/rect', 10000)
client.pause(3000)
Page.moveToElement('//*[@id="activity-diagram-component"]/svg/g/g[2]/g[7]/rect', 0, 0)
client.mouseButtonDown(0)
Page.moveToElement('//*[@id="activity-diagram-component"]/svg', 40, 130)
client.pause(3000)
client.mouseButtonUp(0)
return client.pause(5000)
*/