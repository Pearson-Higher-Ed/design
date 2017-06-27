---
layout: component-yaml
title: Breakpoints
section: Components
version: 1.0.1
status: active
implemented: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

implementation: https://github.com/Pearson-Higher-Ed/elements/

downloads:
  - name: Sketch
    link: c/grid/v1.0.1/assets/Grid.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/11qC5a1zLuu5lreiNUSSX3djjS_KGsZxvg7H5TRyvFeU/edit?usp=sharing

tagline: |
  This component defines the standard breakpoints to use for responsive design.
features:
  - Consistent set of breakpoints
  - Sizes for phones, small and large tablets, and desktop devices
usage_guidelines: |
  Anytime you want to change a design based on the viewport width (i.e. use a media query) use the predefined widths provided by this component.

blocks:
  - type: section
    name: Widths

  - type: two column
    text: |
      The available sizes include:

      - Extra small
      - Small
      - Medium
      - Large
      - Extra large
    contents:
      - type: table
        content: |
          | Size | >= Min | < Max   |
          |:----:|:------:|:-------:|
          | xs   | 320px  | 480px   |
          | sm   | 480px  | 768px   |
          | md   | 768px  | 1024px  |
          | lg   | 1024px | 1280px  |
          | xl   | 1280px | &infin; |
    exports:
      - Extra Small
      - Small
      - Medium
      - Large
      - Extra Large

  - type: section
    name: Common Devices

  - type: two column
    text: |
      For reference, here are the breakpoints that correspond to common devices.
    contents:
      - type: table
        content: |
          | Apple Devices                  | Viewport Width | Breakpoint  |
          |:-------------------------------|:--------------:|:-----------:|
          | iPhone 4S (Portrait)           | 320px          | Extra small |
          | iPhone 5S (Portrait)           | 320px          | Extra small |
          | iPhone 6S (Portrait)           | 375px          | Extra small |
          | iPhone 6S Plus (Portrait)      | 414px          | Extra small |
          | iPhone 4S (Landscape)          | 480px          | Small       |
          | iPhone 5S (Landscape)          | 568px          | Small       |
          | iPhone 6S (Landscape)          | 667px          | Small       |
          | iPhone 6S Plus (Landscape)     | 736px          | Small       |
          | iPad Mini/iPad Air (Portrait)  | 768px          | Medium      |
          | iPad Mini/iPad Air (Landscape) | 1024px         | Large       |
          | iPad Pro (Portrait)            | 1024px         | Large       |
          | iPad Pro (Landscape)           | 1366px         | Extra large |

          | Android Phones                 | Viewport Width | Breakpoint  |
          |:-------------------------------|:--------------:|:-----------:|
          | Moto G/Moto X (Portrait)       | 360px          | Extra small |
          | Galaxy S5/S6 (Portrait)        | 360px          | Extra small |
          | Nexus 4 (Portrait)             | 384px          | Extra small |
          | Nexus 6 (Portrait)             | 411px          | Extra small |
          | LG G3 (Portrait)               | 480px          | Small       |
          | Galaxy Note 4 (Portrait)       | 480px          | Small       |
          | Moto G/Moto X (Landscape)      | 640px          | Small       |
          | Galaxy S5/S6 (Landscape)       | 640px          | Small       |
          | Nexus 4 (Landscape)            | 640px          | Small       |
          | Nexus 6 (Landscape)            | 731px          | Small       |
          | LG G3 (Landscape)              | 853px          | Medium      |
          | Galaxy Note 4 (Landscape)      | 853px          | Medium      |

          | Android Tablets                | Viewport Width | Breakpoint  |
          |:-------------------------------|:--------------:|:-----------:|
          | Nexus 7 (Portrait)             | 600px          | Small       |
          | Nexus 9 (Portrait)             | 768px          | Medium      |
          | Galaxy Tab 10 (Portrait)       | 800px          | Medium      |
          | Nexus 7 (Landscape)            | 960px          | Medium      |
          | Nexus 9 (Landscape)            | 1024px         | Large       |
          | Galaxy Tab 10 (Landscape)      | 1280px         | Extra large |

  - type: section
    name: Exported Styles

  - type: style table
    styles:
      - Extra Small
      - Small
      - Medium
      - Large
      - Extra Large

changelog:

  - version: 1.0.1
    changes: |
      - ADDED: Added sketch file featuring art boards with grid layout setup for easier consumption.
  - version: 1.0.0
    changes: Initial version
---
