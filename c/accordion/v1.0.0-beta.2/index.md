---
layout: component-yaml
title: Accordion
section: Components
version: 1.0.0-beta.2
status: active
implemented: false
people:
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/accordion.sketch

tagline: |
  Presents information in a space-efficient format where user's can expand the specific content they are interested in.
features:
  - Standard trigger guidance
  - General layout guidance
  - Two standard interaction methods
usage_guidelines: |
  Accordions are a good choice for sets of content which should be easily accessible but not necessarily immediately visible. Users are enabled to drill into the specific content they are interested in.

blocks:
  - type: section
    name: Triggers

  - type: two column
    text: |
      Triggers should always follow the pattern of a down pointing chevron for the closed state and an up pointing chevron for the open state. There are two specific styles that are commonly used, but the pattern can be adapted if needed by your specific use case.
    contents:
      - type: narrow image
        src: ./assets/triggers.png

  - type: section
    name: Usage guidelines

  - type: two column
    text: |
      ### Alignment
      Content should be aligned to it's own column that matches the heading of the accordion. Do not align content to the trigger.
    contents:
      - type: wide image
        src: ./assets/alignment.png

  - type: two column
    text: |
      ### Heading content
      Headings may be as simple as basic text or include more complex and interactive elements that represent or control the contents of the accordion.
    contents:
      - type: wide image
        src: ./assets/headings.png

  - type: section
    name: Auto-collapsing

  - type: two column
    text: |
      By default accordions allow any number and combination of sections to be open at the same time. This can be good for short content or situations where users would want to compare information from multiple sections.

      If it would be confusing or unwieldy to have more than one section open the accordion can auto-collapse sections so that only one is open at any time.
    contents:
      - type: narrow image
        src: ./assets/default.interaction.png
        caption: The default interaction allows multiple sections to be open simultaneously.
      - type: narrow image
        src: ./assets/auto.collapse.interaction.png
        caption: This can be changed to automatically close other sections when the user opens a new section.


changelog:
  - version: 1.0.0-beta.2
    changes: |
      - REMOVED: Incorrect usage guidelines
      - ADDED: Documentation around Auto-collapsing
  - version: 1.0.0-beta.1
    changes: Initial version
---
