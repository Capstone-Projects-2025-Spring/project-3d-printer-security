---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Use Case One: Navigating to Instruction Page

**1. Clicking on the Instruction Icon**
    - Mock Input: User Click Action
    - Result: Page Succesfully being able to open Instruction page.

**2. Clicking "X" to exit instruction page**
    - Mock Input: User Click Action
    - Result: Page successfully exit to the main page.

## Use Case Two: Inserting A Valid File

**1. Inserting a g-code file**
    - Mock Input: A valid g-code file
    - Result: Enables the pre-print form component.

## Use Case Three: Inserting An Invalid File

**1. Inserting a non g-code file**
    - Mock Input: A valid g-code file
    - Result: The pre-print form component stays disabled, a string that contains a message should return.

## Use Case Four: Cancellation

**1. Cancelling the scan**
    - Mock Input: User's click.
    - Result: A cancellation method is called, and modal creation has been called as well.

## Use Case Five: Progress Visuals

**1. Scan has passed**
    - Mock Input: A non-breaking g-code file.
    - Result: Scan method should return true.

**2. Scan has warning**
    - Mock Input: A g-code file that contains some vulnerability, but nothing that would break but rather, display warning message.
    - Result: A warning message gets called.

**3. Scan has detected errors**
    - Mock Input: A g-code file that contains g-code breaking vulnerability.
    - Result: A cancellation method and warning message gets called.

## Use Case Six: Auto-Approve warnings

**1. Scan wih auto-approve warnings**
    - Mock Input: A g-code file that contains some vulnerability, but nothing that would break but rather, display warning message, and a boolean value to skip any warnings.
    - Result: Scan method should return true.

## Use case Seven: Adding new Modules

**3. Adding new module**
    - Mock Input: A valid empty module.
    - Result: An array containing two module objects.
