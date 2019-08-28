@BaseURL @Forsight_Regression @E2E_Test
Feature: Regression: End to End Test

  @Flow
  Scenario: End to End test - upload file mitigated

    Given   User is on the home page
    When    User navigates to design screen
    Then    User inputs design details and saves
    Then    User adds activities
    Then    User successfully created new design