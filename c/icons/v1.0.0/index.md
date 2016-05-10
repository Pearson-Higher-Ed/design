---
layout: component-yaml
title: Icons
section: Components
version: 1.0.0
status: active
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
implementation: https://pearson-elements-v0.surge.sh/elements/icons/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1SLdBJoFB7V75baDqNLoWpIR8z9t2B00_pq6zC5uvrlk/edit?usp=sharing
  - name: Font Files
    link: http://fortawesome.github.io/Font-Awesome/
  - name: Sketch
    link: ./assets/icons.sketch
  - name: Illustrator
    link: ./assets/icons.mockup.ai
dependencies:
  - name: Typography
    version: 1.0.0-beta.5

tagline: |
  Provides a standard set of icons at various sizes.
features:
  - Single collection of all icons
  - Consistent guidelines for sizing and positioning
usage_guidelines: |
  All icons should come from this component.

blocks:
  - type: section
    name: Available Icons

  - type: two column
    text: |
      Icons come from font-awesome and are currently limited to the following set:

      - check
      - times
      - times-circle-o
      - trash-o
      - chevron-down
      - chevron-up
      - chevron-right
      - chevron-left
      - thumb-tack
      - cog
      - envelope
      - search
      - plus-circle
      - calendar
      - file-o
      - info-circle
      - users
      - user
      - square-o
      - check-square-o
      - ban
      - camera
      - heart
      - heart-o
      - laptop
      - book
      - list-ul
      - th-large
      - exclamation-circle

    contents:
      - type: narrow image
        src: ./assets/icons.png
        caption: The current icon repertoire.
    exports:
      - check
      - times
      - times-circle-o
      - trash-o
      - chevron-down
      - chevron-up
      - chevron-right
      - chevron-left
      - thumb-tack
      - cog
      - envelope
      - search
      - plus-circle
      - calendar
      - file-o
      - info-circle
      - users
      - user
      - square-o
      - check-square-o
      - ban
      - camera
      - heart
      - heart-o
      - laptop
      - book
      - list-ul
      - th-large
      - exclamation-circle

  - type: section
    name: Icon Sizes and Colors

  - type: two column
    text: |
      Since we're using an icon font each symbol will just inherit the size and color of the surrounding type.
    contents:
      - type: narrow image
        src: ./assets/icon.sizes.png
        caption: Icons adopting the sizes of their containing type elements.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Just use the specified glyphs from Font Awesome and inherit the font size and color of the surrounding text.

      A lone symbol should still be wrapped in the relevant type style (e.g. Basic Label).

      See the [typography component](/design/c/typography/beta) for more information.

  - type: style table
    styles:
      - check
      - times
      - times-circle-o
      - trash-o
      - chevron-down
      - chevron-up
      - chevron-right
      - chevron-left
      - thumb-tack
      - cog
      - envelope
      - search
      - plus-circle
      - calendar
      - file-o
      - info-circle
      - users
      - user
      - square-o
      - check-square-o
      - ban
      - camera
      - heart
      - heart-o
      - laptop
      - book
      - list-ul
      - th-large
      - exclamation-circle

changelog:
  - version: 1.0.0
    changes: |
      Initial release

---
