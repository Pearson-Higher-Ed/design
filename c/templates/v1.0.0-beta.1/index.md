---
layout: component-yaml
title: Templates
section: Components
version: 1.0.0-beta.1
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
    link: https://docs.google.com/a/pearson.com/document/d/1ThXm4SGwyPb3wtlJGmOWLTRCIWERcLsjtP-jlkGjwAY/edit?usp=sharing

tagline: |
  A standard set of page structures for a variety of use cases.
features:
  - Consistent dimensions for a variety of useful page structures
  - Responsive strategies for each template
  - Accessible implementation
usage_guidelines: |
  Every page should utilize one or more of these templates to create it's high level structure.
description: |
  Templates provide a way of organizing and structuring the content of a page in a consistent and responsive way. There are a variety of templates available for everything from simple single column presentations to more complicated multi-column structures.

  Several [Presentation Strategies](/design/c/presentation-strategies/beta) are available for organization within the content areas provided by the layout templates.

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
      Templates define set content areas which are designed to work with the [Presentation Strategies](/design/c/presentation-strategies/beta) component for actually filling them with content.

      ### Responsive Behavior
      Templates are designed to work at each breakpoint, adjusting the arrangement of content areas as appropriate. For more complex designs you may specify different templates for each breakpoint.
    contents:
      - type: narrow image
        src: ./assets/stacked.png
        caption: A page consisting of three stacked layouts.
      - type: narrow image
        src: ./assets/spacing.png
        caption: The three spacings available for stacked templates. (Shown with container width borders.)

  - type: section
    name: Single Column

  - type: two column
    text: |
      The simplest page template, it takes up the full 12 columns available at every breakpoint. The standard Application Header is automatically included outside the grid. There is an option to position the content area directly below the header or to include a standard amount of spacing.
    contents:
      - type: wide image
        src: ./assets/single.column.png
        caption: The single column layout with optional spacing after the header.

  - type: section
    name: Two Column

  - type: two column
    text: |
      This template devotes 8 columns to a main content area and the remaining 4 to a sidebar which appears on either side (prefer the right where it makes sense). At medium and smaller breakpoints the content areas stack, with the option to put the sidebar above or below the main content area.
    contents:
      - type: wide image
        src: ./assets/two.column.png
        caption: The two column layout at larger breakpoints.
      - type: narrow image
        src: ./assets/two.column.responsive.png
        caption: Responsive view with the main content on top.
      - type: narrow image
        src: ./assets/two.column.responsive.alt.png
        caption: Sidebar content on top.

  - type: section
    name: Static Column

  - type: two column
    text: |
      The static column presents a single column of fixed width which is centered in the page. At smaller breakpoints it transitions to full width fluid behavior. This column comes in two different sizes (small at 480px and large at 800px) and is handy for presenting modals or small pieces of content like sign in forms.
    contents:
      - type: wide image
        src: ./assets/static.column.png
        caption: A column of static width at larger viewports.


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version.
---
