---
layout: component-yaml
title: Calendar
section: Components
redirect_from: /docs/ui-components/calendar/
status: active
version: 2.0.0-beta.3
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
  - name: calendar_2.3.sketch
    link: ./assets/calendar_2.3.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19CpAK-nLRHPQ0w_qmUpXo5NjGZU7mBWszAHlB4Kxy94/edit?usp=sharing

dependencies:
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0
  - name: Icons
    version: 2.0.0

tagline: |
  This component defines the standard visual style for the calendar element.
features:
  - Defines all date state styles (hover, selected, highlighted range, disabled)
usage_guidelines: |
  Every instance of a calendar element should come from this component.

blocks:
  - type: section
    name: Calendar

  - type: two column
    text: |
      The default calendar style shows the current month's dates.

      The current month is indicated at the top left.

      Controls for month-to-month traversal are in the upper right.
    contents:
      - type: wide image
        src: ./assets/calendar-default-colors-2x.png

  - type: section
    name: Date States

  - type: two column
    text: |
      ### Dates
      It's a normal state, available for user interaction.

      ### Disabled
      Use to indicate unselectable date, cannot incur a hover state.

      ### Current
      Indicates current date.

      ### Hover
      Indicates the user's mouse is located over a selectable date.

      ### Selected
      Indicates user's selected date.

      ### Secondary Indicator (optional)
      Used in Console to indicate available assignments.

    contents:
      - type: wide image
        src: ./assets/calendar-states-white-2x.png
        caption: White version - five basic states and calendar example.
      - type: wide image
        src: ./assets/calendar-states-blue-2x.png
        caption: Ink blue version - five basic states and calendar example.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Calendar (White)

      Sizing
      : - 280px width

      Background Color
      : - [White](/design/c/colors/v2.1.0/#rd-white)

      Month Label
      : - Small Section Heading, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Padding-left 8px
        - Padding-right 8px
        - 40px height
        - Margin-below 8px
        - Centered

      Controls
      : - chevron-back-18
        - chevron-next-18
        - Color, [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Hover color, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Disabled color, [Alto](/design/c/colors/v2.1.0/#rd-alto) (no hover state)
        - 40px height and width
        - Margin-below 8px
        - Centered

      Days of the Week
      : - OpenSans font-family
        - 11px font-size
        - 14px line-height
        - Color, [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - 40px height and width
        - Centered

      Container (Optional)
      : - Border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - Background color, [White](/design/c/colors/v2.1.0/#rd-white)
        - Padding, 16px 20px 20px 20px

    contents:
    - type: wide image
      src: ./assets/calendar-white-redlines-2x.png

  - type: two column
    text: |
      ### Date States (White)

      Sizing
      : - 40px width
        - 35px height

      Dates
      : - Basic UI Text, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Centered

      Dates (hover)
      : - Circle size, 32 x 32 pixel
        - Circle background color, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)
        - Circle border-radius, 16px

      Current
      : - Basic UI Text, [White](/design/c/colors/v2.1.0/#rd-white)
        - Size, 38 x 38 pixel
        - Border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Current (hover)
      : - Circle size, 32 x 32 pixel
        - Circle background color, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)
        - Circle border-radius, 16px

      Selected (no hover)
      : - Bold UI Text, [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle size, 32 x 32 pixel
        - Circle background color, [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Circle border-radius, 16px

      Disabled (no hover)
      : - Basic UI Text, [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Assignments
      : - Basic UI Text, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle size, 32 x 32 pixel
        - Circle border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - Circle border-radius, 16px

      Assignments (hover)
      : - Circle background color, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)

    contents:
      - type: wide image
        src: ./assets/date-states-white-2x.png

  - type: two column
    text: |
      ### Calendar (Ink Blue)

      Sizing
      : - 280px width

      Background Color
      : - [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)

      Month Label
      : - Small Section Heading, [White](/design/c/colors/v2.1.0/#rd-white)

      Controls
      : - chevron-back-18
        - chevron-next-18
        - [White](/design/c/colors/v2.1.0/#rd-white)
        - Hover color, [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - Disabled color, [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue) (no hover state)

      Days of the Week
      : - OpenSans font-family
        - 11px font-size
        - 14px line-height
        - [White](/design/c/colors/v2.1.0/#rd-white)

      Container (Optional)
      : - Border, 1px solid [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)
        - Background color, [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)

    contents:
    - type: wide image
      src: ./assets/calendar-blue-redlines-2x.png



  - type: two column
    text: |
      ### Date States (Ink Blue)

      Dates
      : - Basic UI Text, [White](/design/c/colors/v2.1.0/#rd-white)

      Dates (hover)
      : - Circle background color, [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)

      Current
      : - Basic UI Text, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle background color, [White](/design/c/colors/v2.1.0/#rd-white)

      Current (hover)
      : - Border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Selected (no hover)
      : - Bold UI Text, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle background color, [White](/design/c/colors/v2.1.0/#rd-white)

      Disabled (no hover)
      : - Basic UI Text, [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)

      Assignments
      : - Basic UI Text, [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Assignments (hover)
      : - Circle background color, [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)

    contents:
    - type: wide image
      src: ./assets/date-states-blue-2x.png


changelog:
  - version: 2.0.0-beta.3
    changes: Removed old functionality text and redundant specs in ink blue redlines.
  - version: 2.0.0-beta.2
    changes: Added square box to indicate current date. Updated style for selected date.
  - version: 2.0.0-beta.1
    changes: Rebranded version
  - version: 1.0.0-beta.1
    changes: Initial version
---
