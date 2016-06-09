---
layout: component-yaml
title: Grid
section: Components
version: 1.0.0-beta.1
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1ThXm4SGwyPb3wtlJGmOWLTRCIWERcLsjtP-jlkGjwAY/edit?usp=sharing

dependencies:
  - name: breakpoints
    version: 1.0.0

tagline: |
  A low level framework for positioning elements on the page.
features:
  - Adapts to standard breakpoints
  - Consistent fluid behavior
  - Handy 12 column grid that can support many layouts
  - Support for nested grids
usage_guidelines: |
  You should generally **not** use this component directly, prefer Templates and Layouts in your designs.

blocks:
  - type: section
    name: Grid Structure

  - type: two column
    text: |
      The grid consists of several key parts that include the Container, Container Margins, Columns, and Gutters.

      All columns reside within the *Container*, which is located at the root level of a page. Depending on the breakpoint, the container will have *Container Margins* of various sizes. The container also has a maximum width property, beyond which only the container margins grow in size.

      The container is divided into 12 proportional *Columns* which contain actual content. These are separated by *Gutters* of a fixed size (which varies based on the breakpoint again).

      See the redlines for the exact dimensions of each feature at each breakpoint.
    contents:
      - type: wide image
        src: ./assets/illustration.png
        caption: The key parts of the grid.

  - type: section
    name: Redlines

  - type: two column
    text: |

      Container
      : - Maximum width of 1140px
        - Always horizontally centered

      Container Margins
      : - ≥ 40px at Large and Extra Large breakpoints
        - 20px at Small and Medium breakpoints
        - 10px at Extra Small breakpoints

      Gutters
      : - 40px at Medium and larger breakpoints
        - 20px at Small breakpoints
        - 10px at Extra Small breakpoints

      Columns
      : - Equal widths, size determined by remaining space after accounting for the container width and gutter size





changelog:
  - version: 1.0.0-beta.1
    changes: Initial version.
---
