Feature: Cross-org File Sharing

  @fileupload
  Scenario: User A shares a file with User B
    Given User A from Org1 logs into the UI portal
    When User A uploads up to 5 files with metadata
    Then files are sent to REST API for processing and stored in S3
    And metadata is validated successfully
    And User B receives a dashboard notification and an email
    When User B accesses the shared files
    And User B adds a comment and shares the file back to User A
    Then User A can view the comment and shared file
