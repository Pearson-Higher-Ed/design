---
layout: component-yaml
title: Component X # Plural, sentence case, remember to update folder name
section: Components
version: 1.0.0-beta.1
status: active # Parker: May revisit in the next version
implemented: false
implementation: # PDA team's responsibility
tagline: # What is this component? What does it do?
usage_guidelines: # For very important directions only
dependencies: # If no dependency, delete everything under "dependencies" including "- name:" and "version:"
  - name: Component Y
    version: 9.9.9

a11y_checklist: # Link here. Get template here:  https://drive.google.com/drive/u/1/folders/0B7rSuWUVXiuLa3R5RjRCN0lBTlE
quality_checklist: # Link here. Get template here: https://drive.google.com/drive/u/1/folders/0BzkpkUHeUdjKMElFb0xDYkp1Ykk
sketch: # Example: ./assets/buttons.sketch
documents: # Feel free to add any documentation. EX: research results
  - name:
    link:


blocks:
  - type: section
    name: Usage # Headings should be sentence case

  - type: two column
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt dolor. Curabitur dignissim orci facilisis erat imperdiet, vel malesuada neque rhoncus. Sed congue venenatis lectus in rutrum.

    contents:
      - type: wide image
        src: ./assets/wide_image.png #Export at x2
        border: # "True"
        caption:

      - type: narrow image
        src: ./assets/narrow image.png #Export at x2
        border: # "True"
        caption:

    features:
      - Feature A # Add this to the Redlines section

  - type: full page image
    src: ./assets/full page image.png #Export at x2
    border: # "True"
    text: | # Optional. This text shows above the image.


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
      - type: wide image # Options: full size image, wide image, narrow image (to be confirmed with Parker)
        src: # Example:./assets/buttons.png
        caption:
    redlines:
      - Feature A

changelog:
  - version: 1.0.0-beta.1
    person: # Your name here
    changes: |
      - INITIAL VERSION


# Version incrementation: Initial (1.0.0-beta.1) > Release (1.0.0) > Patch (1.0.1) > Beta (2.0.0-beta.1) > Release (2.0.0)

---
