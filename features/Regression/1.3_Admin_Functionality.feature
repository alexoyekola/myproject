@BaseURL @Admin_Functionality
Feature: 360 Regression: Admin Functionality

  @Login_admin
  Scenario: Login Functionality: Login as admin and preview rights

    Given   User is on the login screen
    When    User successfully logs into 360sv as admin
    Then    User logs into 360sv
