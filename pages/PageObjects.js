    // Page object library for Forsight
module.exports = {
    url: 'https://hellouat.forsight.online/auth',
    elements: {
//  login Page Objects
        UsernameInput: {selector: '#continueInput', locateStrategy: 'css selector'},
        PasswordInput: {selector: '#userExistsPassword', locateStrategy: 'css selector'},
        }
}