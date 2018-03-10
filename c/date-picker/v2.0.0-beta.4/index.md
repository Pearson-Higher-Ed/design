---
layout: component-yaml
title: Date Picker
section: Components
redirect_from: /docs/ui-components/date-picker/
status: deprecated
version: 2.0.0-beta.4
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

downloads:
  - name: date_picker_2.4.sketch
    link: ./assets/date_picker_2.4.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1ybTMXbm6ge_gTBQC8P9Vg8WAnWQOCmcE8G70QjTgQl0/edit?usp=sharing

dependencies:
  - name: Inputs
    version: 2.0.0
  - name: Calendar
    version: 2.0.0
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0
  - name: Icons
    version: 2.0.0

tagline: |
  This component defines the standard interactions for the date picker component.
features:
  - Single and double input field interactions (single date vs. start/end dates)
  - Manual date entry
usage_guidelines: |
  Every instance of date selection should come from this component.

blocks:
  - type: section
    name: Single Date Input

  - type: two column
    text: |
      This type of date picker is used for picking a single date (ex. assignment due date).

  - type: two column
    text: |
      ### Default State
      The single date picker consists of a specialized input field (including the calendar icon) and a calendar component.

      By default the calendar is hidden until the user interacts with the date input field.

      In the field label, provide formatting of the numeric date (ex. mm/dd/yyyy).

    contents:
      - type: narrow image
        src: ./assets/input-default-2x.png

  - type: two column
    text: |
      ### Focus State (w/o selected date)

      **Upon focus:**

      - The default text remains and a cursor appears within the field
      - The calendar appears. Note, the size of the input isn't tied to the width of the calendar popup.
      - No date is selected by default

      **The calendar closes when:**

      - The user makes a selection from the calendar
      - Focus is lost from field or calendar when the user clicks elsewhere.

      If the user closes the calendar without making a selection, it reverts back to Default State.

    contents:
      - type: narrow image
        src: ./assets/input-focus-open-2x.png

  - type: two column
    text: |
      ### Focus State (w/selected date)

      **Upon focus:**

      - The calendar appears and shows the selected date
      - The numeric date text in the field is highlighted

      Note that for the first and second points, focus remains on the field until the user clicks elsewhere.

    contents:
      - type: narrow image
        src: ./assets/input-focus-open-selected-2x.png

  - type: two column
    text: |
      ### Selected Date (no focus)

      - If the user has made a selection and removed focus from the calendar or field, then the date field shows the numeric date.
      - If a field with a previously selected date regains focus, the field and calendar switch to Focus State (w/ selected date).

    contents:
      - type: narrow image
        src: ./assets/input-set-date-2x.png

  - type: section
    name: Range Input

  - type: two column
    text: |
      ### Start Date Focus w/o Selection
      When the user interacts with the start date input field, it gains focus and the calendar appears.

    contents:
      - type: wide image
        src: ./assets/input-focus-start-2x.png
        caption: Double input field start date focus state

  - type: two column
    text: |
      ### Start Date Focus w/ Selection

    contents:
      - type: wide image
        src: ./assets/input-focus-start-date-2x.png

  - type: two column
    text: |
      ### End Date Focus w/o Selection

      Once the user has made a start date selection, focus should automatically switch to the end date input field. The calendar for the end date should open. Note the selected start date and prior dates are disabled (ex. gray colored dates before the 16th).

    contents:
        - type: wide image
          src: ./assets/input-focus-end-2x.png

  - type: two column
    text: |
      ### End Date Focus and Highlight w/ Selection

    contents:
        - type: wide image
          src: ./assets/input-focus-end-date-2x.png

  - type: two column
    text: |
      ### Reopening the Start Date After Selecting Both Start and End Dates

      If the user refocuses on the start date after having selected both a start and end date:

        - The date picker appears with the start date selected
        - The numeric date text in the field is highlighted
        - No disabled dates are shown

      Making a selection will cause focus to automatically shift once again to the end date picker and field.

      If the user chooses a new start date *before* the previously chosen end date, the end date selection *will be retained* and the user will be automatically moved to the end date input field to confirm their selection.

      If the user chooses a new start date *after* the previously chosen end date, the end date selection *will clear* and the user will be automatically moved moved to the end date input field to make a new end date selection.

    contents:
      - type: wide image
        src:  ./assets/input-focus-start-open-2x.png

  - type: section
    name: Manual Entry

  - type: two column
    text: |
      This section pertains to manual entry of numeric dates directly into the input field.

  - type: two column
    text: |
      ### Default State

    contents:
      - type: narrow image
        src: ./assets/input-default-2x.png

  - type: two column
    text: |
      ### Focus State (w/o selected date)

    contents:
      - type: narrow image
        src: ./assets/input-focus-open-2x.png

  - type: two column
    text: |
      ### Focus State with Partial Manual Numeric Entry

      - The calendar will close as the user types.
      - Restrict input to numbers
      - Localization could cause date format to change

    contents:
      - type: narrow image
        src: ./assets/input-typed-date-2x.png

  - type: two column
    text: |
      ### Manual Entry Completed
      User completes manual entry and clicks off the input field

    contents:
      - type: narrow image
        src: ./assets/input-set-date-2x.png

  - type: section
    name: Error Messages

  - type: two column
    text: |
      ### Default State
      Error text below the field.
    contents:
      - type: narrow image
        src: ./assets/input-error-2x.png

  - type: two column
    text: |
      ### Reopening the date picker
      - Calendar appears below the error text.
      - The numeric date text in the field is highlighted.
      - No dates are selected in the calendar.

    contents:
      - type: narrow image
        src: ./assets/input-focus-open-error-2x.png

  - type: section
    name: Redlines

  - type: two column
    text: |

      Input Type
      : - Basic with calendar icon

      Calendar Type
      : - White background

      Icon
      : - calendar-18
        - [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Padding-left 14px
        - Padding-right 14px

    contents:
      - type: narrow image
        src: ./assets/date-picker-redlines-2x.png

changelog:
  - version: 2.0.0-beta.4
    changes: Updated placeholder text and redlines. Added error message examples.
  - version: 2.0.0-beta.3
    changes: Updated closing functionality text and added redlines
  - version: 2.0.0-beta.2
    changes: Updated text on input labels and calendar
  - version: 2.0.0-beta.1
    changes: Rebranded version
  - version: 1.0.0-beta.1
    changes: Initial version
---
