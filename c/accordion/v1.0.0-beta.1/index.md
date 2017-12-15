---
layout: component-yaml
title: Accordion
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
people:
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/application-header.mockup.sketch
  - name: .ai mockup
    link: ./assets/application-header.mockup.ai

tagline: |
  Presents important feedback or information to users either in response to their actions or upon page load.
features:
  - Modes for page load and dynamic presentation
  - Animated presentation
  - Error, information, and confirmation styles
usage_guidelines: |
  Simple confirmation acknowledgements that don't require additional detail should just use a confirmation button. If an error occurs or additional information is needed to clarify then the appropriate alert style may be dynamically presented.

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

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
