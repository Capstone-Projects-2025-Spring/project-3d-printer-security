---
sidebar_position: 5
---

# Use-case descriptions

## Use Case One: Navigating to Instruction Page

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: Navy Member clicks on "?"
  activate HomePage
  HomePage->>InstructionsPage: openInstruction()
  activate InstructionsPage
  InstructionsPage->>InstructionsPage: Click Section One
  InstructionsPage->>InstructionsPage: Click Section Two
  InstructionsPage->>InstructionsPage: Click Section Three
  InstructionsPage-->>HomePage: Click on the "X" icon
  deactivate InstructionsPage
  deactivate HomePage
```

- _As a Navy member, I would like to see instructions on how to use the application so I can be able to learn how to use it._

  - On the initial page, on the bottom right corner, there is a question mark icon. A user will click it.
  - From that, click a new tab opens with instructions on how to use the application.
  - Navy member will be able to click on the sections provided on the left side. While the full instruction is on the right side.
  - To exit, click on the "X" icon on the top right of the page to exit. Returns to the main page.

## Use Case Two: Inserting A Valid File

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: User clicks on "G-code Scan" module
  activate HomePage
  HomePage->>Module: openModule(object)
  activate Module
  Module->>GCodeScan: File is inserted
  activate GCodeScan
  GCodeScan->>GCodeScan: Scan file for validity
  GCodeScan-->>Module: Returns true
  deactivate GCodeScan
  Module->>Module: Enable Pre-Print form
  Module->>Module: Submit Pre-Print form by pressing "Go"
  deactivate Module
  deactivate HomePage

```

- _As a Navy member, I would like to scan the file so I can prevent malicious parts of the code from doing unexpected actions._

  - Open G-code scan module.
  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert g-code file, box turns green.
  - A pre-print form gets enabled to adjust any potential warning the Navy member would not mind skipping.
  - Navy member clicks on a green "Go" button.

## Use Case Three: Inserting An Invalid File

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: User clicks on "G-code Scan" module
  activate HomePage
  HomePage->>Module: openModule(object)
  activate Module
  Module->>GCodeScan: File is inserted
  activate GCodeScan
  GCodeScan->>GCodeScan: Scan file for validity (isValid())
  GCodeScan-->>Module: Returns false
  deactivate GCodeScan
  Module->>Module: Modal pops up alerting user
  Module->>Module: User press "Retry"
  deactivate Module
  deactivate HomePage
```

- _As a Navy member, I would like to have invalid files rejected so that invalid files do not get processed._

  - In the middle of the page, drag the file into the box that says "insert file here."
  - Insert non-g-code file, box turns red.
  - A red modal appears reaffirming that a valid file must be dragged to the box.
  - Navy member clicks on a grey "Retry" button.

## Use Case Four: Cancellation

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: User clicks on "G-code Scan" module
  activate HomePage
  HomePage->>Module: openModule(object)
  activate Module
  Module->>GCodeScan: File is inserted
  activate GCodeScan
  GCodeScan->>GCodeScan: Scan file for validity
  GCodeScan-->>Module: Returns true
  deactivate GCodeScan
  Module->>Module: Enable Pre-Print form
  Module->>Module: Submit Pre-Print form by pressing "Go"
  Module->>GCodeScan: Scan the file
  activate GCodeScan
  Module->>GCodeScan: Cancel the process (click "stop")
  Module->>Module: User clicks "Yes" to be sure
  Module-XGCodeScan: Cancel the process (click "stop")
  deactivate GCodeScan
  deactivate Module
  deactivate HomePage
```

- _As a Navy member, _I would like to cancel on-going process so that the application stop scanning and prevent any malfunctioning._

  - Insert valid file.
  - Submit pre-print form.
  - Navy member clicks on a red "stop" button.
  - A pop-up appears asking if the user sure they want to stop the process, user have the option of either "Yes" or "No, proceed."

## Use Case Five: Progress Visuals

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: User clicks on "G-code Scan" module
  activate HomePage
  HomePage->>Module: openModule(object)
  activate Module
  Module->>GCodeScan: File is inserted
  activate GCodeScan
  GCodeScan->>GCodeScan: Scan file for validity
  GCodeScan-->>Module: Returns true
  Module->>Module: Submit Pre-Print form by pressing "Go"
  Module->>GCodeScan: Scan the file
  GCodeScan->>GCodeScan: Stage 1 Pass Successfully
  GCodeScan-->>Module: Turn stage 1 Progress Bubble green
  GCodeScan->>GCodeScan: Stage 2-3 Pass Succesfully
  GCodeScan-->>Module: Turn stage 2-3 Progress Bubble green
  deactivate GCodeScan
  Module-->>HomePage: Click "Finish"
  deactivate Module
  deactivate HomePage
```

- _As a Navy member, I would like to see the progress in which it is taking step-by-step so I can make sure it is going smoothly._

  - After submitting G-code file, the page will change to the progress page.
  - Depending on the amount of stage, Navy member will see green as in has passed, yellow as a warning, or red as an alert.
    - Green: Navy member does not have to do anything, this stage have passed.
    - Yellow: Navy member will have to decide to progress or not based on on Navy member's approval.
    - Red: Navy member will have no choice but to fix issues identified by the application.
  - If all stages passed, the file will be sent to the printer, or back to the USB drive based on Navy member choice of injection.

## Use Case Six: Auto-Approve warnings

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: User clicks on "G-code Scan" module
  activate HomePage
  HomePage->>Module: openModule(object)
  activate Module
  Module->>GCodeScan: File is inserted
  activate GCodeScan
  GCodeScan->>GCodeScan: Scan file for validity
  GCodeScan-->>Module: Returns false
  deactivate GCodeScan
  Module->>Module: Modal pops up alerting User
  Module->>Module: User selects to auto approve warnings in pre print
  Module->>Module: Submit pre print form by pressing "Go"
  deactivate Module
  deactivate HomePage
```

- _As a Navy member, I would like to auto-approve all of the process warnings so I can 3D print faster._

  - On the pre-print form, there’s a red box at the very bottom of the form before the submit button.
  - Navy member hover over and a tooltip appears, warning of potential risk of having to proceed with all of warning it finds.
  - Navy member clicks on either "Yes, Proceed" or "No."

## Use case Seven: Adding new Modules

```mermaid
sequenceDiagram
  actor NavyMember
  NavyMember->>HomePage: Navy Member is in main page
  activate HomePage
  create participant Module
  HomePage->>Module: User click "Add new module"
  activate Module
  Module->>Module: User inserts title of the new module
  Module->>Module: User inserts python code into file dropdown
  Module->>Module: User clicks green "Add" button to complete
  Module-->>HomePage: New Module added to HomePage
  deactivate Module
  deactivate HomePage
```

- _As a Navy member, I would like to submit a new module in which it adds new way of scanning._

  - On the main page, user clicks "Add new module" into a box with a plus icon.
  - User will insert title of the module in the title field.
  - User will then insert python code into the file dropdown in which it will publish the code.
  - User will click a green "add" button to officially submit.
  