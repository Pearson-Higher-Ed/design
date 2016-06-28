---
layout: component-yaml
title: Dropdown
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
    link: ""

dependencies:
  - name: typography
    version: 1.0.0

tagline: |
  A simple component for presenting multiple options in a condensed space.
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
---
