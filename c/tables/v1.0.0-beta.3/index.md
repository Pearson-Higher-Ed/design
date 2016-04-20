---
layout: component-yaml
title: Tables
section: Components
status: active
version: 1.0.0-beta.3
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

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Gf0yr4nsNXLBJIFEHFDVYeI6495Nrwa1caKgvaM-7Bs/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/tables.mockup.sketch
  - name: .ai mockup
    link: ./assets/tables.mockup.ai

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
      There are a couple special features available for the basic table (not the small size).

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

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic Table

      Header
      : - 20px horizontal padding
        - 12px vertical padding
        - Brightly lit (#e6e6e6) background
        - Bold Label typography
        - 1px solid Hairline Gray (#d0d0d0) border around each cell
        - Vertically aligned to the center (if a header wraps to two columns)

      Rows
      : - 20px horizontal padding
        - 14px vertical padding
        - Alternate White (#ffffff) and Dirty Ice (#f8f8f8) background colors
        - 1px solid Hairline Gray (#d0d0d0) top/bottom border
        - Basic Label typography
        - Vertically align to the top (if a cell wraps to two or more columns)

      Secondary Row
      : - Basic Label, secondary color
        - 3px below main row

      Inputs/Buttons
      : - Inputs and buttons are vertically centered in the row
        - They don't push out the 14px vertical padding, however

    contents:
      - type: wide image
        src: ./assets/redlines.basic.table.png
      - type: wide image
        src: ./assets/redlines.basic.table.secondary.png
      - type: wide image
        src: ./assets/redlines.inputs.buttons.png

  - type: two column
    text: |
      ### Small Table

      Header
      : - 12px horizontal padding
        - 10px vertical padding
        - Otherwise same as basic table

      Rows
      : - 12px horizontal padding
        - 8px vertical padding
        - Small Label typography
        - Otherwise same as basic table
    contents:
      - type: narrow image
        src: ./assets/redlines.small.table.png





changelog:
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Redlines
      - ADDED: Sketch and AI mockup files
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Rows are striped
      - REMOVED: Hover option
  - version: 1.0.0-beta.1
    changes: Initial version
---
