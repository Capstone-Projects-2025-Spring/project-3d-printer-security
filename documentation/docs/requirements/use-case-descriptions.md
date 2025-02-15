---
sidebar_position: 5
---

# Use-case descriptions

## Use Case One: Navigating to Instruction Page

- _As a Navy member, I would like to see instructions on how to use the application so I can be able to learn how to use it._

  - On the initial page, on the bottom right corner, there is a question mark icon. A user will click it.
  - From that, click a new tab opens with instructions on how to use the application.
  - Navy member will be able to click on the sections provided on the left side. While the full instruction is on the right side.
  - To exit, click on the "X" icon on the top right of the page to exit. Returns to the main page.

## Use Case Two: Inserting A Valid File

- _As a Navy member, I would like to scan the file so I can prevent malicious parts of the code from doing unexpected actions._

  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert g-code file, box turns green.
  - Navy member on the bottom left and click "proceed."
  - A pre-print form appears to adjust any potential warning the Navy member would not mind skipping.
  - Navy member clicks on a green "go" button.

## Use Case Three: Inserting An Invalid File

- _As a Navy member, I would like to have invalid files rejected so that invalid files do not get processed._

  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert non-g-code file, box turns red.
  - A red modal appears reaffirming that a valid file must be dragged to the box.
  - Navy member clicks on a grey "Retry" button.

## Use Case Four: Pre-Print Form

- _As a Navy member, _I would like to submit a pre-requisite parameter so that the application scan accurately._

  - Insert valid file.
  - In the middle of the page, Navy member will fill parameters in the form.
  - When Navy member finish filling all required field, green "proceed" button appear enabled.
  - User click "proceed."

## Use Case Five: Cancellation

- _As a Navy member, _I would like to cancel on-going process so that the application stop scanning and prevent any malfunctioning._

  - Insert valid file.
  - Submit pre-print form.
  - Navy member clicks on a red "stop" button.
  - A pop-up appears asking if the user sure they want to stop the process, user have the option of either "Yes" or "No, proceed."

## Use Case Six: Warning Selection

- _As a Navy member, I would like to adjust warnings so I can be able to detect any potential unexpected process to prevent printer from malfunctioning._

  - Insert valid file.
  - Submit pre-print form.
  - Warning pop up appears, message contain options to allow user to proceed or to halt the process.
  - User clicks on either “proceed” or “stop” option.

## Use Case Seven: Progress Visuals

- _As a Navy member, I would like to see the progress in which it is taking step-by-step so I can make sure it is going smoothly._

  - After submitting G-code file, the page will change to the progress page.
  - Depending on the amount of stage, Navy member will see green as in has passed, yellow as a warning, or red as an alert.
    - Green: Navy member does not have to do anything, this stage have passed.
    - Yellow: Navy member will have to decide to progress or not based on on Navy member's approval.
    - Red: Navy member will have no choice but to fix issues identified by the application.
  - If all stages passed, the file will be sent to the printer, or back to the USB drive based on Navy member choice of injection.

## Use Case Eight: Auto-Approve warnings

- _As a Navy member, I would like to auto-approve all of the process warnings so I can 3D print faster._

  - On the pre-print form, there’s a red box at the very bottom of the form before the submit button.
  - Navy member hover over and a tooltip appears, warning of potential risk of having to proceed with all of warning it finds.
  - Navy member clicks on either "Yes, Proceed" or "No."

## Use case Nine: Adding new Modules

- _As a Navy member, I would like to submit a new module in which it adds new way of scanning._

  - On the main page, user clicks "Add new module" into a box with a plus icon.
  - User will insert title of the module in the title field.
  - User will then insert python code into the file dropdown in which it will publish the code.
  - User will click a green "add" button to officially submit.
  