---
layout: component-yaml
title: Buttons
section: Components
redirect_from: "/docs/ui-components/buttons/"
version: 1.0.0-beta.4
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
  - type: Elements SDK
    link: https://pearson-elements-v0.surge.sh/elements/buttons/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19r4uvPAZpmXRwT_krIr9MqHLYC-Vgjah2kPDi9PYaQA/edit?usp=sharing
  - name: Sketch
    link: ./assets/buttons.mockup.sketch
  - name: Illustrator
    link: ./assets/buttons.mockup.ai

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
      Buttons come in small, default, medium, and large sizes. Prefer the default size but feel free to use these other sizes where they would fit better with surrounding content. Medium buttons are specifically sized to pair well with inputs.
    contents:
      - type: narrow image
        src: ./assets/sizes.png
        caption: The four button sizes.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Small button
      : - 24px tall
        - 10px horizontal padding
        - Small label font

      Standard button
      : - 28px tall
        - 12px horizontal padding
        - Basic label font

      Medium button
      : - 36px tall
        - 12px horizontal padding
        - Large label font

      Large button
      : - 42px tall
        - 20px horizontal padding
        - large label font

      Link style buttons
      : - Maintain the same spacing around the text


    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png
      - type: narrow image
        src: ./assets/redlines.sizes.2.png

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

      Focus
      : - Use the browser default style

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

      Focus
      : - Use the browser default style
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

      Focus
      : - Use the browser default style

      Spacing
      : - Maintain the same spacing as the standard buttons
    contents:
      - type: wide image
        src: ./assets/redlines.link.png

changelog:
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: UXD Accessibility checklist link
      - ADDED: Focus state details in the redlines section
      - ADDED: Medium button size in anticipation of inputs

  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Illustrator UI mockup file
      - FIXED: Proper link to elements SDK
      - FIXED: Images aren't downsized

  - version: 1.0.0-beta.2
    linkable: false
    changes: |
      - ADDED: Sketch UI mockup file

  - version: 1.0.0-beta.1
    changes: Initial version
    linkable: false
---
