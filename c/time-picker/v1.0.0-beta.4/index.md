---
layout: component-yaml
title: Time Picker
section: Components
redirect_from: /docs/ui-components/time-picker/
status: active
version: 1.0.0-beta.4
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

downloads:
  - name: time-picker-1.4.sketch
    link: ./assets/time-picker-1.4.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1siRLI8HrYohEylaF0SgRStw8bQZCe89OGMZaaOReE10/edit?usp=sharing

dependencies:
  - name: Inputs
    version: 2.0.0
  - name: Colors
    version: 2.0.0
  - name: Icons
    version: 2.0.0
  - name: Dropdown
    version: 1.0.0

tagline: |
  This component defines the standard interactions for the time picker component.
features:
  - Single and double input field interactions (single time vs. start/end times)
  - Manual time entry
usage_guidelines: |
  Every instance of time selection should come from this component.

blocks:
  - type: section
    name: Single Time Input

  - type: two column
    text: |

      This type of time picker is used for picking a single time (ex. assignment due time).

  - type: two column
    text: |
      ### Default State
      The single time picker consists of a specialized input field (including a time icon) and a dropdown component.

      By default the dropdown is hidden until the user interacts with the time input field.

      In the field label, provide formatting example (hh:mm am/pm).

    contents:
      - type: narrow image
        src: ./assets/input-time-default-2x.png

  - type: two column
    text: |
      ### Focus State (w/o selected time)

      **Upon focus:**

      - A cursor appears within the field
      - The dropdown appears.  Note, the size of the input isn’t tied to the width of the dropdown.
      - No time is selected by default

      **The dropdown closes when:**

      - The user makes a selection from the dropdown
      - The user begins to manually type in the field
      - Focus is lost from field or dropdown

      If the user closes the dropdown without making a selection, it reverts back to Default State.

    contents:
      - type: narrow image
        src: ./assets/input-time-focus-open-2x.png

  - type: two column
    text: |
      ### Focus State (w/selected time)

      **Upon focus:**

      - The dropdown appears and shows the selected time
      - The text in the field is highlighted

      **The dropdown closes when:**

      - The user makes a selection from the dropdown
      - The user begins to manually type in the field
      - Focus is lost from field or dropdown

      Note that for the first and second points, focus remains on the field until the user clicks elsewhere.

    contents:
      - type: narrow image
        src: ./assets/input-time-focus-open-selected-2x.png

  - type: two column
    text: |
      ### Selected Date (no focus)

      - If the user has made a selection and removed focus from the dropdown or field, then the time field shows the numeric time and period.
      - If a field with a previously selected time regains focus, the field and dropdown switch to Focus State (w/ selected time).

    contents:
      - type: narrow image
        src: ./assets/input-time-set-2x.png

  - type: section
    name: Range Input

  - type: two column
    text: |
      This type of time picker is to be used for choosing a range with specific start and end times (ex. course beginning and end).

      ### Default State
      The default state of the first time input (start) initially behaves the same way as a single time input field.

    contents:
      - type: wide image
        src: ./assets/double-input-time-default.png
        caption: Default state of double input field time picker (start/end).

    text: |
      ### Start Time Focus w/o Selection
      When the user interacts with the start time input field, it gains focus and the dropdown appears.

    contents:
      - type: wide image
        src: ./assets/input-time-focus-start-2x.png
        caption: Double input field start time focus state

  - type: two column
    text: |
      ### Start Time Focus w/ Selection

    contents:
      - type: wide image
        src: ./assets/input-time-focus-start-selected-2x.png

  - type: two column
    text: |
      ### End Time Focus w/o Selection

      Note that once the user has made a start time selection, focus should automatically switch to the end time and the dropdown for the end time should open. Time selected in the start time and prior will not be in the dropdown.

      The time list can be customized to show shorter or longer increments (ex. 50 minutes class sessions).

    contents:
        - type: wide image
          src: ./assets/input-time-focus-end-2x.png


  - type: two column
    text: |
      ### End Time Focus and Highlight w/ Selection

    contents:
        - type: wide image
          src: ./assets/input-time-focus-end-selected-2x.png

  - type: two column
    text: |
      ### Reopening the Start Time After Selecting Both Start and End Times

      If the user refocuses on the start time after having selected both a start and end time&#58;

        - The time picker appears with the start time selected
        - The time text in the field is highlighted
        - No disabled times are shown

      Making a selection will cause focus to automatically shift once again to the end time picker and field.

      If the user chooses a new start time *before* the previously chosen end time, the end time selection *will be retained* and the user will be automatically moved to the end time input field to confirm their selection.

      If the user chooses a new start time *after* the previously chosen end time, the end time selection *will clear* and the user will be automatically moved moved to the end time input field to make a new end time selection.

    contents:
      - type: wide image
        src:  ./assets/input-time-focus-start-open-2x.png

  - type: section
    name: Manual Entry

  - type: two column
    text: |
      This section pertains to manual entry of times directly into the input field.

  - type: two column
    text: |
      ### Default State

    contents:
      - type: narrow image
        src: ./assets/input-time-default-2x.png

  - type: two column
    text: |
      ### Focus State (w/o selected time)

    contents:
      - type: narrow image
        src: ./assets/input-time-focus-open-2x.png

  - type: two column
    text: |
      ### Focus State with Manual Entry

      - The time picker closes
      - User can enter any characters
      - Localization could cause time format to change

    contents:
      - type: narrow image
        src: ./assets/input-time-typed-2x.png

  - type: two column
    text: |
      ### Manual Entry Completed
      User completes manual entry by clicking off the input field, pressing the "Enter/Return" key, or pressing the "Tab" key.

    contents:
      - type: narrow image
        src: ./assets/input-time-set-2x.png

  - type: section
    name: Error Messages

  - type: two column
    text: |
      ### Default State
      Error text below the field.

    contents:
      - type: narrow image
        src: ./assets/input-time-error-2x.png

  - type: two column
    text: |
      ### Reopening the date picker
      - Dropdown list appears below the error text.
      - The text in the field is highlighted.
      - No time is selected in the dropdown list.

    contents:
      - type: narrow image
        src: ./assets/input-time-error-focus-open-2x.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      Input type
      : - Basic with icon
        - Minimum 150px width

      Dropdown type
      : - Select option
        - Minimum 220px width

      Icon
      : - clock-18
        - [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Padding-left 14px
        - Padding-right 14px

    contents:
      - type: narrow image
        src: ./assets/time-picker-redlines-2x.png

changelog:
  - version: 1.0.0-beta.4
    changes: |
     - Redlines: Added width limits for input and dropdown.
     - Focus State with Manual Entry: Changed input to accept any characters
     - Manual Entry Completed: Added "Enter/Return" and "Tab" key
  - version: 1.0.0-beta.3
    changes: Moved placeholder text into label and added error message examples.
  - version: 1.0.0-beta.2
    changes: Fixed typo and added redlines
  - version: 1.0.0-beta.1
    changes: Initial version
---
