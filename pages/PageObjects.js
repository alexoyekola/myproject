    // Page object library for Forsight
module.exports = {
    url: 'https://hellouat.forsight.online/auth',
    elements: {
//  login Page Objects
        Logo: {selector: '#left-menu > div:nth-child(6) > img', locateStrategy: 'css selector'},
        UsernameInput: {selector: '#continueInput', locateStrategy: 'css selector'},
        PasswordInput: {selector: '#userExistsPassword', locateStrategy: 'css selector'},
        ConfirmUsername: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container.m-t-30 > div.col-12.m-t-24 > button', locateStrategy: 'css selector'},
        LoginBtn: {selector: 'body > app-root > div.main-content > div > auth > div > div.col-8.col-lg-4.col-md-6 > div.row.form-container > div > div:nth-child(4) > div > div > button', locateStrategy: 'css selector'},
        }
}