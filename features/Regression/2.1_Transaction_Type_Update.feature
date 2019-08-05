@BaseURL @Transaction_Type_Update
Feature: 360sv Regression: Transaction Type Update 

  @Amend_Trans_Type
  Scenario: Input Management Screen: Amend and/or update transaction type

    Given   User is on input management screen
    When    User locates a source with a flow file present and filters to that source
    Then    User selects a transaction type; changes and saves it
    Then    User successfully amended transaction type