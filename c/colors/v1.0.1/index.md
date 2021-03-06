---
layout: component-yaml
title: Colors
section: Components
redirect_from: /docs/ui-components/colors/
version: 1.0.1
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
      - name: Pitch
        hex: 231f20
      - name: Gray No. 1
        hex: 565656
      - name: Royal Navy
        hex: 094877
      - name: Hyperdrive
        hex: 0d65a6
      - name: Firetruck
        hex: D0021B
      - name: Spruce
        hex: 076826
    background:
      - name: Brightly Lit
        hex: E6E6E6
      - name: Off White
        hex: F2F2F2
      - name: Dirty Ice
        hex: F8F8F8
      - name: White
        hex: FFFFFF
      - name: Blue Milk
        hex: D9EEFF
      - name: Highlighter
        hex: FDEC2E
    accents:
      - name: Boring
        hex: A6A8AB
      - name: Sidewalk
        hex: B3B3B3
      - name: Hairline Gray
        hex: D0D0D0
    exports:
      - Pitch (#231f20)
      - Gray No. 1 (#565656)
      - Royal Navy (#094877)
      - Hyperdrive (#0d65a6)
      - Firetruck (#D0021B)
      - Spruce (#076826)
      - Brightly Lit (#E6E6E6)
      - Off White (#F2F2F2)
      - Dirty Ice (#F8F8F8)
      - White (#FFFFFF)
      - Blue Milk (#D9EEFF)
      - Highlighter (#FDEC2E)
      - Boring (#A6A8AB)
      - Sidewalk (#B3B3B3)
      - Hairline Gray (#D0D0D0)

  - type: section
    name: Dark Palette

  - type: palette
    foreground:
      - name: White
        hex: FFFFFF
      - name: Gray Wash
        hex: AEAEAE
    background:
      - name: Black
        hex: "000000"
      - name: Gutenberg Black
        hex: 333333
      - name: Full Moon
        hex: 424242
    accents:
      - name: Asphalt
        hex: 3f3f3f
      - name: Smoke Gray
        hex: 545454
    exports:
      - White (#FFFFFF)
      - Gray Wash (#AEAEAE)
      - Black (#000000)
      - Gutenberg Black (#333333)
      - Full Moon (#424242)
      - Asphalt (#3f3f3f)
      - Smoke Gray (#545454)

  - type: section
    name: Blue Palette

  - type: palette
    foreground:
      - name: White
        hex: FFFFFF
    background:
      - name: Basic Blue
        hex: 107ACA
      - name: Sea
        hex: 0C5D99
    accents:
      - name: Deep Sea
        hex: 0A4D80
      - name: Sky Blue
        hex: 9DC0DB
    exports:
      - White (#FFFFFF)
      - Basic Blue (#107ACA)
      - Sea (#0C5D99)
      - Deep Sea (#0A4D80)
      - Sky Blue (#9DC0DB)

  - type: section
    name: White Palette

  - type: palette
    foreground:
      - name: Sandy Gray
        hex: 6d6d6d
    background:
      - name: White
        hex: ffffff
    exports:
      - Sandy Gray (#6d6d6d)
      - White (#ffffff)

  - type: section
    name: Exported Styles

  - type: two column
    text: |
      ### Light Palette

  - type: style table
    styles:
      - Pitch (#231f20)
      - Gray No. 1 (#565656)
      - Royal Navy (#094877)
      - Hyperdrive (#0d65a6)
      - Firetruck (#D0021B)
      - Spruce (#076826)
      - Brightly Lit (#E6E6E6)
      - Off White (#F2F2F2)
      - Dirty Ice (#F8F8F8)
      - White (#FFFFFF)
      - Blue Milk (#D9EEFF)
      - Highlighter (#FDEC2E)
      - Boring (#A6A8AB)
      - Sidewalk (#B3B3B3)
      - Hairline Gray (#D0D0D0)

  - type: two column
    text: |
      ### Dark Palette

  - type: style table
    styles:
      - White (#FFFFFF)
      - Gray Wash (#AEAEAE)
      - Black (#000000)
      - Gutenberg Black (#333333)
      - Full Moon (#424242)
      - Asphalt (#3f3f3f)
      - Smoke Gray (#545454)

  - type: two column
    text: |
      ### Blue Palette

  - type: style table
    styles:
      - White (#FFFFFF)
      - Basic Blue (#107ACA)
      - Sea (#0C5D99)
      - Deep Sea (#0A4D80)
      - Sky Blue (#9DC0DB)

  - type: two column
    text: |
      ### White Palette

  - type: style table
    styles:
      - Sandy Gray (#6d6d6d)
      - White (#ffffff)

changelog:
  - version: 1.0.1
    changes: |
      - ADDED: Exported styles
  - version: 1.0.0
    changes: Initial version
---
