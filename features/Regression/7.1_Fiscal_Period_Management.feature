@BaseURL @360sv_Regression @Fiscal_Period_Management
Feature: 360sv Regression: Fiscal Period Management Screen

  @Fiscal_Period_Screen
  Scenario: Navigate to fiscal period Screen

    Given   User is on home page 
    When    User navigates to fiscal period management Screen
    Then    User successfully on fiscal period screen

  @Close_Fiscal_Period_Cancel
  Scenario: Fiscal Period Screen: cancel closing fiscal period

    Given   User is on home page 
    When    User navigates to fiscal period management Screen
    Then    User cancels closing fiscal period

  @Close_Fiscal_Period_Save
  Scenario: Fiscal Period Screen: successfully close fiscal period

    Given   User is on home page 
    When    User navigates to fiscal period management Screen
    Then    User successfully closes fiscal period 

  @Reopen_Fiscal_Period_Cancel
  Scenario: Fiscal Period Screen: cancel reopening fiscal period
    
    Given   User is on home page 
    When    User navigates to fiscal period management Screen
    Then    User cancels reopening fiscal period

  @Reopen_Fiscal_Period_Save
  Scenario: Fiscal Period Screen: successfully reopen fiscal period

    Given   User is on home page 
    When    User navigates to fiscal period management Screen
    Then    User successfully reopens fiscal period
  
