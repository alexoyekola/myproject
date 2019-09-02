@BaseURL @Forsight_Regression @Organisation_Settings @Users_Functionality
Feature: Regression: Organisation Settings Functionality

   @Invite_New_User
   Scenario: Inviting a new user successfully

     Given   User is on the users screen
     When    User sends invitation link
     Then    User has successfully invited a new user
   
   @Hide_User
   Scenario: Hiding a user profile

     Given   User is on the users screen
     When    User attempts to hide a user
     Then    User has successfully hidden a user 
     
   @Delete_User
   Scenario: Deleting a user from the organisation

     Given   User is on the users screen
     When    User attempts to delete a user
     Then    User has successfully deleted a user


