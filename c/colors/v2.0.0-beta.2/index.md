---
layout: component-yaml
title: Colors
section: Components
redirect_from: /docs/ui-components/colors/
version: 2.0.0-beta.2
status: deprecated
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
    link: https://docs.google.com/a/pearson.com/document/d/1ThXm4SGwyPb3wtlJGmOWLTRCIWERcLsjtP-jlkGjwAY/edit?usp=sharing

tagline: |
  Every color used in the Elemental Design library is defined in this component.
description: |
  This makes it easy to see the whole range of color in use and ensures we don't have 3 different versions of the same blue. Colors are organized into *Palettes* which contain *Foreground*, *Background*, and *Accent* colors. Any combination of foreground and background colors from the same palette are guaranteed to have sufficient contrast to meet WCAG 2.0 AA guidelines. Accent colors have no contrast guarantee and can be used for visual decoration (separator lines, for example) but not text.
features:
  - Single collection of all colors
  - Multiple palettes for dark/light themes etc.
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Only core components such as Buttons or Typography should depend directly on the colors component. Higher level components should get their colors indirectly from the core set of components. This makes it easy to update the color usage across the library.

blocks:
  - type: section
    name: Light Palette

  - type: palette
    foreground:
      - name: Charcoal
        hex: 252525
      - name: Medium Gray
        hex: 6A7070
      - name: Pearson Blue (a11y)
        hex: 00789A
      - name: Ink Blue
        hex: 005a70
      - name: Red
        hex: db0020
      - name: Green
        hex: 008035
    background:
      - name: Digital White
        hex: f9f9f9
      - name: Off White
        hex: F2F2F2
    exports:
      - Charcoal
      - Medium Gray
      - Pearson Blue
      - Ink Blue
      - Red
      - Green
      - Digital White
      - Off White
      - Light Palette

  - type: section
    name: Gray Palette

  - type: palette
    foreground:
      - name: Charcoal
        hex: 252525
    background:
      - name: Moonlight
        hex: e9e9e9
      - name: Concrete
        hex: c7c7c7
    exports:
      - Charcoal
      - Moonlight
      - Concrete
      - Gray Palette

  - type: section
    name: Exported Styles

  - type: two column
    text: |
      ### Light Palette

  - type: style table
    styles:
      - Charcoal
      - Medium Gray
      - Pearson Blue
      - Ink Blue
      - Red
      - Green
      - Digital White
      - Off White
      - Light Palette

  - type: two column
    text: |
      ### Gray Palette

  - type: style table
    styles:
      - Charcoal
      - Moonlight
      - Concrete
      - Gray Palette


changelog:
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
