---
layout: component-yaml
title: Tables
section: Components
status: active
version: 2.0.0-beta.5
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com

tagline: |
  Provides standard designs and layouts for tables.
features:
  - Hoverable rows
  - Responsive guidance
  - Sortable columns
  - Selectable rows
usage_guidelines: |
  Every instance of a basic table should use this component. Pair it with the toolbar component for more advanced use cases.

dependencies:
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0
  - name: Icons
    version: 2.1.0
  - name: Inputs
    version: 2.0.1

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1DhYpRmMpwgWh5ha75c-MOG3Z9dFHUMsVVxHSm3b0mQs/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/tables.sketch

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
    contents:
      - type: wide image
        src: ./assets/sortable.table.hover.png
        caption: Example of a sortable table showing the header hover state.

  - type: two column
    text: |
      ### Hoverable Rows
      If you have a long table a row hover effect can be enabled which makes it easier to scan and parse.
    contents:
      - type: wide image
        src: ./assets/hoverable.table.png
        caption: Hovering a row can change its background color.

  - type: two column
    text: |
      ### Selectable Rows
      In cases where users may need to select and act on one or more rows you may add a checkbox column and include a toolbar at the top of the table.

      Clicking or tapping any non-interactive part of a row is a secondary method for selecting that row (this will also check the relevant checkmark, which is the primary method).

      Holding down shift and selecting a second row will select all the intervening rows as well.

    contents:
      - type: wide image
        src: ./assets/Select Table Hover.png
        caption: Example of a selectable table. Hover effects are enabled by default. (Hovering selected rows adds the border effect.)

  - type: section
    name: Responsive strategies

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
      ### Switching designs
      For larger, more complex tables with a lot of non-optional data it may be necessary to change from using a table to some other display strategy in the mobile view. For example, you may adopt a list view where each item  can be opened up to view its complete dataset.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic Table

      Header
      : - 20px horizontal padding
        - 16px vertical padding
        - [Bold UI Text](/design/c/typography/v2.0.0/#rd-ui-text-bold)
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
      : - Icons are 8px away from the text, always on the right
        - For right aligned columns, align to the icon

      Hover
      : - Hovering a sortable column gives the header a [moonlight](/design/c/colors/v2.1.0/#rd-moonlight) background
    contents:
      - type: wide image
        src: ./assets/redlines.sortable.png

  - type: two column
    text: |
      ### Hoverable Row
      Background
      : - Row background is [Moonlight](/design/c/colors/v2.1.0/#rd-moonlight)

      Cursor
      : - Pointer style (Hand with finger)
    contents:
      - type: wide image
        src: ./assets/redlines.hoverable.png

  - type: two column
    text: |
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

      Caption/Controls
      : - Any controls or captions which apply to the selected rows should be positioned 28px above or below the main table
        - For example, this could be a toolbar or pagination control

      Interaction
      : - Any selected row will have an activated checkmark and the selected visual styles
        - Checking the checkbox is the primary selection method
        - Clicking or tapping on any non-interactive part of the row will also put it in a selected state (including checking the checkmark)
        - If a single row is currently selected the user may hold down shift and select another row, causing all intervening rows to also be selected
    contents:
      - type: wide image
        src: ./assets/redlines.hoverable.selectable.png
      - type: wide image
        src: ./assets/redlines.captions.controls.png




changelog:
  - version: 2.0.0-beta.5
    changes: |
      - FIXED: Error in redlines
  - version: 2.0.0-beta.4
    changes: |
      - ADDED: Updated a11y checklist
      - UPDATED: Dependency list to include inputs (for checkmark)
      - UPDATED: Clarified that a checkbox is always required for selectable rows
  - version: 2.0.0-beta.3
    changes: |
      - FIXED: Typos
  - version: 2.0.0-beta.2
    changes: |
      - CHANGED: Headers are always bold
      - CHANGED: Hovering a header doesn't change the icons
      - CHANGED: Icon alignment methods
      - CHANGED: Selected row background color to digital ice blue
      - FIXED: Checkmark focus effects
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
