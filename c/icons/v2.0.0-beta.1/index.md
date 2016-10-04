---
layout: component-yaml
title: Icons
section: Components
version: 2.0.0-beta.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
implementation: https://pearson-elements-v0.surge.sh/elements/icons/
downloads:
  - name: Pearson-icons-1.0.sketch
    link: ./assets/Pearson_icons_1.0.sketch

tagline: |
  Provides a standard set of UI icons across Pearson products.
features:
  - 18px and 24px icons
  - CSS class
  - Guidelines
usage_guidelines: |
  All UI icons should come from this component.

blocks:

  - type: section
    name: Pearson Icons

  - type: two column
    text: |
      Pearson icons are available in two sizes, **18 x 18 and 24 x 24 pixels**. You can incorporate them into your design by downloading the Pearson-icons.sketch file, located above. <br>

      ###Web App Designers

      You do not need to provide SVG or backup PNG to Pearson development team. You can send them the icon class name on the list or within the Pearson-icons.sketch file. Follow the colors, naming, and scaling guides below if you modify the icons.

    contents:
      - type: narrow image
        src: ./assets/icon-table-1.png

      - type: narrow image
        src: ./assets/icon-table-2.png

      - type: table
        content: |
          |         |               |           |
          |---------|---------------|-----------|
          | ![](./assets/icons/archive-24-2x.png)     | archive-18 | archive-24 |
          | ![](./assets/icons/arrow-down-24-2x.png)  | arrow-down-18 | arrow-down-24 |

  - type: section
    name: Name Guide

  - type: two column
    text: |
        The icon name describes the **intended use, variation, pixel size,** and **scaling**.

    contents:
        - type: wide image
          src: ./assets/name-guide.png

  - type: section
    name: Colors

  - type: two column
    text: |
      ### Standard Colors:

      - **#6A7070** - Medium Gray
      - **#FFFFFF** - White

      ### Status Colors: <span style="font-weight:normal;">*(optional)*</span>

      - **#047A9C** – Digital Pearson Blue <br> - primary focus or selected
      - **#038238** - Digital Grass Green <br> - success or correct
      - **#DB0020** - Strawberry Red <br> - error or wrong

    contents:
        - type: wide image
          src: ./assets/colors.png

  - type: section
    name: Label Spacing

  - type: two column
    text: |
      Use a minimum of **10 pixel spacing** between the icon and label.

    contents:
        - type: wide image
          src: ./assets/label-spacing.png

  - type: section
    name: Touch Target

  - type: two column
    text: |
      You can use Pearson icons as buttons. To ensure accessibility across desktop and mobile devices, a minimum of **44 x 44 pixel** touch target is required for each icon.

    contents:
        - type: wide image
          src: ./assets/touch-target.png

  - type: section
    name: Scaling

  - type: two column
    text: |
      You can scale the icons up by **2x, 3x, 4x, and 5x**. However, scaling them down or in any .5x variation, the lines and shapes will become blurry.

    contents:
        - type: wide image
          src: ./assets/scaling.png



changelog:
  - version: 2.0.0-beta.1
    changes: |
      New Pearson UI Icons
  - version: 1.2.0-beta.1
    changes: |
      - ADDED: search-plus, search-minus, bell, clock-o
  - version: 1.1.0
    changes: |
      - ADDED: question-circle, caret-right, caret-down, light-bulb-o, and icons for archive action, plus reading, business case, video, and image content types
      - TWEAKED: Icons should now all be displayed in Pitch (#231f20)
  - version: 1.0.0
    changes: |
      Initial release

---
