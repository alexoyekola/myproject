@BaseURL @360sv_Regression @Filter_Sort_Functionality
Feature: 360sv Regression: Filter Sort Functionality, rendering pages

  @Filter_Function_Input_Management
  Scenario: Input Management Screen: Filter column entries to ensure filter functionality
  
    Given   User is on input management screen
    When    User uses filter options IM
    Then    User successfully used filters

  @Filter_Function_Audit_Trail
  Scenario: Audit Trail Screen: Filter function for source and/or PnL item

    Given   User is on audit trail screen
    When    User uses filter options AT
    Then    User successfully used filters

  @Filter_Function_Client_Matching
  Scenario: Client Matching Screen:  Filter function for source and/or status

    Given   User is on client matching screen
    When    User uses filter options CM 
    Then    User successfully used filters

  @render_successful
  Scenario: Page load Functionality: page render successful

    Given   User is on the login screen
    When    User successfully logs into 360sv
    Then    User successfully renders different screen pages