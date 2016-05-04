---
layout: component-yaml
title: Date Picker
section: Components
redirect_from: /docs/ui-components/date-picker/
status: active
version: 1.0.0-beta.1
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

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

      ### Default State
      The single date picker consists of a specialized input field (including the current supported calendar icon) and a calendar component.

      By default the calendar is hidden until the user interacts with the date input field.

      The date input field should be prefilled with placeholder text to indicate formatting of the numeric date (ex. mm/dd/yyyy).

    contents:
      - type: narrow image
        src: ./assets/single-input-default.png

  - type: two column
    text: |
      ### Focus State (w/o selected date)

      **Upon focus:**

      - The default text remains and a cursor appears within the field
      - The calendar appears
      - No date is selected by default

      If the user closes the calendar without making a selection, it reverts back to Default State.

    contents:
      - type: narrow image
        src: ./assets/single-input-focus-noselect.png

  - type: two column
    text: |
      ### Focus State (w/selected date)

      **Upon focus:**

      - The calendar appears and shows the selected date
      - The numeric date text in the field is highlighted

      **The calendar closes when:**

      - The user makes a selection from the calendar
      - The user begins to manually type in a numeric date in the field
      - Focus is lost from field or calendar

      Note that for the first and second points, focus remains on the field until the user clicks elsewhere.

    contents:
      - type: narrow image
        src: ./assets/single-input-focus-select.png

  - type: two column
    text: |
      ### Selected Date (no focus)

      - If the user has made a selection and removed focus from the calendar or field, then the date field shows the numeric date.
      - If a field with a previously selected date regains focus, the field and calendar switch to Focus State (w/ selected date).

    contents:
      - type: narrow image
        src: ./assets/single-input-nofocus-select.png

  - type: section
    name: Range Input

  - type: two column
    text: |
      This type of date picker is to be used for choosing a range with specific start and end dates (ex. course beginning and end).

      ### Default State
      The default state of the first date input (start) initially behaves the same way as a single date input field.

    contents:
      - type: wide image
        src: ./assets/double-input-default.png
        caption: Default state of double input field date picker (start/end).

    text: |
      ### Start Date Focus w/o Selection
      When the user interacts with the start date input field, it gains focus and the calendar appears.

    contents:
      - type: wide image
        src: ./assets/double-input-focus-start-noselect.png
        caption: Double input field start date focus state

  - type: two column
    text: |
      ### Start Date Focus w/ Selection

    contents:
      - type: wide image
        src: ./assets/double-input-focus-start-select.png

  - type: two column
    text: |
      ### End Date Focus w/o Selection

      Note that once the user has made a start date selection, focus should automatically switch to the end date and the calendar for the end date should open. Until the user actually does a mousover on the calendar, only the selected start date will be highlighted.

    contents:
        - type: wide image
          src: ./assets/double-input-focus-end-noselect.png

  - type: two column
    text: |
      ### End Date Focus Hover and Highlight w/o Selection
      Dates prior to the selected start date are disabled.

    contents:
        - type: wide image
          src: ./assets/double-input-focus-end-hover.png

  - type: two column
    text: |
      ### End Date Focus and Highlight w/ Selection
      Dates prior to the selected start date are disabled.

    contents:
        - type: wide image
          src: ./assets/double-input-focus-end-select.png

  - type: two column
    text: |
      ### Reopening the Start Date After Selecting Both Start and End Dates

      If the user refocuses on the start date after having selected both a start and end date:

        - The date picker appears with the start date selected
        - A highlight extending to the end date shows the date range
        - The numeric date text in the field is highlighted
        - No disabled dates are shown

      Making a selection will cause focus to automatically shift once again to the end date picker and field.

      If the user chooses a new start date *before* the previously chosen end date, the end date selection *will be retained* and the user will be automatically moved to the end date input field to confirm their selection.

      If the user chooses a new start date *after* the previously chosen end date, the end date selection *will clear* and the user will be automatically moved moved to the end date input field to make a new end date selection.

    contents:
      - type: wide image
        src:  ./assets/double-input-focus-start-allselect.png

  - type: section
    name: Manual Entry

  - type: two column
    text: |
      This section pertains to manual entry of numeric dates directly into the input field.

      ### Default State

    contents:
      - type: narrow image
        src: ./assets/single-input-default.png

  - type: two column
    text: |
      ### Focus State (w/o selected date)

    contents:
      - type: narrow image
        src: ./assets/single-input-focus-noselect.png

  - type: two column
    text: |
      ### Focus State with Partial Manual Numeric Entry

      - The date picker closes
      - The placeholder text is replaced by the numbers as the user types
      - Restrict input to numbers
      - Auto-insert “/” (separator) between mm/dd/yyyy
      - Localization could cause date format to change

    contents:
      - type: narrow image
        src: ./assets/manual-input-focus-partial.png

  - type: two column
    text: |
      ### Manual Entry Completed
      User completes manual entry and clicks off the input field

    contents:
      - type: narrow image
        src: ./assets/manual-input-nofocus-complete.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
