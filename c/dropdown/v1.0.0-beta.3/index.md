---
layout: component-yaml
title: Dropdown
section: Components
version: 1.0.0-beta.3
status: deprecated
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: ""

dependencies:
  - name: typography
    version: 2.0.0
  - name: buttons
    version: 1.0.0
  - name: colors
    version: 2.0.0

tagline: |
  A simple component for presenting multiple options in a condensed space.
features:
  - Can be triggered by a link or button
  - Standard icon layout
  - Accessible
usage_guidelines: |
  Use this component when the options listed represent actions or navigation destinations. Prefer the standard [select inputs](/design/c/inputs/#select) for all other use cases.

blocks:
  - type: section
    name: Dropdown menu

  - type: two column
    text: |
      Opening a dropdown presents a simple list of textual options. These may be divided into logically related groups, and a single option may be indicated as selected with a checkmark.
    contents:
      - type: narrow image
        src: ./assets/dropdown.png
        caption: An example dropdown menu.

  - type: section
    name: Dropdown Triggers

  - type: two column
    text: |
      Dropdowns can be indicated by an icon only if situated within an appropriate context like a course card or over a color picker. In other situations a text label should be used.

      If the trigger item is too far to the right the dropdown will shift to be right aligned.
    contents:
      - type: narrow image
        src: ./assets/triggers-text.png
        caption: Example of a textual dropdown trigger.
      - type: narrow image
        src: ./assets/triggers-icon.png
        caption: Icon only triggers can be used in situations where there is sufficient context.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Dimensions
      : - Standard width is 220px

      Spacing
      : - 16px top and bottom padding
        - 30px left padding, 26px right padding
        - 8px between items

      Hover
      : - Hovered item has a Moonlight background that extends 4px above and below the text

      Divider
      : - Groups may be divided by a 1px solid Alto line
        - The divider line should have 12px above/below it

      Border
      : - 1px solid Concrete
        - 2px border radius

      Alignment
      : - Left aligned by default
        - Right aligned if there is not room within the viewport for the dropdown

      Triggers
      : - dropdown-open-18 for the icon
        - UI Text - Basic, for any text used
        - 4px spacing between trigger and dropdown
    contents:
      - type: wide image
        src: ./assets/redlines.dropdown.png

changelog:
  - version: 1.0.0-beta.3
    changes: |
      - CHANGED: Uses new visual style.
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Icon to use existing style
      - ADDED: Option to include dividers between options
  - version: 1.0.0-beta.1
    changes: Initial Version
---
