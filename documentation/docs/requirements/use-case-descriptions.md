---
sidebar_position: 5
---

# Use-case descriptions

## Use Case One: Navigating to Instruction Page

  ![Use Case One](use-case-sequence-diagram-image/UseCaseOne.jpg)

- _As a Navy member, I would like to see instructions on how to use the application so I can be able to learn how to use it._

  - On the initial page, on the bottom right corner, there is a question mark icon. A user will click it.
  - From that, click a new tab opens with instructions on how to use the application.
  - Navy member will be able to click on the sections provided on the left side. While the full instruction is on the right side.
  - To exit, click on the "X" icon on the top right of the page to exit. Returns to the main page.

## Use Case Two: Inserting A Valid File

![Use Case Two](use-case-sequence-diagram-image/UseCaseTwo.jpg)

- _As a Navy member, I would like to scan the file so I can prevent malicious parts of the code from doing unexpected actions._

  - Open G-code scan module.
  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert g-code file, box turns green.
  - A pre-print form gets enabled to adjust any potential warning the Navy member would not mind skipping.
  - Navy member clicks on a green "Go" button.

## Use Case Three: Inserting An Invalid File

![Use Case Three](use-case-sequence-diagram-image/UseCaseThree.jpg)

- _As a Navy member, I would like to have invalid files rejected so that invalid files do not get processed._

  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert non-g-code file, box turns red.
  - A red modal appears reaffirming that a valid file must be dragged to the box.
  - Navy member clicks on a grey "Retry" button.

## Use Case Four: Cancellation

![Use Case Four](use-case-sequence-diagram-image/UseCaseFour.jpg)

- _As a Navy member, _I would like to cancel on-going process so that the application stop scanning and prevent any malfunctioning._

  - Insert valid file.
  - Submit pre-print form.
  - Navy member clicks on a red "stop" button.
  - A pop-up appears asking if the user sure they want to stop the process, user have the option of either "Yes" or "No, proceed."

## Use Case Five: Progress Visuals

![Use Case Five](use-case-sequence-diagram-image/UseCaseFive.jpg)

- _As a Navy member, I would like to see the progress in which it is taking step-by-step so I can make sure it is going smoothly._

  - After submitting G-code file, the page will change to the progress page.
  - Depending on the amount of stage, Navy member will see green as in has passed, yellow as a warning, or red as an alert.
    - Green: Navy member does not have to do anything, this stage have passed.
    - Yellow: Navy member will have to decide to progress or not based on on Navy member's approval.
    - Red: Navy member will have no choice but to fix issues identified by the application.
  - If all stages passed, the file will be sent to the printer, or back to the USB drive based on Navy member choice of injection.

## Use Case Six: Auto-Approve warnings

![Use Case Six](use-case-sequence-diagram-image/UseCaseSix.png)

- _As a Navy member, I would like to auto-approve all of the process warnings so I can 3D print faster._

  - On the pre-print form, there’s a red box at the very bottom of the form before the submit button.
  - Navy member hover over and a tooltip appears, warning of potential risk of having to proceed with all of warning it finds.
  - Navy member clicks on either "Yes, Proceed" or "No."

## Use case Seven: Adding new Modules

![Use Case Seven](use-case-sequence-diagram-image/UseCaseSeven.png)

- _As a Navy member, I would like to submit a new module in which it adds new way of scanning._

  - On the main page, user clicks "Add new module" into a box with a plus icon.
  - User will insert title of the module in the title field.
  - User will then insert python code into the file dropdown in which it will publish the code.
  - User will click a green "add" button to officially submit.
  
