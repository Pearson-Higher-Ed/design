---
layout: component-yaml
title: Buttons
section: Components
redirect_from: "/docs/ui-components/buttons/"
version: 1.0.0-beta.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
  - role: QA
    name: Eajaz
implementations:
  - type: Origami
    link: https://origami.pearsoned.com/registry/components/o-buttons

tagline: This component defines the standard visual style for buttons.
features:
  - Single collection of all button styles
  - Multiple button types including Primary, Default, and Link
  - Small, Default, and Large button sizes
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Every instance of a button or button styled link should come from this component. See the sections below for information about when to each each type of button.

blocks:
  - type: section
    name: Button types

  - type: two column
    text: |
      Buttons come in several different types. Each defines a normal, active/hover, and disabled state.

      **Primary** indicates the main call to action and should only appear once per group of buttons.

      **Default** is your basic button, it can appear multiple times in a given group.

      **Link** indicates reduced importance of the option. ('Cancel' options should typically use this style, for example.)
    contents:
      - type: wide image
        src: ./assets/illustration.png
        caption: Each of the three button types in their various states.

  - type: section
    name: Button sizes

  - type: two column
    text: |
      Buttons come in small, default, and large sizes. Prefer the default size but feel free to use these other sizes where they would fit better with surrounding content.
    contents:
      - type: narrow image
        src: ./assets/sizes.png
        caption: Each button type in the two alternate sizes.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes

      Standard button
      : - 28px tall
        - 12px horizontal padding
        - Basic label font

      Large button
      : - 42px tall
        - 20px horizontal padding
        - large label font

      Small button
      : - 24px tall
        - 10px horizontal padding
        - Small label font

    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png

  - type: two column
    text: |
      ### Corners
      All sizes use a 3px border radius.

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - \#107ACA fill
        - \#0A4D80 border
        - Inverse font color

      Hover/Active
      : - \#0C5D99 fill
        - 0A4D80 border
        - inset shadow with 3px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - \#9DC0DB fill
        - No border

    contents:
      - type: wide image
        src: ./assets/redlines.primary.png

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - \#F8F8F8 fill
        - \#B3B3B3 border
        - Secondary font color

      Hover/Active
      : - \#E6E6E6 fill
        - \#B3B3B3 border
        - inset shadow with 2px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - \#F2F2F2 fill
        - No border
        - \#A6A8AB text color
    contents:
      - type: wide image
        src: ./assets/redlines.default.png

  - type: two column
    text: |
      ### Link buttons

      Normal
      : - Just follow the standard link guidelines for color, underline, etc.

      Hover/Active
      : - Follow standard link styles

      Disabled
      : - \#9DC0DB text color
    contents:
      - type: wide image
        src: ./assets/redlines.link.png

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
