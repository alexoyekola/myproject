const { client } = require('nightwatch-cucumber')
const { After, Before, Given, Then, When, And, But } = require('cucumber')
 
var SVPage = client.page.SVPageObjects()
var MyTDate = new Date(); var dd = MyTDate.getDate(); var mm = Number(MyTDate.getMonth())+1; var yyyy = MyTDate.getFullYear()
if(dd<10){ dd='0'+dd }
if(mm<10){ mm='0'+mm }
var MyYMDDate = yyyy+'-'+mm+'-'+dd; var MyDMYDate = dd+"-"+mm+"- "+yyyy
var FirstTime = 1

Before("@BaseURL", () => {
    client.url(client.launch_url)
})

// Home Page
Given(/^User is on home page$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')
    return SVPage.waitForElementVisible('@HomePageBtn')    
})

// Login Testing
Given(/^User is on the login screen$/, () => {  
    return SVPage.waitForElementVisible('@UsernameInput')
})
When(/^User successfully logs into 360sv$/, () => { 
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')
    return SVPage.waitForElementVisible('@HomePageBtn')
})
When(/^User successfully logs into 360sv as admin$/, () => { 
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "admin")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "Admin123!")
    SVPage.click('@LoginBtn')
    return SVPage.waitForElementVisible('@HomePageBtn')
})

// Login Testing
Then(/^User logs into 360sv$/, () => { 
    // Successful Login
    return SVPage.waitForElementVisible('@HomePageBtn')
})
When(/^User enters username: "([^"]*)" and password: "([^"]*)"$/, (username,password) => {  
    // Enter login credentials
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', username)
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', password)
    return SVPage.click('@LoginBtn')
})

// Login Testing
Then(/^User is on the login screen again$/, () => {  
    return SVPage.waitForElementVisible('@UsernameInput')
})
Then(/^User receives the error messages "([^"]*)" or "([^"]*)"$/, (usernameerror, passworderror) => {
    // Error Messages login
    if(!!usernameerror){
        return SVPage.waitForElementVisible('@LoginErrorMessageOne').assert.containsText('@LoginErrorMessageOne', usernameerror)
    }
    if(!!passworderror){
        return SVPage.waitForElementVisible('@LoginErrorMessageTwo').assert.containsText('@LoginErrorMessageTwo', passworderror)
    }
})

// Client Matching
Given(/^User is on client matching screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@ClientManagement').click('@ClientManagement')
    SVPage.waitForElementVisible('@ClientMatching')
    return SVPage.click('@ClientMatching')
})
When(/^User sets status to unmatched and chooses source$/, () => {
    SVPage.waitForElementVisible('@CMStatusDropDown').click('@CMStatusDropDown')
    SVPage.waitForElementVisible('@CMStatusUnmatched').click('@CMStatusUnmatched')
    SVPage.waitForElementVisible('@CMSourceInput').setValue('@CMSourceInput', "Ian")
    return SVPage.click('@SearchBtn')
})
When(/^User sets status to pending and chooses source$/, () => {
    SVPage.waitForElementVisible('@CMStatusDropDown').click('@CMStatusDropDown')
    SVPage.waitForElementVisible('@CMStatusUnmatched').click('@CMStatusUnmatched')
    SVPage.waitForElementVisible('@CMSourceInput').setValue('@CMSourceInput', "Ian")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@CMTakeBtn').click('@CMTakeBtn')
    SVPage.waitForElementVisible('@CMSaveBtn').click('@CMSaveBtn')
    SVPage.waitForElementVisible('@CMStatusDropDown').click('@CMStatusDropDown')
    SVPage.waitForElementVisible('@CMStatusPending').click('@CMStatusPending')
    return SVPage.click('@SearchBtn')
})
Then(/^User approves pending match successfully$/, () => {
    SVPage.waitForElementVisible('@CMPendingApproveBtn').click('@CMPendingApproveBtn')
    SVPage.waitForElementVisible('@CMSaveBtn2')
    return SVPage.click('@CMSaveBtn2')
})
Then(/^User denies pending match successfully$/, () => {
    SVPage.waitForElementVisible('@CMPendingDenyBtn').click('@CMPendingDenyBtn')
    SVPage.waitForElementVisible('@CMSaveBtn2')
    return SVPage.click('@CMSaveBtn2')
})
Then(/^User chooses match and selects take$/, () => {
    SVPage.waitForElementVisible('@CMTakeBtn').click('@CMTakeBtn')
    SVPage.waitForElementVisible('@CMSaveBtn')
    return SVPage.click('@CMSaveBtn')
})
Then(/^User successfully client matched source$/, () => {
    SVPage.waitForElementVisible('@CMStatusDropDown').click('@CMStatusDropDown')
    SVPage.click('@CMStatusDropDown')
    SVPage.waitForElementVisible('@CMStatusPending').click('@CMStatusPending')
    SVPage.waitForElementVisible('@CMSourceInput')
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@CMDenyBtn').click('@CMDenyBtn')
    SVPage.waitForElementVisible('@CMSaveBtn2')
    return SVPage.click('@CMSaveBtn2')
})
When(/^User uses filter options CM$/, () => {
    SVPage.waitForElementVisible('@CMStatusDropDown').click('@CMStatusDropDown')
    SVPage.waitForElementVisible('@CMStatusPending').click('@CMStatusPending')
    SVPage.waitForElementVisible('@CMSourceInput').setValue('@CMSourceInput', "hfb")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@CMTargetClientInput').setValue('@CMTargetClientInput', "DEMnu3YYAAY -> UP: Brown Shipley -> ")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@CMSourcePostalInput').setValue('@CMSourcePostalInput', "NE2 1TL")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@CMTargetPostalInput').setValue('@CMTargetPostalInput', "113007")
    return SVPage.click('@SearchBtn')
})

// Product Matching
Given(/^User is on product matching screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@ProductManagement').click('@ProductManagement')
    SVPage.waitForElementVisible('@ProductMatching').click('@ProductMatching')
    return SVPage.click('@ProductMatching')
})
When(/^User sets status and selects product$/, () => {
    SVPage.waitForElementVisible('@PMStatusDropDown').click('@PMStatusDropDown')
    SVPage.waitForElementVisible('@PMStatusUnmatched').click('@PMStatusUnmatched')
    return SVPage.waitForElementVisible('@PMProductName').click('@PMProductName')
})
Then(/^User edits product details$/, () => {
    SVPage.waitForElementVisible('@PMEditBtn').click('@PMEditBtn')
    SVPage.waitForElementVisible('@PMProductInput').setValue('@PMProductInput', "ISIN.GY99Y7Q95F97 ->  World Improvement Fund R   GBP Inc -> (ISIN: AY99Y7Q95F97)")
    SVPage.waitForElementVisible('@PMTakeBtn').click('@PMTakeBtn')
    SVPage.waitForElementVisible('@PMSaveBtn').click('@PMSaveBtn')
    SVPage.click('@PMSaveBtn')
    SVPage.waitForElementVisible('@PMCloseBtn').click('@PMCloseBtn')
    SVPage.click('@PMCloseBtn')
    return SVPage.click('@PMCloseBtn')
})
Then(/^User successfully saved product match$/, () => {
    SVPage.waitForElementVisible('@PMDenyBtn').click('@PMDenyBtn')
    SVPage.click('@PMDenyBtn')
    SVPage.click('@PMDenyBtn2')
    SVPage.waitForElementVisible('@PMOKBtn').click('@PMOKBtn')
    return SVPage.click('@PMOKBtn')
})

// Input Management
Given(/^User is on input management screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@InputManagement')
    return SVPage.click('@InputManagement')
})
Given(/^User has located source file with status Not Loaded$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@InputManagement').click('@InputManagement')
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Not Loaded")
})
When(/^User reloads the file$/, () => {
    SVPage.waitForElementVisible('@ActionsDropDrown').click('@ActionsDropDrown')
    SVPage.waitForElementVisible('@ReloadOption')
    return SVPage.click('@ReloadOption')
})
Then(/^User has successfully re-loaded a Not Loaded file$/, () => {
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@ProcessingQueue')
    return SVPage.click('@ProcessingQueue')
})
When(/^User locates a source with a flow file present and filters to that source$/, () => {
    SVPage.waitForElementVisible('@SourceInput').setValue('@SourceInput', "Aegon")
    SVPage.waitForElementVisible('@SearchBtn')
    return SVPage.click('@SearchBtn')
})
Then(/^User selects a transaction type; changes and saves it$/, () =>{
    SVPage.waitForElementVisible('@TransTypeBtn').click('@TransTypeBtn')
    SVPage.click('@TransTypeBtn')
    SVPage.waitForElementVisible('@BuyAssetDropDown').click('@BuyAssetDropDown')
    SVPage.waitForElementVisible('@ExcludeDD1').click('@ExcludeDD1')
    SVPage.waitForElementVisible('@TransTypeSaveBtn').click('@TransTypeSaveBtn')
    SVPage.click('@TransTypeSaveBtn')
    SVPage.waitForElementVisible('@TransTypeConfirmBtn').click('@TransTypeConfirmBtn')
    SVPage.click('@TransTypeConfirmBtn')
    SVPage.waitForElementVisible('@TransTypeCloseBtn')
    return SVPage.click('@TransTypeCloseBtn')
})
Then(/^User successfully amended transaction type$/, () => {
    SVPage.waitForElementVisible('@TransTypeBtn').click('@TransTypeBtn')
    SVPage.click('@TransTypeBtn')
    return SVPage.waitForElementVisible('@BuyAssetDropDown').assert.containsText('@BuyAssetDropDown', "EXCLUDE")
})
When(/^User uses filter options IM$/, () => {
    SVPage.waitForElementVisible('@SourceInput').setValue('@SourceInput', "Aegon")
    SVPage.waitForElementVisible('@SearchBtn').click('@SearchBtn')
    SVPage.waitForElementVisible('@FileNameInput').setValue('@FileNameInput', "9101361_Bestand_28.02.2018.xls")
    SVPage.waitForElementVisible('@SearchBtn').click('@SearchBtn')
    SVPage.waitForElementVisible('@StatusDropDown').click('@StatusDropDown')
    SVPage.waitForElementVisible('@StatusNotDone').click('@StatusNotDone')
    SVPage.waitForElementVisible('@SearchBtn').click('@SearchBtn')
    SVPage.waitForElementVisible('@PeriodInputStart').setValue('@PeriodInputStart', "25/12/2020")
    SVPage.waitForElementVisible('@PeriodInputEnd').setValue('@PeriodInputEnd', "30/12/2020")
    SVPage.waitForElementVisible('@SearchBtn')
    return SVPage.click('@SearchBtn')
})
Then(/^User successfully used filters$/, () => {
    return SVPage.waitForElementVisible('@SearchBtn')
})
When(/^User uses sort options IM$/, () => {
    SVPage.waitForElementVisible('@StatusColumn').click('@StatusColumn')
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Loaded")
    SVPage.waitForElementVisible('@SourceColumn').click('@SourceColumn')
    SVPage.waitForElementVisible('@SourceField').assert.containsText('@SourceField', "Aegon", "null")
    SVPage.waitForElementVisible('@FileNameColumn').click('@FileNameColumn')
    SVPage.waitForElementVisible('@FileNameField').assert.containsText('@FileNameField', "FM Data_0118.xlsx")
    SVPage.waitForElementVisible('@DataTypeColumn').click('@DataTypeColumn')
    SVPage.waitForElementVisible('@DataTypeField').assert.containsText('@DataTypeField', "PL_AUM", "PL_AUM")
    SVPage.waitForElementVisible('@DateColumn').click('@DateColumn')
    SVPage.waitForElementVisible('@DateField').assert.containsText('@DateField', "2018-01-31", "2019-02-28")
    SVPage.waitForElementVisible('@LoadingOKColumn').click('@LoadingOKColumn')
    SVPage.waitForElementVisible('@LoadingOKField').assert.containsText('@LoadingOKField', "2,330")
    SVPage.waitForElementVisible('@LoadingRejectedColumn').click('@LoadingRejectedColumn')
    SVPage.waitForElementVisible('@LoadingRejectedField').assert.containsText('@LoadingRejectedField', "0")
    return SVPage.waitForElementVisible('@SearchBtn')
})
Then(/^User successfully used sorts$/, () => {
    return SVPage.waitForElementVisible('@SearchBtn')
})
When(/^User locates source file with status Loaded and marks as done$/, () => {
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Loaded")
    SVPage.waitForElementVisible('@ActionsDropDrown').click('@ActionsDropDrown')
    SVPage.waitForElementVisible('@MarkDone')
    return SVPage.click('@MarkDone')
})
Then(/^User successfully changed status to done$/, () => {
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Done", "null")
    return SVPage.waitForElementVisible('@StatusField')
})
When(/^User locates source file with status Done and marks as not done$/, () => {
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Done")
    SVPage.waitForElementVisible('@ActionsDropDrown').click('@ActionsDropDrown')
    SVPage.waitForElementVisible('@MarkNotDone')
    return SVPage.click('@MarkNotDone')
})
Then(/^User successfully changed status to not done$/, () => {
    SVPage.waitForElementVisible('@StatusField').assert.containsText('@StatusField', "Loaded", "null")
    return SVPage.waitForElementVisible('@StatusField')
})
When(/^User clicks number on products column$/, () => {
    SVPage.waitForElementVisible('@ProductsField')
    return SVPage.click('@ProductsField')
})
Then(/^User is successfully on product matching screen$/, () => {
    return SVPage.waitForElementVisible('@PMStatusDropDown')
})
When(/^User clicks number on clients column$/, () => {
    SVPage.waitForElementVisible('@ClientsField')
    return SVPage.click('@ClientsField')
})
Then(/^User is successfully on client matching screen$/, () => {
    return SVPage.waitForElementVisible('@CMStatusDropDown')
})
When(/^User clicks number on rejections column$/, () => {
    SVPage.waitForElementVisible('@LoadingRejectedField')
    return SVPage.click('@LoadingRejectedField')
})
Then(/^Pop out window successfully appears for rejected column$/, ()  => {
    SVPage.waitForElementVisible('@LoadingRejectedPopOutCloseBtn')
    return SVPage.click('@LoadingRejectedPopOutCloseBtn')
})
When(/^User clicks number on alerts column$/, () => {
    SVPage.waitForElementVisible('@LoadingAlertsField')
    return SVPage.click('@LoadingAlertsField')
})
Then(/^Pop out window successfully appears for alerts column$/, () => {
    SVPage.waitForElementVisible('@LoadingAlertsPopOutCloseBtn')
    return SVPage.click('@LoadingAlertsPopOutCloseBtn')
})

// Audit Trail
Given(/^User is on audit trail screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@AuditTrail')
    return SVPage.click('@AuditTrail')
})
When(/^User uses filter options AT$/, () => {
    SVPage.waitForElementVisible('@SourceDropDown2').click('@SourceDropDown2')
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@DateInputStart').setValue('@DateInputStart', "01/01/2018")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@DateInputEnd').setValue('@DateInputEnd', "01/04/2018")
    SVPage.waitForElementVisible('@PNLItemDropDown4').click('@PNLItemDropDown4')
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@ClientSourceNameInput').setValue('@ClientSourceNameInput', "00000 | Bankhaus Metzler -> Bankhaus Metzler")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@ClientTargetNameInput').setValue('@ClientTargetNameInput', "DEMnuA9IAAU -> Vereinigte Volksbank AG") 
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@ProductSourceNameInput').setValue('@ProductSourceNameInput', "AY9939933399 ->  World Leaders Fund A   GBP Acc")
    SVPage.click('@SearchBtn')
    SVPage.waitForElementVisible('@ProductTargetNameInput').setValue('@ProductTargetNameInput', "ISIN.GY9937839583 -> Improvement Fund  A GBP Acc") 
    return SVPage.click('@SearchBtn')
})
Then(/^User successfully renders different screen pages$/, () => {
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@InputManagement').click('@InputManagement')
    SVPage.waitForElementVisible('@ClientManagement').click('@ClientManagement')
    SVPage.waitForElementVisible('@ClientMatching').click('@ClientMatching')
    SVPage.waitForElementVisible('@ProductManagement').click('@ProductManagement')
    SVPage.waitForElementVisible('@ProductMatching').click('@ProductMatching')
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@ProviderList').click('@ProviderList')
    SVPage.waitForElementVisible('@Settings').click('@Settings')
    SVPage.waitForElementVisible('@ManageAccount').click('@ManageAccount')
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@AuditTrail').click('@AuditTrail')
    SVPage.waitForElementVisible('@HomePageIcon')
    return SVPage.click('@HomePageIcon')
})

// Manage Account
Then(/^User changes Password$/, () => {
    SVPage.waitForElementVisible('@Settings').click('@Settings')
    SVPage.waitForElementVisible('@ManageAccount').click('@ManageAccount')
    SVPage.waitForElementVisible('@ChangeBtn').click('@ChangeBtn')
    SVPage.waitForElementVisible('@NewPasswordInput').setValue('@NewPasswordInput', "P@ssword1")
    SVPage.waitForElementVisible('@ConfirmNewPasswordInput').setValue('@ConfirmNewPasswordInput', "P@ssword1")    
    SVPage.waitForElementVisible('@ChangePasswordBtn')
    return SVPage.click('@ChangePasswordBtn')
})
Then(/^User successfully changed passsword$/, () => {
    SVPage.waitForElementVisible('@ChangePasswordMessage').assert.containsText('@ChangePasswordMessage', "Your password has been changed.")
    SVPage.waitForElementVisible('@ChangeBtn').click('@ChangeBtn')
    SVPage.waitForElementVisible('@NewPasswordInput').setValue('@NewPasswordInput', "P@ssw0rd")
    SVPage.waitForElementVisible('@ConfirmNewPasswordInput').setValue('@ConfirmNewPasswordInput', "P@ssw0rd")    
    SVPage.waitForElementVisible('@ChangePasswordBtn')
    return SVPage.click('@ChangePasswordBtn')
})

// Provider List Screen
Given(/^User is on provider list screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@QualityAudit').click('@QualityAudit')
    SVPage.waitForElementVisible('@ProviderList')
    return SVPage.click('@ProviderList')    
})
When(/^User selects edit action on provider$/, () => {
    SVPage.waitForElementVisible('@PLActionBtn').click('@PLActionBtn')
    SVPage.waitForElementVisible('@PLEditBtn')
    return SVPage.click('@PLEditBtn')
})
Then(/User enters unmatched: "([^"]*)" and true-up: "([^"]*)"$/, (unmatched,trueup) => {
    SVPage.waitForElementVisible('@DefaultUnmatchedInput').clearValue('@DefaultUnmatchedInput')
    SVPage.waitForElementVisible('@DefaultUnmatchedInput').setValue('@DefaultUnmatchedInput', unmatched)
    SVPage.waitForElementVisible('@DefaultTrueUpInput').clearValue('@DefaultTrueUpInput')
    SVPage.waitForElementVisible('@DefaultTrueUpInput').setValue('@DefaultTrueUpInput', trueup)
    return SVPage.click('@PLEditSaveBtn')
})
Then(/^User receives the error messages on pop up "([^"]*)" or "([^"]*)"$/, (unmatchederror, trueuperror) => {
    // Error Messages login
    if(!!unmatchederror){
        return SVPage.waitForElementVisible('@DefaultUnmatchedErrorMessage').assert.containsText('@DefaultUnmatchedErrorMessage', unmatchederror)
    }
    if(!!trueuperror){
        return SVPage.waitForElementVisible('@DefaultTrueUpErrorMessage').assert.containsText('@DefaultTrueUpErrorMessage', trueuperror)
    }
})
Then(/^User receives invalid id error messages on pop up "([^"]*)" or "([^"]*)"$/, (unmatchederror, trueuperror) => {
    // Error Messages login
    if(!!unmatchederror){
        return SVPage.waitForElementVisible('@DefaultUnmatchedErrorMessage2').assert.containsText('@DefaultUnmatchedErrorMessage2', unmatchederror)
    }
    if(!!trueuperror){
        return SVPage.waitForElementVisible('@DefaultTrueUpErrorMessage2').assert.containsText('@DefaultTrueUpErrorMessage2', trueuperror)
    }
})

// Fiscal Period Management Screen
When(/^User navigates to fiscal period management Screen$/, () => {
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@FiscalPeriod')
    return SVPage.click('@FiscalPeriod')
})
Then(/^User successfully on fiscal period screen$/, () => {
    return SVPage.waitForElementVisible('@SelectDatePeriod')
})
Then(/^User successfully closes fiscal period$/, () => {
    SVPage.waitForElementVisible('@FiscalDateCalendar').click('@FiscalDateCalendar')
    SVPage.waitForElementVisible('@CommentBoxClose').setValue('@CommentBoxClose', "N/A")
    SVPage.waitForElementVisible('@FPClosePeriodSaveBtn').click('@FPClosePeriodSaveBtn')
    SVPage.waitForElementVisible('@FPConfirmCloseSave')
    return SVPage.click('@FPConfirmCloseSave')
})
Then(/^User cancels closing fiscal period$/, () => {
    SVPage.waitForElementVisible('@FiscalDateCalendar').click('@FiscalDateCalendar')
    SVPage.waitForElementVisible('@FPClosePeriodCancelBtn')
    return SVPage.click('@FPClosePeriodCancelBtn')    
})
Then(/^User successfully reopens fiscal period$/, () => {
    SVPage.waitForElementVisible('@FiscalDateCalendar').click('@FiscalDateCalendar')
    SVPage.waitForElementVisible('@FPReopenPeriodSaveBtn').click('@FPReopenPeriodSaveBtn')
    SVPage.waitForElementVisible('@CommentBoxReOp').setValue('@CommentBoxReOp', "Reopening fiscal period to test functionality")  
    SVPage.waitForElementVisible('@FPConfirmReOpSave')
    return SVPage.click('@FPConfirmReOpSave')
})
Then(/^User cancels reopening fiscal period$/, () => {
    SVPage.waitForElementVisible('@FiscalDateCalendar').click('@FiscalDateCalendar')
    SVPage.waitForElementVisible('@FPReopenPeriodCancelBtn')
    return SVPage.click('@FPReopenPeriodCancelBtn')    
})

// Processing Queue Screen
Given(/^User is on the processing queue$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@ProcessingQueue')
    return SVPage.click('@ProcessingQueue')
})
When(/^User navigates to processing queue screen$/, () => {
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@ProcessingQueue')
    return SVPage.click('@ProcessingQueue')
})
When(/^User cancels new upload of source file$/, () => {
    SVPage.waitForElementVisible('@JobCancel')
    return SVPage.click('@JobCancel')
})
Then(/^User confirms jobs queue is present$/, () => {
    return SVPage.waitForElementVisible('@JobsQueue')
})

// Jobs Screen
Given(/^User is on jobs screen$/, () => {
    SVPage.waitForElementVisible('@UsernameInput').setValue('@UsernameInput', "AlexO")
    SVPage.waitForElementVisible('@PasswordInput').setValue('@PasswordInput', "P@ssw0rd")
    SVPage.click('@LoginBtn')   
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@Jobs').click('@Jobs')
    return SVPage.waitForElementVisible('@GenerateClientMatches')
})
Given(/^User navigates to jobs screen$/, () => {
    SVPage.waitForElementVisible('@Production').click('@Production')
    SVPage.waitForElementVisible('@Jobs').click('@Jobs')
    return SVPage.waitForElementVisible('@GenerateClientMatches')
})
When(/^User generates client matches to run ASAP$/, () => {
    SVPage.waitForElementVisible('@GenerateClientMatches').click('@GenerateClientMatches')
    SVPage.waitForElementVisible('@RunASAP')
    return SVPage.click('@RunASAP')
})
When(/^User generates client matches to be queued$/, () => {
    SVPage.waitForElementVisible('@GenerateClientMatches').click('@GenerateClientMatches')
    SVPage.waitForElementVisible('@AddToQueue')
    return SVPage.click('@AddToQueue')
})
Then(/^User successfully generated client matches$/,() => {
    return SVPage.waitForElementVisible('@cancelJob')
})
Then(/^User successsfully rescanned input directory$/, () => {
    return SVPage.waitForElementVisible('@cancelJob')
})
Then(/^User successfully uploaded sources$/, () => {
    return SVPage.waitForElementVisible('@cancelJob')
})
Then(/^User successfully completed Backend run$/, () => {
    return SVPage.waitForElementVisible('@cancelJob')
})
Then(/^User successfully completed full run$/, () => {
    return SVPage.waitForElementVisible('@cancelJob')
})
When(/^User rescans input directory to run ASAP$/, () => {
    SVPage.waitForElementVisible('@RescanInputDirectory').click('@RescanInputDirectory')
    SVPage.waitForElementVisible('@RunASAP')
    return SVPage.click('@RunASAP')
})
When(/^User rescans input directory to be queued$/, () => {
    SVPage.waitForElementVisible('@RescanInputDirectory').click('@RescanInputDirectory')
    SVPage.waitForElementVisible('@AddToQueue')
    return SVPage.click('@AddToQueue')
})
When(/^User uploads sources to run ASAP$/, () => {
    SVPage.waitForElementVisible('@UploadSources').click('@UploadSources')
    SVPage.waitForElementVisible('@RunASAP')
    return SVPage.click('@RunASAP')
})
When(/^User uploads sources to be queued$/, () => {
    SVPage.waitForElementVisible('@UploadSources').click('@UploadSources')
    SVPage.waitForElementVisible('@AddToQueue')
    return SVPage.click('@AddToQueue')
})
When(/^User does Backend run to be run ASAP$/, () => {
    SVPage.waitForElementVisible('@BackendRun').click('@BackendRun')
    SVPage.waitForElementVisible('@RunASAP').click('@RunASAP')
    SVPage.waitForElementVisible('@StartDate').clearValue('@StartDate')
    SVPage.waitForElementVisible('@StartDate').setValue('@StartDate', "2019-01-20")
    SVPage.waitForElementVisible('@EndDate').clearValue('@EndDate')
    SVPage.waitForElementVisible('@EndDate').setValue('@EndDate', "2019-09-26")
    SVPage.waitForElementVisible('@RunJob')
    return SVPage.click('@RunJob')
})
When(/^User does Backend run to be queued$/, () => {
    SVPage.waitForElementVisible('@BackendRun').click('@BackendRun')
    SVPage.waitForElementVisible('@AddToQueue').click('@AddToQueue')
    SVPage.waitForElementVisible('@StartDate').clearValue('@StartDate')
    SVPage.waitForElementVisible('@StartDate').setValue('@StartDate', "2019-01-21")
    SVPage.waitForElementVisible('@EndDate').clearValue('@EndDate')
    SVPage.waitForElementVisible('@EndDate').setValue('@EndDate', "2019-09-27")
    SVPage.waitForElementVisible('@RunJob')
    return SVPage.click('@RunJob')
})
When(/^User does full load run to be run ASAP$/, () => {
    SVPage.waitForElementVisible('@FullRun').click('@FullRun')
    SVPage.waitForElementVisible('@RunASAP').click('@RunASAP')
    SVPage.waitForElementVisible('@StartDate').clearValue('@StartDate')
    SVPage.waitForElementVisible('@StartDate').setValue('@StartDate', "2019-01-22")
    SVPage.waitForElementVisible('@EndDate').clearValue('@EndDate')
    SVPage.waitForElementVisible('@EndDate').setValue('@EndDate', "2019-09-28")
    SVPage.waitForElementVisible('@RunJob').click('@RunJob')
    return SVPage.click('@RunJob')
})
When(/^User does full load run to be queued$/, () => {
    SVPage.waitForElementVisible('@FullRun').click('@FullRun')
    SVPage.waitForElementVisible('@AddToQueue').click('@AddToQueue')
    SVPage.waitForElementVisible('@StartDate').clearValue('@StartDate')
    SVPage.waitForElementVisible('@StartDate').setValue('@StartDate', "2019-01-23")
    SVPage.waitForElementVisible('@EndDate').clearValue('@EndDate')
    SVPage.waitForElementVisible('@EndDate').setValue('@EndDate', "2019-09-29")
    SVPage.waitForElementVisible('@RunJob')
    return SVPage.click('@RunJob')
})
