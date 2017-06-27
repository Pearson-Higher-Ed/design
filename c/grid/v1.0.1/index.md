---
layout: component-yaml
title: Grid
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
implementation:
downloads:
  - name: Sketch
    link: ./assets/Grid.sketch
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/11q6G511IezRBlTdHw92UyJPl46kgmHfeQt9kho_gA7k/edit?usp=sharing

dependencies:
  - name: breakpoints
    version: 1.0.0

tagline: |
   The grid system defines the page layout for aligning elements at different viewport sizes.

features:
  - Adapts to standard breakpoints
  - Consistent fluid behavior
  - Handy 12 column grid that can support many layouts
  - Integration with Templates component for easy usage
usage_guidelines: |
  You should generally **not** use this component directly, prefer instead to use [Templates](/design/c/templates/beta) and [Presentation Strategies](/design/c/presentation-strategies/beta) in your designs.

blocks:
  - type: section
    name: Grid Structure
    exports:
      - Grid

  - type: two column
    text: |
      The grid consists of four key parts: the Container, Container Margins, Columns, and Gutters.

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
      : - ≥ 40px at [Large and Extra Large](/design/c/breakpoints/v1.0.0/#rd-large) breakpoints
        - 20px at [Small and Medium](/design/c/breakpoints/v1.0.0/#rd-medium) breakpoints
        - 10px at Extra Small breakpoints

      Gutters
      : - 40px at [Medium](/design/c/breakpoints/v1.0.0/#rd-medium) and larger breakpoints
        - 20px at [Small](/design/c/breakpoints/v1.0.0/#rd-small) breakpoints
        - 10px at [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) breakpoints

      Columns
      : - Equal widths, size determined by remaining space after accounting for the container width and gutter size

  - type: style table
    styles:
      - Grid



changelog:
  - version: 1.0.0
    changes: Initial version.
---
