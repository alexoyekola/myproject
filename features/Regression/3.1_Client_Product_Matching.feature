@BaseURL @Client_Product_Matching 
Feature: 360sv Regression: Client Product Matching 

  @Match_Source
  Scenario: Client Matching Screen: match source

    Given   User is on client matching screen
    When    User sets status to unmatched and chooses source
    Then    User chooses match and selects take
    Then    User successfully client matched source 

  @Deny_Match
  Scenario: Client Matching Screen: denying matches 

    Given   User is on client matching screen
    When    User sets status to pending and chooses source
    Then    User denies pending match successfully

  @Approve_Match
  Scenario: Client Matching Screen: approving matches 

    Given   User is on client matching screen
    When    User sets status to pending and chooses source
    Then    User approves pending match successfully

