@BaseURL @Processing_Queue
Feature: 360sv Regression: Processing Queue Screen

  @Confirm_Jobs_Queue
  Scenario: Confirm jobs queue is present

    Given   User is on home page
    When    User navigates to processing queue screen
    Then    User confirms jobs queue is present   
    