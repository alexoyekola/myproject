@BaseURL @360sv_Regression @Source_File_Actions
Feature: 360sv Regression: Source file actions

  @Data_Util_Products_Column
  Scenario: Input Management Screen: Clicking on the cell within the products column takes me to the product matching page

    Given   User is on input management screen
    When    User clicks number on products column
    Then    User is successfully on product matching screen     
  
  @Data_Util_Clients_Column
  Scenario: Input Management Screen: Clicking on the cell within the clients column takes me to the client matching page 

    Given   User is on input management screen
    When    User clicks number on clients column
    Then    User is successfully on client matching screen 

  @Loading_Reject_Column
  Scenario: Input Management Screen: Clicking on the cell within the rejections column produces a pop up window

    Given   User is on input management screen
    When    User clicks number on rejections column
    Then    Pop out window successfully appears for rejected column 
  
  @Loading_Alerts_Column
  Scenario: Input Management Screen: Clicking on the cell within the alerts column produces a pop up window

    Given   User is on input management screen
    When    User clicks number on alerts column
    Then    Pop out window successfully appears for alerts column 
