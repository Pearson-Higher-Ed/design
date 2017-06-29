---
layout: component-yaml
title: Layout
section: Components
version: 1.0.0-beta.1
status: active
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com


downloads:
  - name: UXD Accessibility Checklist
    link:

dependencies:
  - name: breakpoints
    version: 1.0.0

tagline: |
  A set of standards and guidelines for laying out pages.
features:
  - Includes standard breakpoints
  - Handy 12 column grid that can support many layouts
  - Guidance on standard layouts and how to communicate with developers
usage_guidelines: |
  All pages should follow the guidance of this component for laying out their contents.

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
