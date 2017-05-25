---
layout: component-yaml
title: Calendar
section: Components
redirect_from: /docs/ui-components/calendar/
status: deprecated
version: 2.0.0-beta.1
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
  - name: calendar_2.0.sketch
    link: ./assets/calendar_2.0.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19CpAK-nLRHPQ0w_qmUpXo5NjGZU7mBWszAHlB4Kxy94/edit?usp=sharing

dependencies:
  - name: Colors
    version: 2.0.0

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

      ### Hover
      Indicates the user's mouse is located over a selectable date.

      ###Current
      Indicates current date.

      ###Selected or assignments (optional)
      Indicates the user's selected date.  Optional, date contains assignments.

    contents:
      - type: wide image
        src: ./assets/calendar-states-white-2x.png
        caption: White version - five basic states and calendar example.
      - type: wide image
        src: ./assets/calendar-states-blue-2x.png
        caption: Ink blue version - five basic states and calendar example.

  - type: section
    name: White Background Redlines

  - type: two column
    text: |
      ###Calendar (White)

      Sizing
      : - 280px width

      Background Color
      : - [White](/design/c/colors/v2.1.0/#rd-white)

      Month Label
      : - Small Section Heading; [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Padding-left 8px;
        - Padding-right 8px;
        - 40px height
        - Margin-below 8px;
        - Centered

      Controls
      : - chevron-back-18
        - chevron-next-18
        - Color - [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Hover color - [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Disabled color - [Alto](/design/c/colors/v2.1.0/#rd-alto), no hover state
        - 40px height and width
        - Margin-below 8px;
        - Centered

      Days of the Week
      : - OpenSans font-family
        - 11px font-size
        - 14px line-height
        - Color - [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - 40px height and width
        - Centered

      Container (Optional)
      : - Border - 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - Padding - 16px 20px 20px 20px

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
      : - Basic UI Text; [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Centered

      Dates (hover)
      : - Circle size, 32 x 32 pixel
        - Circle background, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)
        - Circle border-radius, 16px

      Current
      : - Bold UI Text; [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle size, 32 x 32 pixel
        - Circle background, [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Circle border-radius, 16px

      Current (hover)
      : - Bold UI Text; [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle background, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)

      Disabled State
      : - Basic UI Text; [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Selected State
      : - Basic UI Text; [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle size, 32 x 32 pixel
        - Circle border, 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - Circle border-radius, 16px

    contents:
      - type: wide image
        src: ./assets/date-states-white-2x.png


  - type: section
    name: Ink Blue Background Redlines

  - type: two column
    text: |
      ### Calendar (Ink Blue)

      Sizing
      : - 280px width

      Background Color
      : - [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)

      Month Label
      : - Small Section Heading; [White](/design/c/colors/v2.1.0/#rd-white)
        - Padding-left 8px;
        - Padding-right 8px;
        - 40px height
        - Margin-below 8px;
        - Centered

      Controls
      : - chevron-back-18
        - chevron-next-18
        - [White](/design/c/colors/v2.1.0/#rd-white)
        - Hover color - [White](/design/c/colors/v2.1.0/#rd-white) opacity 0.5;
        - Disabled color - [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue), no hover state
        - 40px height and width
        - Margin-below 8px;
        - Centered

      Days of the Week
      : - OpenSans font-family
        - 11px font-size
        - 14px line-height
        - [White](/design/c/colors/v2.1.0/#rd-white)
        - 40px height and width
        - Centered

      Container (Optional)
      : - Border - 1px solid [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)
        - Padding - 16px 20px 20px 20px

    contents:
    - type: wide image
      src: ./assets/calendar-blue-redlines-2x.png



  - type: two column
    text: |
      ### Date States (Ink Blue)

      Sizing
      : - 40px width
        - 35px height

      Dates
      : - Basic UI Text; [White](/design/c/colors/v2.1.0/#rd-white)
        - Centered

      Dates (hover)
      : - Circle size, 32 x 32 pixel
        - Circle background, [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)
        - Circle border-radius, 16px
        - Circle opacity, 0.3

      Current
      : - Bold UI Text; [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Circle size, 32 x 32 pixel
        - Circle background, [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle border-radius, 16px

      Current (hover)
      : - Bold UI Text; [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle background, [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle opacity, 0.3

      Disabled State
      : - Basic UI Text; [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)

      Selected State
      : - Basic UI Text; [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle size, 32 x 32 pixel
        - Circle border, 1px solid [White](/design/c/colors/v2.1.0/#rd-white)
        - Circle border-radius, 16px
        - Circle opacity, 0.7

    contents:
    - type: wide image
      src: ./assets/date-states-blue-2x.png


changelog:
  - version: 2.0.0-beta.1
    changes: Rebranded version
  - version: 1.0.0-beta.1
    changes: Initial version
---
