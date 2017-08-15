---
layout: component-yaml
title: Calendar
section: Components
redirect_from: /docs/ui-components/calendar/
status: deprecated
version: 2.0.0-beta.5
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
  - name: calendar_2.5.sketch
    link: ./assets/calendar_2.5.sketch
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
  - White and blue variants
  - Secondary indicator style for use cases like an assignment calendar
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
      : - [UI Heading - Section - Small](/design/c/typography/v2.0.0/#rd-ui-headings-section-basic), [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - 8px horizontal padding
        - 40px height
        - 8px margin below

      Controls
      : - chevron-back-18 and chevron-next-18 icons
        - [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray) by default, [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal) on hover, [Alto](/design/c/colors/v2.1.0/#rd-alto) when disabled
        - Each icon centered in a 40px square
        - 8px margin below

      Days of the Week
      : - [UI Text - Small](/design/c/typography/v2.0.0/#rd-ui-text-small), [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Each day letter centered in a 40px square

      Container (Optional)
      : - 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete) border
        - 16px space above, 20px space on all other sides

    contents:
    - type: wide image
      src: ./assets/calendar-white-redlines-2x.png

  - type: two column
    text: |
      ### Date States (White)

      Basic Date
      : - [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic) in [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Centered in 40px squares

      Hovered
      : - Circle diameter is 32px
        - [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight) background color
        - Applies to the current date or a date with secondary indicator as well
        - Does not apply to a selected or disabled date

      Current
      : - 38px square outline, including borders
        - 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete) border

      Selected
      : - Font becomes [White](/design/c/colors/v2.1.0/#rd-white) [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)
        - Background circle becomes [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - No hover effect

      Disabled
      : - Font color is [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - No hover effect

      Secondary Indicator
      : - Circle diameter is 32px, including borders
        - 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete) border

    contents:
      - type: wide image
        src: ./assets/date-states-white-2x.png

  - type: two column
    text: |
      ### Calendar (Ink Blue)

      Sizing and spacing
      : - Matches the white variation

      Font colors
      : - All fonts and icons are [White](/design/c/colors/v2.1.0/#rd-white) by default
        - [Concrete](/design/c/colors/v2.1.0/#rd-concrete) is the hover color for the controls
        - [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue) is the disabled color

      Container (Optional)
      : - 1px solid [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue) border

    contents:
    - type: wide image
      src: ./assets/calendar-blue-redlines-2x.png



  - type: two column
    text: |
      ### Date States (Ink Blue)

      Sizing and spacing
      : - Same as white variation

      Dates
      : - [White](/design/c/colors/v2.1.0/#rd-white) font color

      Dates (hover)
      : - Same as white

      Current
      : - 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete) border

      Current (hover)
      : - Same as white

      Selected (no hover)
      : - Font is [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal) [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)
        - Circle color is [White](/design/c/colors/v2.1.0/#rd-white)

      Disabled (no hover)
      : - [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue) font color

      Secondary Indicator
      : - [White](/design/c/colors/v2.1.0/#rd-white) text
        - Circle border is 1px solid [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Secondary Indicator (hover)
      : - [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal) text
        - Circle color is [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)

    contents:
    - type: wide image
      src: ./assets/date-states-blue-2x.png


changelog:
  - version: 2.0.0-beta.5
    changes: |
      - UPDATED: Redlines to link to dependencies, clarify specs
  - version: 2.0.0-beta.4
    changes: |
      - UPDATED: Redline images HEX to color labels, "35px" typo, and October to November.
      - CHANGED: "Days of the Week" to Small UI Text and Ink Blue hover states to match white version.
  - version: 2.0.0-beta.3
    changes: Removed old functionality text and redundant specs in ink blue redlines.
  - version: 2.0.0-beta.2
    changes: Added square box to indicate current date. Updated style for selected date.
  - version: 2.0.0-beta.1
    changes: Rebranded version
  - version: 1.0.0-beta.1
    changes: Initial version
---
