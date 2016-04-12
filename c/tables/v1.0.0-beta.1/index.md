---
layout: component-yaml
title: Tables
section: Components
status: active
version: 1.0.0-beta.1
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  Provides standard designs and layouts for static (i.e. CSS-only) tables.
features:
  - Standard and small sizes
  - Hoverable rows
  - Integration with inputs and buttons
  - Secondary data line within each cell
  - Three responsive strategies
usage_guidelines: |
  Every instance of a static table should use this component. For more complex tables with sorting, filtering, etc. see the Interactive Table component.

blocks:
  - type: section
    name: Basic Table

  - type: two column
    text: |
      The basic table does what you would expect, presenting data in a static tabular format with headers.

      Columns can be left, center, or right aligned.

      Multiline cell content should be avoided where possible, but is allowed if necessary. Content should be top aligned.
    contents:
      - type: wide image
        src: ./assets/basic.table.png

  - type: section
    name: Small Table

  - type: two column
    text: |
      A more compact table for situations where the table needs to fit in a smaller space or a large amount of data needs to be presented.

      Multiline cell content should be avoided where possible, but is allowed if necessary. Content should be top aligned.
    contents:
      - type: narrow image
        src: ./assets/small.table.png

  - type: section
    name: Advanced Features

  - type: two column
    text: |
      ### Hoverable Rows
      There is an option to highlight the currently hovered row.
    contents:
      - type: wide image
        src: ./assets/basic.table.hoverable.png

  - type: two column
    text: |
      ### Inputs and Buttons
      Forms can include smaller form inputs or buttons if necessary.
    contents:
      - type: wide image
        src: ./assets/inputs.buttons.png

  - type: two column
    text: |
      ### Secondary Row
      Cells may contain a secondary line of related data below the main entry.

      This option should not be used if any of the cells wrap to two or more lines on content.
    contents:
      - type: wide image
        src: ./assets/basic.table.secondary.png

  - type: section
    name: Responsive

  - type: two column
    text: |
      There are several strategies for ensuring a table works at each breakpoint.

  - type: two column
    text: |
      ### Removing columns
      If you determine that certain fields in your table are optional in nature, you can simply remove them to reduce the overall table width until it fits in mobile viewports.
    contents:
      - type: narrow image
        src: ./assets/responsive.remove.png

  - type: two column  
    text: |
      ### Combining fields
      Depending on the type of information presented, a simple way to fit tables into a smaller viewport is combining multiple columns into one. For example, dedicated First and Last name columns can be joined under 'Name'.
    contents:
      - type: narrow image
        src: ./assets/responsive.combine.png

  - type: two column
    text: |
      ### Secondary row
      Less important information may be moved from a dedicated column to the [secondary row option](#secondary-row).

      This method should not be used if any cell might wrap to two or more lines.
    contents:
      - type: narrow image
        src: ./assets/responsive.secondary.png

  - type: two column
    text: |
      ### Switching designs
      For larger, more complex tables with a lot of non-optional data it may be necessary to change from using a table to some other display strategy in the mobile view. For example, you may adopt a list view where each item  can be opened up to view its complete dataset.

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
