---
layout: component-yaml
title: Component X # Plural, sentence case, remember to update folder name
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
implementation:
people:
  - role:
    name:
tagline: # What is this component? What does it do?
usage_guidelines: # Optional
features: # Optional
dependencies: # If no dependency, just delete everything inside "dependencies"
  - name: Component Y
    version: 9.9.9

a11y_checklist: # Link here
quality_checklist: # Link here
sketch: # Example: ./assets/buttons.sketch


blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt dolor. Curabitur dignissim orci facilisis erat imperdiet, vel malesuada neque rhoncus. Sed congue venenatis lectus in rutrum.
    contents:
      - type: wide image
        src: # Example:./assets/buttons.png  # Export at x2 resolution
        caption:
    features:
      - Feature A

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Large
      : - Width: 99px
        - Height: 99px

      Small
      : - Width: 9px
        - Height: 9px
    contents:
      - type: wide image
        src: # Example:./assets/buttons.png
        caption:
    redlines:
      - Feature A

changelog:
  - version: 1.0.0-beta.1
    person: # Your name here
    changes: |
      - INITIAL VERSION

---
