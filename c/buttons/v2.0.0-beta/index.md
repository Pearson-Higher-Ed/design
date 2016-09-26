---
layout: component-yaml
title: Buttons
section: Components
redirect_from: "/docs/ui-components/buttons/"
version: 2.0.0-beta
status: design
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

dependencies:
  - name: Colors
    version: 2.0.0-beta.4
  - name: Typography
    version: 2.0.0-beta.4

tagline: This component defines the standard visual style for buttons.
features:
  - Single collection of all button styles
  - Primary and Default button types
  - Default and Large button sizes
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Every instance of a button should come from this component. See the sections below for information about when to each each type of button.

blocks:
  - type: section
    name: Button types

  - type: two column
    text: |
      Buttons come in several different types. Each defines a normal, active/hover, and disabled state.

      **Primary** indicates the main call to action and should only appear once per group of buttons.

      **Default** is your basic button, it can appear multiple times in a given group.

    contents:
      - type: wide image
        src: ./assets/illustration.png
        caption: Both button types in their various states.

  - type: section
    name: Button sizes

  - type: two column
    text: |
      Buttons come in default and large sizes. Prefer the default size but feel free to use the large size where they would fit better with surrounding content. Both button sizes are meant to pair with equally sized inputs.
    contents:
      - type: narrow image
        src: ./assets/sizes.png
        caption: The two button sizes.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Standard button
      : - 28px tall
        - 12px horizontal padding
        - [Basic label font](/design/c/typography/v2.0.0-beta.2/#rd-basic-label)

      Large button
      : - 36px tall
        - 20px horizontal padding
        - [large label font](/design/c/typography/v2.0.0-beta.2/#rd-large-label)



    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png

    exports:
      - Standard Button
      - Large Button

  - type: two column
    text: |
      ### Corners
      All sizes use a 2px border radius.

  - type: style table
    styles:
      - Standard Button
      - Large Button

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - [Digital Pearson Blue (#047A9C)](/design/c/colors/v2.0.0-beta.3/#rd-digital-pearson-blue-047a9c) fill
        - [Inverse Primary Color](/design/c/typography/v2.0.0-beta.2/#rd-primary-label-color)
        - No border

      Hover/Active
      : - [Ink Blue (#005A70)](/design/c/colors/v2.0.0-beta.3/#rd-ink/blue-005a70) fill
        - No border

      Disabled
      : - [Digital Ice Blue (#D6EBE8)](/design/c/colors/v2.0.0-beta.3/#rd-digital-ice-blue-d6ebe8) fill
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
      : - [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.3/#rd-charcoal-252525) fill
        - No border
        - [Medium Gray (#6A7070)](/design/c/colors/v2.0.0-beta.3/#rd-medium-gray-6a7070) text color

      Hover/Active
      : - [Medium Gray (#6A7070)](/design/c/colors/v2.0.0-beta.3/#rd-medium-gray-6a7070) fill
        - No border
        - [White (#FFFFFF)](/design/c/colors/v2.0.0-beta.3/#rd-white-ffffff) text color

      Disabled
      : - [Moonlight (#E9E9E9)](/design/c/colors/v2.0.0-beta.3/#rd-moonlight-e9e9e9) fill
        - No border
        - [Concrete (#C7C7C7)](/design/c/colors/v2.0.0-beta.3/#rd-concrete-c7c7c7) text color

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

changelog:
  - version: 2.0.0-beta
    changes:  New Version

  - version: 1.0.0-beta.5
    changes: |
      - ADDED: Dependency links

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
