---
layout: component-yaml
title: Dropdown
section: Components
version: 1.1.0-beta.2
status: active
implemented: true
implementation: https://github.com/Pearson-Higher-Ed/elements-sdk
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1qZwBsbH1uFSwAJVoJZhRE2R_5aneK462ii3lPcp4tcY/edit?usp=sharing
  - name: Sketch File
    link: ./assets/dropdown.sketch

dependencies:
  - name: Typography
    version: 2.1.1
  - name: Buttons
    version: 2.2.2
  - name: Colors
    version: 3.0.1
  - name: Icons
    version: 2.3.0

tagline: |
  A simple component for presenting multiple options in a condensed space.
features:
  - Can be triggered by a link or button
  - Standard icon layout
  - Accessible
usage_guidelines: |
  Use this component when the options listed represent actions or navigation destinations. Prefer the standard [select inputs](/design/c/inputs/#select) for all other use cases.

blocks:
  - type: section
    name: Dropdown menu

  - type: two column
    text: |
      Opening a dropdown presents a simple list of textual options. These may be divided into logically related groups, and a single option may be indicated as selected with a checkmark.

      ### Groupings
      Logically related options may be grouped together for easy scanning.

      ### Selected option
      When a dropdown contains actions that edit some piece of data, you may use a checkmark to indicate the current state of the value being edited.

      ### Scrolling menu
      In most cases you should avoid putting an excessive number of items in the dropdown menu. Occasionally the use case will require it (for example, a list of times in a time picker). If necessary, the length of the menu may be capped and a scroll bar will then allow access to all items.
    contents:
      - type: narrow image
        src: ./assets/dropdown.png
        caption: The various options for the dropdown menu. Options may be grouped, and checkmarks may be used when editing data.
      - type: narrow image
        src: ./assets/scroll.png
        caption: If the menu contains a significant number of items it may cap the height and use a scroll bar.
    features:
      - Basic Dropdown
      - Grouped Menu
      - Selectable Menu
      - Scrollable Menu

  - type: section
    name: Dropdown Triggers

  - type: two column
    text: |
      Dropdowns should generally be indicated by UI Text or a button  paired with an icon. Just the icon may be used if situated within an appropriate context like a course card or over a color picker.

      If the trigger item is too far to the right the dropdown will shift to be right aligned.
    contents:
      - type: narrow image
        src: ./assets/triggers.png
        caption: The various trigger types available.
      - type: narrow image
        src: ./assets/triggers-alignment.png
        caption: Menus are left aligned with the trigger unless there isn't enough space.
    features:
      - Text Trigger
      - Icon Trigger
      - Button Trigger

  - type: section
    name: Responsive behavior

  - type: two column
    text: |
      At the extra small breakpoint, the dropdown switches from a menu that drops down to a modal that slides up with a list of options. For UI Text and button triggers the dropdown icon also becomes optional.

      The dropdown page should have a descriptive title explaining the context for the options presented, although it is optional.
    contents:
      - type: narrow video
        src: ./assets/animation.mp4
        caption: An example of a dropdown menu at the extra small breakpoint.
      - type: narrow image
        src: ./assets/mobile-menu-check.png
        caption: A mobile dropdown with a selection indicator.
        border: true

  - type: section
    name: Redlines

  - type: two column
    text: |
      Dimensions
      : - Standard width is 220px

      Spacing
      : - 16px top and bottom padding
        - 24px left and right padding
        - 8px between items

      Focus/Hover
      : - A focused or hovered item has a [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight) background that extends 4px above and below the text
        - Triggers use the default focus behavior for buttons or links

      Divider
      : - Groups may be divided by a 1px solid [Alto](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--alto) line
        - The divider line should have 12px between it and any text above/below it

      Typography
      : - Options use the [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) style

      Checkmark
      : - Uses the [check-sm-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--check-sm) icon
        - 16px left padding around the icon
        - 8px right padding
        - Text content is shifted right to make room for the icon (34px left padding)
        - This expanded spacing should be used any time it is possible for an option to be checked, i.e. don't start with the narrower space and then shift text over to make room for a check mark

      Border
      : - 1px solid [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - 2px border radius

      Alignment
      : - Left aligned by default
        - Right aligned if there is not room within the viewport for the dropdown

      Scrollbar
      : - Use the native scrollbar
        - Height may be capped at different sizes depending on the content, prefer a height of 300px though
    contents:
      - type: narrow image
        src: ./assets/redlines.dropdown.png
      - type: narrow image
        src: ./assets/redlines.scroll.png
    redlines:
      - Basic Dropdown
      - Grouped Menu
      - Selectable Menu
      - Scrollable Menu

  - type: two column
    text: |
      Triggers
      : - [dropdown-open-sm-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--dropdown-open-sm) for the icon if combined with text, use [dropdown-open-sm-24](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--dropdown-open-sm) if standalone
        - [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text), for any text used
        - 2px spacing between trigger and dropdown
        - Any [button](http://pearson-higher-ed.github.io/design/c/buttons/) type is valid
    contents:
      - type: narrow image
        src: ./assets/redlines.triggers.png
    redlines:
      - Text Trigger
      - Icon Trigger
      - Button Trigger

  - type: two column
    text: |
      ### Responsive redlines

      Breakpoint
      : - Use this style for the extra small breakpoint

      Dimensions
      : - Full viewport width and height (covering the header)

      Spacing
      : - List items have 24px padding on all sides
        - The title has 24px vertical padding
        - Close icon has a minimum of 12px left padding and 24px of right padding

      Icons
      : - Close icon is [remove-lg-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--remove-lg)
        - Check mark is [check-sm-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--check-sm)

      Typography
      : - Options use the [Large UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--large-ui-text) style
        - The title is a [Small Section UI Heading](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-section-ui-heading)

      Colors
      : - Title background is [White Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white-gray)
        - Divider under title is 1px solid [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight)
        - Divider within options is 1px solid [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

      Check mark
      : - The checkmark has 24px of left padding and 8px on the right
        - This pushes the options and any divider lines to the right, for a total right padding of 42px

      Animation
      : - The whole mobile menu should slide up from the bottom of the screen
        - Use a duration of 0.3s
        - Easing is cubic-bezier(0.77, 0, 0.175, 1)
        - Same transition for entry and exit

    contents:
      - type: wide image
        src: ./assets/redlines.mobile-menu.png

changelog:
  - version: 1.1.0-beta.2
    changes: |
      - ADDED: Feature links
  - version: 1.1.0-beta.1
    changes: |
      - ADDED: Feature to allow the menu to scroll for situations with many options
  - version: 1.0.0
    changes: Initial Version
---
