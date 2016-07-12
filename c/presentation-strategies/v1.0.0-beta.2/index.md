---
layout: component-yaml
title: Presentation Strategies
section: Components
version: 1.0.0-beta.2
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
      ### Content areas
      Each strategy defines the location of one or more content areas which should each contain a single piece of content.

      ### Stacking
      Similarly to the templates themselves, strategies can be combined into stacks within a given content area.

      ### Spacing
      Stacked strategies have the same spacing options as templates: Directly Adjoining, Small Gap, and Large Gap.

      ### Responsive behavior
      Strategies don't include inherent responsive behavior, preferring instead to leave that up to their containing templates. More advanced designs may change between various strategies at the [standard breakpoints](/design/c/breakpoints), however.

    contents:
      - type: narrow image
        src: ./assets/strategies1.png
        caption: Examples of presentation strategies (the dashed boxes) being stacked in a single column template (green box). The content areas are denoted as pink boxes.
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

  - type: section
    name: Redlines

  - type: two column
    text: |
      Default Strategy
      : - Apply no specific positioning, just follow the standard left-aligned browser flow

      Centered Strategy
      : - Center the content item horizontally within the container

      Left/Right Strategy
      : - One content item is left aligned and the other is right aligned
        - Both content items are vertically aligned to their top edges

      Basic Grid Strategy
      : - Each content area is either 50%, 33.333333%, or 25% wide (including a gutter's width)
        - Small gutters are 10px, large are 20px
        - Negative margins or a similar technique should be used to position the left and right edges of the content areas directly against the edge of the container

      Spacing
      : - Directly adjoining strategies should have no gap between them
        - Small Gap is 40px total
        - Large gap is 80px total
    contents:
      - type: narrow image
        src: ./assets/default.png
        caption: The default presentation strategy.
      - type: narrow image
        src: ./assets/centered.png
        caption: The centered presentation strategy.
      - type: narrow image
        src: ./assets/left-right.png
        caption: The left/right presentation strategy.
      - type: narrow image
        src: ./assets/basic-grid4.png
        caption: The basic grid presentation strategy in a four column mode with small gutters.

changelog:
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Updated documentation text.
      - ADDED: Complete redlines.
  - version: 1.0.0-beta.1
    changes: Initial version
---
