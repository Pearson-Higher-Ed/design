---
layout: component-yaml
title: Buttons
section: Components
redirect_from: "/docs/ui-components/buttons/"
version: 1.0.0
status: active
implemented: false
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
implementation: https://pearson-elements-v0.surge.sh/elements/buttons/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19r4uvPAZpmXRwT_krIr9MqHLYC-Vgjah2kPDi9PYaQA/edit?usp=sharing
  - name: Sketch
    link: ./assets/buttons.mockup.sketch
  - name: Illustrator
    link: ./assets/buttons.mockup.ai

dependencies:
  - name: Colors
    version: 1.0.1
  - name: Typography
    version: 1.0.0

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
        - [Small label font](/design/c/typography/v1.0.0/#rd-small-label)

      Standard button
      : - 28px tall
        - 12px horizontal padding
        - [Basic label font](/design/c/typography/v1.0.0/#rd-basic-label)

      Medium button
      : - 36px tall
        - 12px horizontal padding
        - [Large label font](/design/c/typography/v1.0.0/#rd-large-label)


      Large button
      : - 42px tall
        - 20px horizontal padding
        - [large label font](/design/c/typography/v1.0.0/#rd-large-label)


      Link style buttons
      : - Maintain the same spacing around the text
    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png
      - type: narrow image
        src: ./assets/redlines.sizes.2.png
    exports:
      - Small Button
      - Standard Button
      - Medium Button
      - Large Button

  - type: two column
    text: |
      ### Corners
      All sizes use a 3px border radius.

  - type: style table
    styles:
      - Small Button
      - Standard Button
      - Medium Button
      - Large Button

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - [Basic Blue (#107ACA)](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) fill
        - [Deep Sea (#0A4D80)](/design/c/colors/v1.0.1/#rd-deep-sea-0a4d80) border
        - [Inverse Primary Color](/design/c/typography/v1.0.0/#rd-primary-label-color)

      Hover/Active
      : - [Sea (#0C5D99)](/design/c/colors/v1.0.1/#rd-sea-0c5d99) fill
        - [Deep Sea (#0A4D80)](/design/c/colors/v1.0.1/#rd-deep-sea-0a4d80) border
        - inset shadow with 3px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - [Sky Blue (#9DC0DB)](/design/c/colors/v1.0.1/#rd-sky-blue-9dc0db) fill
        - No border

      Focus
      : - Use the browser default style
    contents:
      - type: wide image
        src: ./assets/redlines.primary.png
    exports:
      - Primary Button

  - type: style table
    styles:
      - Primary Button

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - [Dirty Ice (#F8F8F8)](/design/c/colors/v1.0.1/#rd-dirty-ice-f8f8f8) fill
        - [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3) border
        - [Secondary font color](/design/c/typography/v1.0.0/#rd-secondary-label-color)

      Hover/Active
      : - [Brightly Lit (#E6E6E6)](/design/c/colors/v1.0.1/#rd-brightly-lit-e6e6e6) fill
        - [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3) border
        - inset shadow with 2px blur, rgba(0, 0, 0, 0.3) color

      Disabled
      : - [Off White (#F2F2F2)](/design/c/colors/v1.0.1/#rd-off-white-f2f2f2) fill
        - No border
        - [Boring (#A6A8AB)](/design/c/colors/v1.0.1/#rd-boring-a6a8ab) text color

      Focus
      : - Use the browser default style
    contents:
      - type: wide image
        src: ./assets/redlines.default.png
    exports:
      - Default Button

  - type: style table
    styles:
      - Default Button

  - type: two column
    text: |
      ### Link buttons

      Normal
      : - Just follow the [standard link guidelines](/design/c/typography/v1.0.0/#rd-links) for color, underline, etc.

      Hover/Active
      : - Follow [standard link styles](/design/c/typography/v1.0.0/#rd-links)

      Disabled
      : - [Sky Blue (#9DC0DB)](/design/c/colors/v1.0.1/#rd-sky-blue-9dc0db) text color

      Focus
      : - Use the browser default style

      Spacing
      : - Maintain the same spacing as the standard buttons
    contents:
      - type: wide image
        src: ./assets/redlines.link.png
    exports:
      - Link Button

  - type: style table
    styles:
      - Link Button

changelog:
  - version: 1.0.0
    changes: Initial version
---
