@BaseURL @Jobs_Screen_Functionality
Feature: 360sv Regression: Jobs Screen Functionality

  @Rescan_Input_Directory_ASAP
  Scenario: Rescanning input directory: Run ASAP

    Given   User is on jobs screen
    When    User rescans input directory to run ASAP
    Then    User successsfully rescanned input directory

  @Rescan_Input_Directory_Queued
  Scenario: Rescanning input directory: Add to queue

    Given   User navigates to jobs screen
    When    User rescans input directory to be queued 
    Then    User successsfully rescanned input directory
  
  @Upload_Sources_ASAP
  Scenario: Uploading sources: Run ASAP

    Given   User navigates to jobs screen
    When    User uploads sources to run ASAP
    Then    User successfully uploaded sources
  
  @Upload_Sources_Queued
  Scenario: Uploading sources: Add to queue

    Given   User navigates to jobs screen
    When    User uploads sources to be queued 
    Then    User successfully uploaded sources  

  @Mapping_Clients_ASAP
  Scenario: Mapping clients: Run ASAP

    Given   User navigates to jobs screen 
    When    User generates client matches to run ASAP
    Then    User successfully generated client matches
  
  @Mapping_Clients_Queued
  Scenario: Mapping clients: Add to queue

    Given   User navigates to jobs screen
    When    User generates client matches to be queued
    Then    User successfully generated client matches
  

