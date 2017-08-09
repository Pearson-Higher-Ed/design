---
layout: component-yaml
title: Toolbar
section: Components
status: active
version: 1.0.0-beta.2
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
        src: ./assets/basic.toolbars.png
        caption: Examples of basic toolbars.

  - type: two column
    text: |
      ### Positioning guidelines
      In general, try to anchor your toolbar with items on either end, or center every item.

      #### Spacing
      Related options should always be grouped with 16px between them. Logical groups of controls may be separated further by either a static 28px or a dynamic space which flexes with the size of the container.

      For controls which are tightly related, you should use a button group to indicate this.
    contents:
      - type: wide image
        src: ./assets/basic.spacing.png

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
        src: ./assets/responsive.png
        caption: A responsive implementation of the [basic table examples](#basic-toolbar) from above.

  - type: two column
    text: |
      ### Condensing controls
      In some cases you may have too many controls to reasonably fit in a multi-row layout. In this case you may combine less important controls under a "More" button which will open a drawer containing the remaining options.

      #### Drawer features
      The drawer has a few features that help replicate the functionality of more advanced controls. These include:

      ##### Drill down menus
      These function as a 1:1 replacement for dropdown menus, allowing the user to tap into an item and choose from a list of options.

      ##### State icons
      For controls which represent a binary such as locked/unlocked an icon may be included to indicate the current state.
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

  - type: two column
    text: |
      Notes:

      - The select all component may need to become optional on mobile for space reasons, this matches the typical iOS convention at least
      - Do we need a nested dropdown for collapsing actions?
      - Showing action only upon selection... what if all items in the toolbar are actions? Give a message prompting to select? <-- testing candidate

changelog:
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Button group option
  - version: 1.0.0-beta.1
    changes: Initial version
---
