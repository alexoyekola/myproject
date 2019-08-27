@BaseURL @Forsight_Regression @Organisation_Settings @Log_In_Functionality
Feature: Regression: Log In Functionality

  @Login_successful
  Scenario: Login Functionality: Login successful

    Given   User is on the login screen
    When    User enters username: "Username" and password: "Password"
    Then    User successfully logged into Forsight
