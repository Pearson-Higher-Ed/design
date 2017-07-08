---
layout: component-yaml
title: Presentation Strategies
section: Components
version: 1.1.0-beta.1
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Qqu-JHvDYsNAqUP3rFaNkqR0c2Si9g3ephR7qhZ12u4/edit?usp=sharing

tagline: |
  This component provides several standard strategies for presenting content within a layout template.
features:
  - Support for common layout patterns
  - Full integration with the standard templates
usage_guidelines: |
  All content within a template should specify a presentation strategy to use.
description: |
  Layout [Templates](/design/c/templates/beta) help you structure a page at a high level and chunk it into major layout areas. Presentation strategies operate at one level lower, helping to actually fill out those layout areas in a standard and rational way.

blocks:
  - type: section
    name: Overview

  - type: two column
    text: |
      ### Content areas
      Each strategy defines the location of one or more content areas which should each contain a single piece of content.

      ### Stacking
      Similarly to the templates themselves, strategies can be combined into stacks within a given template area.

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
    exports:
      - Default strategy

  - type: two column
    text: |
      The default strategy is the normal browser layout flow of left aligning content.
    contents:
      - type: narrow image
        src: ./assets/default.png

  - type: section
    name: Centered
    exports:
      - Centered strategy

  - type: two column
    text: |
      The centered strategy simply centers its contents within the containing area.
    contents:
      - type: narrow image
        src: ./assets/centered.png
      - type: narrow image
        src: ./assets/centered-example.png

  - type: section
    name: Left/Right
    exports:
      - Left/Right strategy

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
    exports:
      - Basic Grid strategy

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
    name: Fixed Width Grid

  - type: two column
    text: |
      In situations where the contents of a grid have both a fixed width and height, the fixed width grid arranges items with a standard gutter and will automatically break them into the appropriate number of columns.

      If there are not enough items to fill an entire row, the available items may be centered in the remaining space.
    contents:
      - type: narrow image
        src: ./assets/centered-grid1.png
        caption: If the number of items does not occupy an entire row, they are centered in the container
      - type: narrow image
        src: ./assets/centered-grid2.png
        caption: Two items still have not filled up an entire row
      - type: narrow image
        src: ./assets/centered-grid3.png
        caption: A maximum of three items will fit into this row, they are still centered within the container however
      - type: narrow image
        src: ./assets/centered-grid4.png
        caption: Once the items wrap to a second row additional items are positioned to the left first

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
        - Each item should have the same height
        - Items are filled in a left-to-right and then top-to-bottom order

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


  - type: style table
    styles:
      - Default strategy
      - Centered strategy
      - Left/Right strategy
      - Basic Grid strategy

changelog:
  - version: 1.1.0-beta.1
    changes: |
      - ADDED: Centered grid strategy
  - version: 1.0.0
    changes: Initial version
---
