@BaseURL @Source_File_Actions_Reloading
  Feature: 360sv Regression: Source file re-loading, cancelling, approving

  @Reload_File
  Scenario: Input Management Screen: Find a file with status not loaded and confirm you can re-load it

    Given   User has located source file with status Not Loaded
    When    User reloads the file
    Then    User has successfully re-loaded a Not Loaded file
  