@BaseURL @360sv_Regression @Change_Password_Functionality
Feature: 360sv Regression: Change Password Functionality

  @Change_Password_successful
  Scenario: Change Password Functionality: Password amend successful

    Given   User is on the login screen
    When    User successfully logs into 360sv
    Then    User changes Password
    Then    User successfully changed passsword