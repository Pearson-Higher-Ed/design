---
layout: component-yaml
title: Calendar
section: Components
redirect_from: /docs/ui-components/calendar/
status: active
version: 1.0.0-beta.1
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
  This component defines the standard visual style for the calendar element.
features:
  - Defines all date state styles (hover, selected, highlighted range, disabled)
  - Optional legend
usage_guidelines: |
  Every instance of a calendar element should come from this component.

blocks:
  - type: section
    name: Calendar

  - type: two column
    text: |
      The default calendar style shows the current month's dates alongside the prior and next months' dates in a single calendar month view.

      The current month is indicated at the top left.

      Controls for month-to-month traversal are in the upper right.
    contents:
      - type: narrow image
        src: ./assets/calendar-default.png

  - type: section
    name: Date States

  - type: two column
    text: |
      **Dates within current month** is the normal state.  It is available for user interaction.

      **Dates outside current month** is used for the prior and next months' dates that fit within the current single month calendar view.

      **Hover** state indicates that the user's mouse is located over a selectable date.  This can be applied to dates both outside and within the current month.

      **Selected** state indicates the user's selected date.  This can be applied to dates both outside and within the current month.

      **Disabled** state is used when a date is not selectable.  Disabled dates also cannot incur a hover state.

      **Highlight** state is used to indicate a range of selected dates.

    contents:
      - type: narrow image
        src: ./assets/states.png
        caption: The six basic states.
      - type: narrow image
        src: ./assets/states-context.png
        caption: Date states in context on a calendar.

  - type: section
    name: Legend (optional)

  - type: two column
    text: |
      A legend can be included optionally if needed to lend more context to one of the states.
    contents:
      - type: narrow image
        src: ./assets/calendar-legend.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Calendar

      Spacing
      : - 20px padding
        - 1px space between dates

      Month Label & Controls
      : - Basic Title
        - Pitch (#231F20)
        - Chevron left/right icons

      Days of the Week
      : - Large Label Text
        - Pitch (#231F20)

      Border
      : - 1px thick border
        - Hairline Gray (#D0D0D0)

    contents:
    - type: narrow image
      src: ./assets/redlines-calendar.png

  - type: two column
    text: |
      ### Date States

      Sizing
      : - 40px width
        - 35px height

      Dates within the current month
      : - Large Label Text; Pitch (#231F20)
        - Background fill; Dirty Ice  (#F8F8F8)

      Dates outside the current month
      : - Large Label Text; Pitch (#231F20)
        - Background fill; White (#FFFFFF)

      Hover State
      : - Large Label Text; White (#FFFFFF)
        - Background fill; Sea (#0C5D99)

      Selected State
      : - Large Label Text; White (#FFFFFF)
        - Background fill; Basic Blue (#107ACA)

      Disabled State
      : - Large Label Text; Boring (#A6A8AB)
        - Background fill; Brightly Lit (#E6E6E6)

      Highlighted State
      : - Large Label Text; Pitch (#231F20)
        - Background fill; Sky Blue (#D9EEFF)

    contents:
      - type: narrow image
        src: ./assets/redlines-date-states-01.png
      - type: narrow image
        src: ./assets/redlines-date-states-02.png

  - type: two column
    text: |
      ### Legend (optional)

      Sizing
        : - 50px high container
          - 20px horizontal padding
          - 22px square Legend Swatch
          - 10px padding between Swatch and Label text

      Text
        : - Basic Label Text; Gray No. 1 (#565656)

    contents:
      - type: narrow image
        src: ./assets/redlines-legend-01.png
      - type: narrow image
        src: ./assets/redlines-legend-02.png


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
