---
layout: component-yaml
title: Icons
section: Components
version: 1.0.0-beta.5
status: Implemented
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
  - name: Font Files
    link: http://fortawesome.github.io/Font-Awesome/
  - name: Sketch
    link: ./assets/icons.sketch
  - name: Illustrator
    link: ./assets/icons.mockup.ai

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
    contents:
      - type: narrow image
        src: ./assets/icons.png
        caption: The current icon repertoire.

  - type: section
    name: Icon Sizing

  - type: two column
    text: |
      Since we're using an icon font each symbol will just inherit the font-size of the surrounding type.
    contents:
      - type: narrow image
        src: ./assets/icon.sizes.png
        caption: Icons adopting the sizes of their containing type elements.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Just use the specified glyphs from Font Awesome and inherit the font-size of the surrounding text.

      A lone symbol should still be wrapped in the relevant type style (e.g. Basic Label).

changelog:
  - version: 1.0.0-beta.5
    changes: |
      - ADDED: Sketch and Illustrator mockup files.
      - ADDED: The camera icon.
      - FIXED: Updated image widths.
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: The ban icon.
      - FIXED: The times-circle-o icon was incorrectly referred to as the times-circle icon.

  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Additional icons, including square-o and check-square-o.
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Additional icons, including user, calendar, info-circle, and file-o.
  - version: 1.0.0-beta.1
    changes: |
      Initial release

---
