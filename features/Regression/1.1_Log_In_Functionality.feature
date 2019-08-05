@BaseURL @360sv_Regression @Log_In_Functionality
Feature: 360sv Regression: Log In Functionality

  @Login_successful
  Scenario: Login Functionality: Login successful

    Given   User is on the login screen
    When    User successfully logs into 360sv
    Then    User logs into 360sv

  @Login_unsuccessful
  Scenario: Login Functionality: Login unsuccessful due to invalid credentials entered 

    Given   User is on the login screen
    When    User enters username: "UserName" and password: "Password"
    Then    User is on the login screen again

 @Login_Error
 Scenario Outline: Login Functionality: Login unsuccessful due to missing credentials

    Given   User is on the login screen
    When    User enters username: "<username>" and password: "<password>"
    Then    User receives the error messages "<ErrorMessageOne>" or "<ErrorMessageTwo>"

        Examples:      
          |   username         |   password        | ErrorMessageOne | ErrorMessageTwo |
          |                    |   MissingUsername |   * Required.   |                 |
          |   MissingPassword  |                   |                 |   * Required.   |       
          |                    |                   |   * Required.   |   * Required.   |
