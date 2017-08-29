---
layout: component-yaml
title: Toolbar
section: Components
status: active
version: 1.0.0-beta.5
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  Common layout of tools for operating on a collection of items.
features:
  - Responsive guidelines
  - Standard search and filter controls
usage_guidelines: |
  Any collection of items that can be editing or modified by the user (e.g. table, list, grid view, etc.) should consider using this component.

dependecies:
  - name: Buttons
    version: 2.1.0
  - name: Inputs
    version: 2.0.0

blocks:
  - type: section
    name: Basic toolbar

  - type: two column
    text: |
      The basic toolbar simply provides an area to collect the buttons and inputs that modify your collection of items. For example, you may offer the ability to delete selected items, or filter the collection.
    contents:
      - type: wide image
        src: ./assets/basic.toolbars.2.png
      - type: wide image
        src: ./assets/basic.toolbars.1.png
      - type: wide image
        src: ./assets/basic.toolbars.3.png
        caption: Examples of basic toolbars.

  - type: two column
    text: |
      ### Positioning guidelines
      In general, try to anchor your toolbar with items on either end, or center every item.

      #### Spacing
      Related options should always be grouped with 16px between them. Logical groups of controls may be separated further by either a static 28px or a dynamic space which flexes with the size of the container.

      For controls which are tightly related, you should use a button group to indicate this.

      ##### Icons
      Icons should be positioned inside a 44px square tap area. For related icons their tap areas may be immediately adjacent (instead of 16px if they were buttons). Use 16px (instead of 28px) for separating logical groups of icons or when the icon is adjacent to a button or input.
    contents:
      - type: wide image
        src: ./assets/basic.spacing.1.png
      - type: wide image
        src: ./assets/basic.spacing.2.png
      - type: wide image
        src: ./assets/basic.spacing.3.png

  - type: section
    name: Toolbar elements

  - type: two column
    text: |
      Toolbars can contain any controls which pertain to editing, filtering, or modifying the related collection of items. Common elements include the following:

  - type: two column
    text: |
      ### Buttons
      Basic buttons would represent simple actions which could apply to either the full collection or just selected items.

      ### Icons
      You should generally prefer to use a textual button for actions, with two common exceptions:

      1. You need to save space in a responsive context.
      2. The action controls a binary state (e.g. locked/unlocked, starred/unstarred, etc.) and a visual indicator is desirable.

      In any case, prefer to only use icons when commonly recognizable symbols exist for the action.

      ### Inputs
      In some cases you may need to gather input from a user, like a search field or a select control to filter the collection. You will need to include a proper label to ensure accessibility.

      ### Button Groups
      Button groups can be used to in situations where several actions are closely related or you need to conserve space.
    contents:
      - type: wide image
        src: ./assets/toolbar.elements.png
        caption: Examples of the commonly used toolbar controls.

  - type: section
    name: Multi-select

  - type: two column
    text: |
      In cases where it would be handy to select or deselect either all items or some large subset at once you can include the multiselect button.

      This button contains a checkmark which will select/deselect all items in the collection. It may be paired with a dropdown that offers subsets for selection, such as only the TAs from a list of students.
    contents:
      - type: narrow image
        src: ./assets/multiselect.png
        caption: Example of the multiselect, with or without the extra dropdown options.


  - type: section
    name: Responsive

  - type: two column
    text: |
      As the screen width gets smaller you will probably run out of space to include all tools on a single row. There are a couple ways to adapt the design to account for this.

  - type: two column
    text: |
      ### Wrapping controls
      If you have a manageable number of controls, simply moving them into two or more lines is a straightforward solution. In this case buttons and controls should always be fully justified and consume 100% of the available space. Try to avoid placing more than two items per row at the smallest breakpoints, and try to avoid using more than three rows total.
    contents:
      - type: narrow image
        src: ./assets/responsive.2.png
      - type: narrow image
        src: ./assets/responsive.1.png
      - type: narrow image
        src: ./assets/responsive.3.png
        caption: A responsive implementation of the [basic table examples](#basic-toolbar) from above.
      - type: narrow image
        src: ./assets/responsive.4.png

  - type: two column
    text: |
      ### Condensing controls
      In some cases you may have too many controls to reasonably fit in a multi-row layout. In this case the UXF team is exploring an overflow menu that would allow you to move the extra tools into a drawer with more room. This is likely to be an addition in version 1.1 of this component, pending feedback from the development team.
    contents:
      - type: narrow image
        src: ./assets/responsive.condensed.png
      - type: narrow image
        src: ./assets/responsive.condensed.drawer.png

  - type: two column
    text: |
      ### Icon controls
      Controls that describe their actions with text should be strongly preferred, however there are cases where you may need to use icons due to space constraints. Prefer to use icons only for well recognized actions, like delete, favorite/like, etc.
    contents:
      - type: wide image
        src: ./assets/responsive.icons.png
      - type: narrow image
        src: ./assets/responsive.icons.mobile.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      Elements
      : - Buttons should be the large size
        - Prefer 24px icons
        - Inputs use the basic style and should include labels
        - Button groups use the same specs as standard buttons, but share a border and have square corners at the joints

      Spacing
      : - Related buttons or inputs are 16px away
        - Distinct groups of buttons or inputs are separated by either a static 28px or a dynamic distance (to support aligned or distributed layouts)
        - Icons should generally appear in their own logical group
        - Icons each reside within a 44px square tappable area
        - Related icons can be immediately adjacent
        - 16px can separate distinct groups of icons
    contents:
      - type: wide image
        src: ./assets/redlines.elements.png
      - type: wide image
        src: ./assets/redlines.spacing.png
      - type: wide image
        src: ./assets/redlines.spacing.icons.png


changelog:
  - version: 1.0.0-beta.5
    changes: |
      - REMOVED: Overflow menu (temporarily)
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: Use case context to some examples
  - version: 1.0.0-beta.3
    changes: |
      - FIXED: Button labels to sentence case
      - ADDED: Details around icon positioning
      - ADDED: Redlines
      - CHANGED: Overflow drawer trigger name to "Tools" from "More"
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Button group option
  - version: 1.0.0-beta.1
    changes: Initial version
---
