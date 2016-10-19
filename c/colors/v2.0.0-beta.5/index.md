---
layout: component-yaml
title: Colors
section: Components
redirect_from: /docs/ui-components/colors/
version: 2.0.0-beta.4
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
implementation: https://www.npmjs.com/package/pearson-elements
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1UmxPd4C895le-5PxkKoYrlxJ2WXlpZcftp44Pn6qkWQ/edit?usp=sharing

tagline: |
  Every color used in the Elemental Design library is defined in this component.
description: |
  This makes it easy to see the whole range of color in use and ensures we don't have 3 different versions of the same blue. Each color has a list of complement which are guaranteed to have sufficient contrast to meet WCAG 2.0 AA guidelines.
features:
  - Single collection of all colors
  - Multiple palettes for dark/light themes etc.
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Only core components such as Buttons or Typography should depend directly on the colors component. Higher level components should get their colors indirectly from the core set of components. This makes it easy to update the color usage across the library.

colors:
  Charcoal:
    hex: 252525
    uses: Intended as the default text color, replaces black in most cases.
    a11y_complements:
      - White
      - White Gray
      - Sunshine Yellow
      - Moonlight
      - Concrete
      - Digital Ice Blue
  White:
    hex: ffffff
    uses: Most content should appear on a white background, whether it spans the full page or forms a small tile. White should also be used as a text color on dark backgrounds.
    use_border: true
    a11y_complements:
      - Digital Pearson Blue
      - Ink Blue
      - Digital Grass Green
      - Charcoal
      - Medium Gray
      - Strawberry Red
  Medium Gray:
    hex: 6a7070
    uses: Intended as the secondary text color for light backgrounds.
    a11y_complements:
      - White
      - White Gray
  Digital Pearson Blue:
    hex: 047a9c
    uses: Pearson Blue is the primary brand color. It is used for common interactive items like links and primary buttons.
    a11y_complements:
      - White
      - White Gray
  Ink Blue:
    hex: 005a70
    uses: Complements Pearson Blue as a hover effect. Also designed for use as an accent color and background for light text.
    a11y_complements:
      - White
      - White Gray
      - Digital Ice Blue
      - Moonlight
  Strawberry Red:
    hex: db0020
    uses: Indicates overdue items and the concept of incorrectness.
    a11y_complements:
      - White
      - White Gray
  Digital Grass Green:
    hex: 038238
    uses: Indicates success.
    a11y_complements:
      - White
      - White Gray
  White Gray:
    hex: f5f5f5
    uses: The standard background for within applications. Only secondary content should live directly on a White Gray background, preferring to use White.
    a11y_complements:
      - Digital Pearson Blue
      - Ink Blue
      - Digital Grass Green
      - Charcoal
      - Medium Gray
      - Strawberry Red
  Sunshine Yellow:
    hex: ffb81c
    uses: Should be reserved for the most important interactive elements. More important than Pearson Blue, and should generally only appear once per screen.
    a11y_complements:
      - Charcoal
  Sunflower Yellow:
    hex: ffa519
    uses: Hover state for Sunshine Yellow.
    a11y_complements:
      - Charcoal
  Digital Ice Blue:
    hex: d6ebe8
    uses: Alternative background for screens with minimal content, such as sign in.
    a11y_complements:
      - Charcoal
      - Ink Blue
  Concrete:
    hex: c7c7c7
    uses: Intended for borders and separators, typically not used for actual content.
    a11y_complements:
      - Charcoal
      - Ink Blue
  Alto:
    hex: d9d9d9      
    uses: Default button color.
    a11y_complements:
      - Charcoal
      - Ink Blue
  Moonlight:
    hex: e9e9e9
    uses: Disabled buttons, accent color.
    a11y_complements:
      - Charcoal
      - Ink Blue

blocks:
  - type: section
    name: Primary Palette
    exports:
      - Digital Pearson Blue
      - Ink Blue
      - White
      - White Gray

  - type: two column
    text: |
      Contains the main brand colors and standard backgrounds.
    contents:
      - type: colors
        colors:
          - Digital Pearson Blue
          - Ink Blue
          - White
          - White Gray

  - type: section
    name: Secondary Palette
    exports:
      - Sunshine Yellow
      - Sunflower Yellow
      - Digital Ice Blue

  - type: two column
    text: |
      Additional brand colors that accent the page in specific circumstances.
    contents:
      - type: colors
        colors:
          - Sunshine Yellow
          - Sunflower Yellow
          - Digital Ice Blue

  - type: section
    name: Neutral Palette
    exports:
      - Charcoal
      - Medium Gray
      - Concrete
      - Alto
      - Moonlight

  - type: two column
    text: |
      Basic grays used for text, buttons, divider lines, etc.
    contents:
      - type: colors
        colors:
          - Charcoal
          - Medium Gray
          - Concrete
          - Alto
          - Moonlight

  - type: section
    name: Conditional Palette
    exports:
      - Strawberry Red
      - Digital Grass Green

  - type: two column
    text: |
      Colors that only appear under certain conditions, like success or error states.
    contents:
      - type: colors
        colors:
          - Strawberry Red
          - Digital Grass Green

  - type: section
    name: Exported Styles

  - type: style table
    styles:
      - Digital Pearson Blue
      - Ink Blue
      - White
      - White Gray
      - Sunshine Yellow
      - Sunflower Yellow
      - Digital Ice Blue
      - Charcoal
      - Medium Gray
      - Concrete
      - Alto
      - Moonlight
      - Strawberry Red
      - Digital Grass Green

changelog:
  - version: 2.0.0-beta.4
    changes: |
      - CHANGED: Added new accessibility checklist.
  - version: 2.0.0-beta.3
    changes: |
      - CHANGED: Switch back to using pure white background, and update colors to be brighter.
  - version: 2.0.0-beta.2
    changes: |
      - CHANGED: Tweak colors for accessibility.
      - CHANGED: Palette to match rebrand discussions.
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: Colors now reflect new branding.
  - version: 1.0.1
    changes: |
      - ADDED: Exported styles
  - version: 1.0.0
    changes: Initial version
---
