@BaseURL @Forsight_Regression @Organisation_Settings @User_Groups_Functionality
Feature: Regression: Organisation Settings Functionality

   @Create_User_Groups
   Scenario: Creating a new user group successfully

     Given   User is on the user groups screen
     When    User creates user group with members
     Then    User successfully created a new user group


   @Delete_Users_In_User_Groups
   Scenario: Deleting users within a user group successfully

     Given   User is on the user groups screen
     When    User opens a user group and deletes a user
     Then    User successfully deleted a user within a user group 


   @Delete_User_Groups
   Scenario: Deleting user groups successfully

     Given   User is on the user groups screen
     When    User deletes a created user group
     Then    User successfully deleted a user group