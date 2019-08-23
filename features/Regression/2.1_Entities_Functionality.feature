@BaseURL @Forsight_Regression @Organisation_Settings @Entities_Functionality
Feature: Regression: Organisation Settings Functionality

  @Create_Entity
  Scenario: Creating entities successfully

    Given   User is on the entities screen
    When    User creates new entity 
    Then    User has successfully created new entity 

  @Copy_Entity
  Scenario: Copying entities successfully

    Given   User is on the entities screen
    When    User copies an entity
    Then    User has successfully copied an entity

  @Hide_Entity
  Scenario: Hiding entities successfully

    Given   User is on the entities screen
    When    User selects to hide an entity
    Then    User has successfully hidden an entity
