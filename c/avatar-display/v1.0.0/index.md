---
layout: component-yaml
title: Avatar Display
section: Components
redirect_from: /docs/ui-components/avatar-display/
version: 1.0.0
status: active
implemented: false
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Sennett Johnson
    email: sennett.johnson@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1f19T-QT-v73bswlOvjYYDrkpDS0uDfQ4AMnOP2no8nI/edit?usp=sharing
  - name: Sketch
    link: ./assets/avatar-display.sketch
  - name: Illustrator
    link: ./assets/avatar-display.ai

tagline: |
  This component defines the standard visual style for the output display of an avatar element.
features:
  - Circular display shape
  - Large and small display sizes
usage_guidelines: |
  Every instance of a user avatar should come from this component.

blocks:
  - type: section
    name: Avatar Shape

  - type: two column
    text: |
      ### Circle

    contents:
      - type: narrow image
        src: ./assets/circle-default.png
        caption: Default Avatar
      - type: narrow image
        src: ./assets/circle-photo.png
        caption: Photo Avatar

  - type: section
    name: Avatar Size

  - type: two column
    text: |
      The avatar display component can be rendered in two sizes.

      ### Large Size

      The large size avatar is recommended for use in account detail view pages.

    contents:
      - type: narrow image
        src: ./assets/circle-default.png
        caption: Default Avatar
      - type: narrow image
        src: ./assets/circle-photo.png
        caption: Photo Avatar

  - type: two column
    text: |
      ### Small Size

      The small size avatar is recommended for standard use. This includes student rosters, submissions, communication, and account icons.

    contents:
      - type: narrow image
        src: ./assets/circle-default-sm.png
        caption: Default Avatar
      - type: narrow image
        src: ./assets/circle-photo-sm.png
        caption: Photo Avatar

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Large Size

      Dimensions
      : - Width: 120px
        - Height: 120px

      Circle
      : - Border Radius: 50%

    contents:
    - type: narrow image
      src: ./assets/circle-photo-red.png

  - type: two column
    text: |
      ### Small Size

      Dimensions
      : - Width: 50px
        - Height: 50px

      Circle
      : - Border Radius: 50%

    contents:
    - type: narrow image
      src: ./assets/circle-photo-sm-red.png

changelog:
  - version: 1.0.0
    changes: Initial version
---
