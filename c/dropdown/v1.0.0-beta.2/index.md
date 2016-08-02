---
layout: component-yaml
title: Dropdown
section: Components
version: 1.0.0-beta.2
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: ""

dependencies:
  - name: typography
    version: 1.0.0
  - name: buttons
    version: 1.0.0

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
    name: Basic Dropdown

  - type: two column
    text: |
      The basic dropdown opens into a simple list of textual options. Icons may be prepended at each line.

      Dropdowns may be triggered by labels (except the bold variety) or buttons.

      If the trigger item is too far to the right the dropdown will shift to be right aligned.
    contents:
      - type: wide image
        src: ./assets/basic.dropdown.png
        caption: A basic label dropdown; The hover effect for an item in the dropdown; Dropdown list with icons.
      - type: narrow image
        src: ./assets/button.trigger.png
        caption: Basic button dropdown.
      - type: narrow image
        src: ./assets/right.aligned.png
        caption: Right aligned dropdown behavior.

  - type: two column
    text: |
      ### Divider lines
      Options within a dropdown may be grouped using divider lines.
    contents:
      - type: narrow image
        src: ./assets/divider.line.png
        caption: A dropdown with divider lines.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Dimensions
      : - Standard widths are 180px or 250px
        - Width can optionally be fluid below these sizes, with a minimum width that matches the triggering label or button

      Spacing
      : - 10px top and bottom padding
        - 12px horizontal padding
        - 8px between items
        - 8px between icons and options

      Alignment
      : - Left aligned by default
        - Right aligned if there is not room within the viewport for the dropdown

      Icons
      : - Angle-down, unless the label text is a direct action (e.g. "Copy This Course" or "Post Status")

changelog:
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Icon to use existing style
      - ADDED: Option to include dividers between options
  - version: 1.0.0-beta.1
    changes: Initial Version
---
