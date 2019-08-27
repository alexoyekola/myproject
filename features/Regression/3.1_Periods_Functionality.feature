@BaseURL @Forsight_Regression @Organisation_Settings @Periods_Functionality
Feature: Regression: Organisation Settings Functionality

   @Create_Period
   Scenario: Creating period successfully

     Given   User is on the periods screen
     When    User creates new period
     Then    User has successfully created new period