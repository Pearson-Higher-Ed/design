---
layout: component-yaml
title: Slider
section: Components
redirect_from: /docs/ui-components/application-header/
version: 1.0.0-beta.2
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/application-header.mockup.sketch
  - name: .ai mockup
    link: ./assets/application-header.mockup.ai

tagline: |
  Allows users to choose a numeric value from a large range of possibilities.
features:
  - Minimum and maximum values
usage_guidelines: |
  Simple confirmation acknowledgements that don't require additional detail should just use a confirmation button. If an error occurs or additional information is needed to clarify then the appropriate alert style may be dynamically presented.

blocks:
  - type: section
    name: Basic Behavior

  - type: two column
    text: |
      The slider can be dragged left or right to select either a specific quantitative value or to indicate a qualitative location on a spectrum.

      When used to input a quantitative value, the slider should always present the exact value selected, either within an input or as a static label. This is not required for qualitative inputs.

      Just like with other inputs, labels should generally be used to indicate the purpose of each slider.

    contents:
      - type: narrow image
        src: ./assets/sliders.png
        caption: The message should appear in the upper corner as part of the normal page load, with no animation.
      - type: narrow image
        src: ./assets/slider.examples.png
        caption: Sliders used for quantitative and qualitative inputs.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Colors
      : - Track color is [hyperdrive](/design/c/colors/v1.0.1/#rd-hyperdrive-0d65a6)
        - Knob has a [white](/design/c/colors/v1.0.1/#rd-white-ffffff) fill
        - Knob has a 1px [hairline gray](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0) border

      Dimensions
      : - Track is 4px high
        - Knob is 20px diameter

      Shadow
      : - Knob has a 5px blur, 10% opacity rgba(0, 0, 0, 0.1) drop shadow

      Focus/Keyboarding
      : - Knob is accessible via tabbing
        - Focused knob has 1px [basic blue](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) border and a 5px [basic blue](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) dropshadow

      Behavior
      : - The slider should have at least 10 distinct values
        - Once focused, the knob should be controllable by the cursor keys
    contents:
      - type: narrow image
        src: ./assets/redlines.slider.png



changelog:
  - version: 1.0.0-beta.2
    changes: |
      - CHANGED: Switched to using a single color for the track.
  - version: 1.0.0-beta.1
    changes: Initial version
---
