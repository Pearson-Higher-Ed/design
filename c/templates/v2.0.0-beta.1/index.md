---
layout: component-yaml
title: Templates
section: Components
version: 2.0.0-beta.1
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
      Templates are designed to work at each breakpoint, adjusting the arrangement of content areas as appropriate. For more complex designs you may specify different templates for each breakpoint.
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
      The simplest page template, it takes up the full 12 columns available at every breakpoint.
    contents:
      - type: wide image
        src: ./assets/single.column.png
        caption: The single column layout.

  - type: section
    name: Two Column
    exports:
      - Two column

  - type: two column
    text: |
      This template devotes 8 columns to a main content area and the remaining 4 to a sidebar which appears on either side (prefer the right where it makes sense). At medium and smaller breakpoints the content areas stack (sidebar on top if it was to the left of the content area, underneath if it was to the right).
    contents:
      - type: wide image
        src: ./assets/two.column.png
        caption: The two column layout at larger breakpoints.
      - type: narrow image
        src: ./assets/two.column.responsive.png
        caption: Responsive view with the main content on top (occurs with a right-hand sidebar).
      - type: narrow image
        src: ./assets/two.column.responsive.alt.png
        caption: Sidebar content on top (occurs with a left-hand sidebar).

  - type: section
    name: Static Column
    exports:
      - Static column

  - type: two column
    text: |
      The static column presents a single column of fixed width which is centered in the page. At smaller breakpoints it transitions to full width fluid behavior. This column comes in two different sizes (small at 480px and large at 800px) and is handy for presenting modals or small pieces of content like sign in forms.
    contents:
      - type: wide image
        src: ./assets/static.column.png
        caption: A column of static width at larger viewports.

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
      Dimensions
      : - Full [12 column](/design/c/grid/v1.0.0-beta.2/#rd-grid) width at all breakpoints

      Responsive
      : - Maintain full [12 column](/design/c/grid/v1.0.0-beta.2/#rd-grid) width
    contents:
      - type: wide image
        src: ./assets/single.column.png
        caption: The single column template.

  - type: two column
    text: |
      ### Two column
      Dimensions
      : - Main area is [8 grid columns](/design/c/grid/v1.0.0-beta.2/#rd-grid) wide, sidebar is [4 columns](/design/c/grid/v1.0.0-beta.2/#rd-grid)
        - Prefer to locate the sidebar on the right, but both are acceptable

      Responsive
      : - At [medium](/design/c/breakpoints/v1.0.0/#rd-medium) and smaller breakpoints stack the two columns
        - The two content areas should stack based on their order in the DOM, e.g. a left hand sidebar would end up on top in a responsive view.
    contents:
      - type: wide image
        src: ./assets/two.column.png
        caption: The two column template.

  - type: two column
    text: |
      ### Static column
      Dimensions
      : - The large size is 800px wide at [large](/design/c/breakpoints/v1.0.0/#rd-large) breakpoints and larger
        - The small size is 480px wide at [medium](/design/c/breakpoints/v1.0.0/#rd-medium) breakpoints and larger

      Responsive
      : - Below the breakpoints mentioned above, both sizes become [10 grid columns](/design/c/grid/v1.0.0-beta.2/#rd-grid) wide and centered
        - Below the [small](/design/c/breakpoints/v1.0.0/#rd-small) breakpoint both sizes become the full [12 column](/design/c/grid/v1.0.0-beta.2/#rd-grid) width
    contents:
      - type: wide image
        src: ./assets/static.column.png
        caption: The static column template.

  - type: style table
    styles:
      - Single column
      - Two column
      - Static column

changelog:
  - version: 2.0.0-beta.1
    changes: |
      - REMOVED: Option for two column layout to switch DOM order of main and sidebar ares.
      - UPDATED: Uses latest Grid dependency.
  - version: 1.0.0
    changes: Initial version.
---
