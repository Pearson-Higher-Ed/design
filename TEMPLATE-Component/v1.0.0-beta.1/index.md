---
layout: component-yaml
title: Component X
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
implementation:
people:
  - role:
    name:
tagline:
usage_guidelines:
features:
dependencies: # If no dependency, just delete everything inside "dependencies"
  - name: Component Y
    version: 9.9.9
documents:
  - name: Component Quality Checklist
    link:
  - name: UX Accessibility Checklist
    link:
  - name: Documentation Assets (Sketch)
    link:


blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt dolor. Curabitur dignissim orci facilisis erat imperdiet, vel malesuada neque rhoncus. Sed congue venenatis lectus in rutrum.
    contents:
      - type: wide image
        src: # Example:./assets/buttons.png
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
    changes: |
      - INITIAL VERSION

---
