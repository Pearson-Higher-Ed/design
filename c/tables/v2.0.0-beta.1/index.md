---
layout: component-yaml
title: Tables
section: Components
status: active
version: 2.0.0-beta.1
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com

tagline: |
  Provides standard designs and layouts for static (i.e. CSS-only) tables.
features:
  - Standard and small sizes
  - Hoverable rows
  - Integration with inputs and buttons
  - Secondary data line within each cell
  - Three responsive strategies
  - Sortable columns <span class="js-tag">JS</span>
  - Selectable rows and a toolbar <span class="js-tag">JS</span>
usage_guidelines: |
  Every instance of a static table should use this component. For more complex tables with sorting, filtering, etc. see the Interactive Table component.

dependencies:
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Gf0yr4nsNXLBJIFEHFDVYeI6495Nrwa1caKgvaM-7Bs/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/tables.mockup.sketch

blocks:
  - type: section
    name: Basic Table

  - type: two column
    text: |
      The basic table does what you would expect, presenting data in a static tabular format with headers.

      Columns can be left, center, or right aligned.

      Multiline cell content should be avoided where possible. Content should be top aligned.

      Note that headers are required for accessibility compliance.
    contents:
      - type: wide image
        src: ./assets/basic.table.png

  - type: section
    name: Interactive Features

  - type: two column
    text: |
      The basic table can be enhanced with some more advanced features to handle more complicated use cases.

  - type: two column
    text: |
      ### Sortable Columns
      Clicking on a column heading sorts the table by the values in that column. Selecting the same column heading twice alternates between ascending and descending order.

      If a table has a default sort order it should display the relevant icon at initial presentation.

      Sort icon positioning correlates with the alignment of the column it belongs to. A left-aligned column gets the icon on the right of the label, etc.
    contents:
      - type: wide image
        src: ./assets/sortable.table.hover.png
        caption: Example of a sortable table showing the header hover state.


  - type: two column
    text: |
      ### Selectable Rows
      In cases where users may need to select and act on one or more rows you may add a checkbox column and include a toolbar at the top of the table.

      Clicking or tapping any non-interactive part of a row will select that row. Holding down shift and selecting a second row will select all the intervening rows as well.

    contents:
      - type: wide image
        src: ./assets/Select Table Hover.png
      - type: wide image
        src: ./assets/Caption Controls.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic Table

      Header
      : - 20px horizontal padding
        - 16px vertical padding
        - [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
        - 1px solid [Alto](/design/c/colors/v2.1.0/#rd-alto) border above and below header row
        - Vertically aligned to the center (if a header wraps to two columns)
        - Headers are a non-optional feature of all table types (for accessibility compliance)

      Rows
      : - 20px horizontal padding
        - 16px vertical padding
        - No lines separating rows
        - 1px solid [Alto](/design/c/colors/v2.1.0/#rd-alto) border following the final row
        - [Basic UI Text](/design/c/typography/v2.0.0/#rd-ui-text-basic)
        - Vertically align to the top (if a cell wraps to two or more columns)


    contents:
      - type: wide image
        src: ./assets/redlines.basic.png
    exports:
      - Basic Table
      - Secondary Row

  - type: two column
    text: |
      ### Sortable Table
      Icons
      : - Any row that is sortable, but not currently sorted uses the sort-inactive-18 icon
        - Any sorted row should use the sort-down-18 and sort-up-18 icons, depending on the current sort order

      Positioning
      : - Icons are 8px away from the text
        - Place them on the right for Left aligned and Centered columns, on the left for Right aligned columns

      Hover
      : - Hovering a sortable column give the header a moonlight background
        - It also swaps out the icon for whatever the state would be should the user click on the header

      Sorted row
      : - A sorted row will use the [Bold UI Text](/design/c/typography/v2.0.0/#rd-ui-text-bold) style
    contents:
      - type: wide image
        src: ./assets/redlines.sortable.png

  - type: two column
    text: |
      ### Hoverable Row
      Background
      : - Row background is [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)

      ### Selectable Row
      Colors
      : - Row background is [Digital Ice Blue](/design/c/colors/v2.1.0/#rd-digital-ice-blue)
        - Row has top/bottom borders of 1px solid [Digital Marine Turquoise](/design/c/colors/v2.1.0/#rd-digital-marine-turquoise)

      Hovered Colors
      : - Row background is [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)
        - Row has top/bottom borders of 1px solid [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)

      Checkmark
      : - Checkmark has 20px padding on the left, and uses the standard 20px padding of the cell contents on the right
        - Uses the standard checkmark input

      Multi-select
      : - Once a single row is selected, the user may hold down shift, click or tap another row, and select every row in between the two
        - A user may also hold down CMD or CTRL and manually select or unselect rows

      Caption/Controls
      : - Any controls or captions which apply to the selected rows should be positioned 28px above or below the main table
    contents:
      - type: wide image
        src: ./assets/redlines.hoverable.selectable.png




changelog:
  - version: 2.0.0-beta.1
    changes: |
      - UPDATED: Style to reflect redesign
      - REMOVED: Secondary data line within row
      - REMOVED: Small table size
      - REMOVED: Integration with buttons
  - version: 1.1.0-beta.1
    changes: |
      - ADDED: Sortable column feature
      - ADDED: Selectable rows and table toolbar features
  - version: 1.0.0
    changes: Initial Version
---
