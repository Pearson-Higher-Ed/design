---
layout: component-yaml
title: Presentation Strategies
section: Components
version: 1.0.0-beta.1
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  This component provides several standard strategies for presenting content within a layout template.
features:
  - Support for common layout patterns
  - Full integration with the standard templates
usage_guidelines: |
  All content within a template should specify a presentation strategy to use.
description: |
  Layout [Templates](/design/c/templates/beta) help you structure a page at a high level and chunk it into major content areas. Presentation strategies operate at one level lower, helping to actually fill out those content areas in a standard and rational way.

blocks:
  - type: section
    name: Overview

  - type: two column
    text: |
      ### Stacking
      Similarly to the templates themselves, strategies can be combined into stacks within a given content area.

      ### Spacing
      Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.

      ### Responsive behavior
      Strategies don't include inherent responsive behavior, preferring instead to delegate to their containing templates. More advanced designs may change between various strategies at the [standard breakpoints](/design/c/breakpoints), however.

    contents:
      - type: narrow image
        src: ./assets/strategies1.png
        caption: Examples of presentation strategies (the dashed boxes) being stacked in a single column template.
      - type: narrow image
        src: ./assets/strategies2.png
        caption: Strategies are designed to work regardless of their container size, as seen in this two column example.

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
