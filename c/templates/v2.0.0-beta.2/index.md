---
layout: component-yaml
title: Templates
section: Components
version: 2.0.0-beta.2
status: deprecated
implemented: false
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
    link: https://docs.google.com/a/pearson.com/document/d/1_ipKmABGA_ANqpqwt6qFhcB_TvduFdSBELPfXmYABFw/edit?usp=sharing
dependencies:
  - name: grid
    version: 1.0.0
  - name: breakpoints
    version: 1.0.0

tagline: |
  A standard set of page structures for a variety of use cases.
features:
  - Consistent dimensions for a variety of useful page structures
  - Responsive strategies for each template
  - Accessible implementation
usage_guidelines: |
  Every page should utilize one or more of these templates to create its high level structure.
description: |
  Templates provide a way of organizing and structuring the content of a page in a consistent and responsive way. There are a variety of templates available for everything from simple single column presentations to more complicated multi-column structures.

  Several [Presentation Strategies](/design/c/presentation-strategies/beta) are available for organization of content within the layout areas provided by each templates.

blocks:
  - type: section
    name: Template usage

  - type: two column
    text: |
      ### Stacking
      Multiple templates may be stacked to create a single page.

      ### Spacing
      The joints can either abut directly or use the predefined standard/large spacings.

      ### Backgrounds
      Each template may specify it's own full width border (color or image) or let the default background show through.

      ### Borders
      Stacked templates may also specify separating borders, either container width or full viewport width.

      ### Presentation Strategies
      Templates define set layout areas which are designed to work with the [Presentation Strategies](/design/c/presentation-strategies/beta) component for actually filling them with content.

      ### Responsive Behavior
      Each template can be used at any breakpoint, although some will be more suited to larger or smaller viewports. Designers should specify which template applies to each breakpoint when designing a page.
    contents:
      - type: narrow image
        src: ./assets/stacked.png
        caption: A page consisting of three stacked layouts. The gray areas are where full width backgrounds would go.
      - type: narrow image
        src: ./assets/spacing.png
        caption: The three spacings available for stacked templates. (Shown with container width borders.)

  - type: section
    name: Single Column
    exports:
      - Single column

  - type: two column
    text: |
      ### 12 column
      The simplest page template, it takes up the full 12 columns available at every breakpoint.
    contents:
      - type: wide image
        src: ./assets/single.column.png
        caption: The 12 column layout.

  - type: two column
    text: |
      ### 10 Column
      Use this slightly narrower single column for content which would look stretched if it took up all 12 columns.
    contents:
      - type: wide image
        src: ./assets/10.column.png
        caption: A 10 column template.

  - type: two column
    text: |
      ### Static Columns
      The static column presents a single column of fixed width which is centered in the page. It comes in three different sizes (small at 440px, medium at 600px, and large at 800px) and is handy for presenting modals or small pieces of content like sign in forms.
    contents:
      - type: wide image
        src: ./assets/static.column.png
        caption: A column of static width at larger viewports.

  - type: section
    name: Two Column
    exports:
      - Two column

  - type: two column
    text: |
      ### 4/8 Template
      This template devotes 8 columns to a main content area and the remaining 4 to a sidebar which appears on either side (prefer the right where it makes sense).
    contents:
      - type: wide image
        src: ./assets/two.column.png
        caption: The 4/8 column template with the sidebar on the right.

  - type: two column
    text: |
      ### 6/6 template
      Evenly splits the page between two equal columns.
    contents:
      - type: wide image
        src: ./assets/6.6.column.png
        caption: The 6/6 column template provides two equal width content areas

  - type: section
    name: Three Column

  - type: two column
    text: |
      ### 4/4/4 Template
      Evenly splits the page into three equal columns.
    contents:
      - type: wide image
        src: ./assets/4.4.4.column.png
        caption: Example of the three column template.



  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Shared Features
      Spacing
      : - Directly adjoining templates have no vertical space between them
        - Small Gap is 40px total
        - Large Gap is 80px total

      Backgrounds & Borders
      : - Each template section may include a full width border (either color or image)
        - Two template sections may be divided with a border that is either full page width or just [12 columns](/design/c/grid/v1.0.0-beta.2/#rd-grid) wide
    contents:
      - type: narrow image
        src: ./assets/stacked.png
        caption: Stacked templates with background areas indicated in gray.
      - type: narrow image
        src: ./assets/spacing.png
        caption: The three types of spacing available with grid width borders.

  - type: two column
    text: |
      ### Single column
      12 Column
      : - Full [12 column](/design/c/grid/v1.0.0/#rd-grid) width at all breakpoints

      10 Column
      : - Occupies the interior [10 columns](/design/c/grid/v1.0.0/#rd-grid) at all breakpoints

      Static Column
      : - Occupies a fixed width which is centered in the page
        - Small is 440px, medium is 600px, large is 800px
        - These should not be used at viewports that are too narrow

    contents:
      - type: wide image
        src: ./assets/single.column.png
        caption: The single column template. Each variation simply offers a different width which may be dynamic based on the viewport or static.

  - type: two column
    text: |
      ### Two column
      4/8 Template
      : - Main area is [8 grid columns](/design/c/grid/v1.0.0/#rd-grid) wide, sidebar is [4 columns](/design/c/grid/v1.0.0/#rd-grid)
        - Prefer to locate the sidebar on the right, but both are acceptable

      6/6 Template
      : - The two content areas each occupy [6 grid columns](/design/c/grid/v1.0.0/#rd-grid)

    contents:
      - type: wide image
        src: ./assets/two.column.png
        caption: An example two column template that divides the page into two content areas.

  - type: two column
    text: |
      ### Three column
      4/4/4 Template
      : - Three content areas each occupy [4 grid column](/design/c/grid/v1.0.0/#rd-grid)
    contents:
      - type: wide image
        src: ./assets/4.4.4.column.png
        caption: Example of the three equal column template.

  - type: style table
    styles:
      - Single column
      - Two column
      - Static column

changelog:
  - version: 2.0.0-beta.2
    changes: |
      - CHANGED: Updated to no longer require a full responsive specification for each template. Instead designers can mix and match different templates at each breakpoint.
      - CHANGED: The 480px wide static column is now 440px wide.
      - ADDED: 600px static column template.
      - ADDED: Three equal column template.
  - version: 2.0.0-beta.1
    changes: |
      - REMOVED: Option for two column layout to switch DOM order of main and sidebar ares.
      - UPDATED: Uses latest Grid dependency.
  - version: 1.0.0
    changes: Initial version.
---
