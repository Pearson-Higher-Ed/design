---
layout: component-yaml
title: Loading Indicator
section: Components
redirect_from: /docs/ui-components/loading-indicator/
version: 1.0.0-beta.1
status: beta
implemented: false
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: edward.zee@pearson.com
dependencies:
  - name: Icons
    version: 1.2.0-beta.1
  - name: Colors
    version: 2.0.0-beta.7
  - name: Typography
    version: 2.0.0-beta.9
downloads:
  - name: UX Accessibility Checklist
    link:
  - name: Sketch
    link: ./assets/loading-indicator.sketch

tagline: |
  Defines the standard visual style for a loading indicator.
features:
  - Accessibility compliant
  - Animated loading indicator
usage_guidelines: |
  Use a loading indicator to show that a page is in the process of loading.

blocks:
  - type: section
    name: General Usage Guidelines

  - type: two column
    text: |
      A loading indicator is comprised of a:
      : - Background container
        - Spinner icon
        - Label

      A loading indicator:
      : - Provides visual feedback to users that they have initiated a process and it holds their attention for processes that take longer than one second. (Do not use a loading indicator for processes that take less than one second since this may confuse users.)
        - Should always appear over the content area and be vertically and horizontally centered in the viewport.

      There is no visual lightbox effect, however, the user cannot interact with the UI while loading is in process.

    contents:
      - type: wide image
        src: ./assets/positioning.png
        caption: Loading indicator should always appear over the content area.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Positioning
      : - Vertically and horizontally centered
        - Always on top of contents

      Spacing
      : - 20px spacing on either side of the icon and text
        - 12px spacing between icon and text

      Colors
      : - Background Color: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal-252525)
        - Text: [White](/design/c/colors/v2.0.0/#rd-white-ffffff)
        - Spinner Icon: [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise-19A5A3)

      Animation
      : - Spinner icon should rotate in a clockwise direction.

    contents:
      - type: wide image
        src: ./assets/redlines.png
        caption: Loading indicator redlines.

      - type: narrow image
        src: ./assets/spinner.png
        caption: Spinner detail.

      - type: narrow image
        src: ./assets/animation.png
        caption: Loading indicator animation.

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
