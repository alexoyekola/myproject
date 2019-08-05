@BaseURL @360sv_Regression @Provider_List_Actions
Feature: 360sv Regression: Provider list screen
        
  @Default_Client_Trueup_Unmatched_Validate
  Scenario: user is able to enter client master id for the client with value TA & Platform records

    Given   User is on provider list screen
    When    User selects edit action on provider
    Then    User enters unmatched: "SO0000026" and true-up: "SO0000026"

  @Default_Client_Error_Message_Invalid
  Scenario: user sees error messages when true-up & unmatched fields filled with invalid ids

    Given   User is on provider list screen
    When    User selects edit action on provider
    Then    User enters unmatched: "SO00000141" and true-up: "SO00000141"
    Then    User receives invalid id error messages on pop up "* Unknown value" or "* Unknown value"

  @Default_Client_Error_Messages
  Scenario Outline: user sees error messages when true-up & unmatched fields left empty on edit action pop-up

    Given   User is on provider list screen
    When    User selects edit action on provider
    Then    User enters unmatched: "<unmatched>" and true-up: "<trueup>"
    Then    User receives the error messages on pop up "<ErrorMessageOne>" or "<ErrorMessageTwo>"
  
        Examples:    
          |   unmatched    |     trueup     | ErrorMessageOne | ErrorMessageTwo |  unmatchedlist |   trueuplist  |
          |                |   SO0000014    |   * Required    |                 |   SO0000024    |   SO0000024   |
          |   SO0000014    |                |                 |   * Required    |   SO0000026    |   SO0000026   |
          |                |                |   * Required    |   * Required    |   SO0000027    |   SO0000027   |