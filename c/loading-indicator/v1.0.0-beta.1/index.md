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
  Use a loading indicator to inform the user that the page will take some time to load.

blocks:
  - type: section
    name: General Usage Guidelines

  - type: two column
    text: |
      Loading indicators are comprised of a background container, a spinner icon, and loading indication text.

      The loading indicator component is to be used to provide visual feedback to the user that they have initiated a process.

      Loading indicators are to be used for processes that will take longer than one second.  We do this to keep the user's attention.  Do not use loading indicators for processes that are faster than one second as this may cause users to wonder what they missed if the indicator disappears too quickly.

      The loading indicator should always sit over any page contents.  It should be positioned vertically and horizontally centered in the viewport.

    contents:
      - type: wide image
        src: ./assets/positioning.png
        caption: Loading indicator always sits over any page contents.

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
        src: ./assets/animation.png
        caption: Loading indicator animation.

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
