---
layout: component-yaml
title: Loading Indicator
section: Components
redirect_from: /docs/ui-components/loading-indicator/
version: 1.0.0-beta.3
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: edward.zee@pearson.com
dependencies:
  - name: Colors
    version: 2.0.0
  - name: Typography
    version: 2.0.0
downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1BygpweQJc6NV58izkcJRAc_QXh5lSRDyzHHU6qRCq-g/edit?usp=sharing
  - name: Sketch
    link: ./assets/loading-indicator.sketch

tagline: |
  Defines the standard visual style for a loading indicator.
features:
  - Accessibility compliant
  - Animated loading indicator
usage_guidelines: |
  Use a loading indicator to show that a page is in the process of loading or an action is being completed.

blocks:
  - type: section
    name: Loading Indicator

  - type: two column
    text: |
      A loading indicator provides visual feedback to users that they have initiated a process and it holds their attention for processes that take longer than one second.

      (Do not use a loading indicator for processes that take less than one second since this may confuse users.)

      Only one indicator should appear on the page at a time.

      There is no visual lightbox effect, however, the user cannot interact with the UI while loading is in process.

    contents:
      - type: wide image
        src: ./assets/positioning.png
        caption: Loading indicator should always appear over the content area.
      - type: narrow video
        src: ./assets/animation.mp4
        caption: Example of the loading animation.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Positioning
      : - Vertically and horizontally centered in the viewport
        - Always on top of contents

      Sizing and spacing
      : - Chip is 200px wide and 70px tall
        - Text and indicator are centered in the chip
        - 12px spacing between icon and text
        - Text may wrap to multiple lines if needed, should stay vertically centered
        - Chip has 20px margins that force text to wrap

      Colors
      : - Background Color: [Charcoal](/design/c/colors/v2.0.0/#rd-charcoal-252525)
        - Text: [White](/design/c/colors/v2.0.0/#rd-white-ffffff)
        - Spinner: [Digital Marine Turquoise](/design/c/colors/v2.0.0/#rd-digital-marine-turquoise-19A5A3)

      Typography
      : - UI Text - Basic

      Spinner
      : - Composed of 8 circles arranged equally around a circle
        - Each dot is a 4px circle except for the larger dot which is 6px
        - The spinner fits inside a 30px box

      Animation
      : - Dots take 0.2s to grow and 0.2s to shrink
        - The next dot in sequence starts growing as soon as the previous dot starts shrinking
        - The animation proceeds in a clockwise direction

      Behavior
      : - While the spinner is displayed none of the UI behind it should be interactive

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
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Accessibility checklist
      - FIXED: Redline formatting

  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Animation detail

  - version: 1.0.0-beta.1
    changes: Initial version
---
