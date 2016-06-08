---
layout: component-yaml
title: Presentation Strategies
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  This component provides several standard stragies for presenting content within a layout template.
features:
  - Fully responsive, scales with browser width
  - Variable width can be set
  - Keyboard accessible
  - Tab scope constrained to modal
  - Focus memory on modal entry/exit
usage_guidelines: |
  Every instance of a modal element should come from this component.

blocks:
  - type: section
    name: Introduction

  - type: two column
    text: |
      Presentation strategies offer several different methods for organizing content within the content areas of layout templates. Similarly to the templates themselves, strategies can be combined into stacks within a given content area.

    contents:
      - type: narrow image
        src: ./assets/strategies1.png
      - type: narrow image
        src: ./assets/strategies2.png

  - type: section
    name: Default

  - type: two column
    text: |
      The default strategy is the normal browser layout flow of left aligning content.
    contents:
      - type: narrow image
        src: ./assets/default.png

  - type: section
    name: Centered

  - type: two column
    text: |
      The centered strategy simply centers it's contents within the containing area.
    contents:
      - type: narrow image
        src: ./assets/centered.png
      - type: narrow image
        src: ./assets/centered-example.png

  - type: section
    name: Left/Right

  - type: two column
    text: |
      This strategy aligns one chunk of content to the left and another chunk to the right.
    contents:
      - type: narrow image
        src: ./assets/left-right.png
      - type: narrow image
        src: ./assets/left-right-example.png

  - type: section
    name: Basic Grid

  - type: two column
    text: |
      The basic grid strategy arranges equally sized chunks of content into two, three, or four rows. Each chunk should maintain the same height. The gutter size is configurable to be either small (10px) or large (20px). Chunks fill the content area in a left-to-right, top-to-bottom pattern.
    contents:
      - type: narrow image
        src: ./assets/basic-grid-small.png
      - type: narrow image
        src: ./assets/basic-grid-large.png
      - type: wide image
        src: ./assets/basic-grid-example.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
