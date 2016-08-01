---
layout: component-yaml
title: Avatar Display
section: Components
redirect_from: /docs/ui-components/avatar-display/
version: 1.0.0-beta.1
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
dependencies:
  - name: Avatar
    version: 1.0.0-beta.1
downloads:
  - name: Sketch
    link: ./assets/avatar-display.sketch

tagline: |
  This component defines the standard visual style for the output display of an avatar element.
features:
  - Circular display shape
  - Large and small display sizes
usage_guidelines: |
  Every instance of the avatar display element should come from this component.

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
  - version: 1.0.0-beta.1
    changes: Initial version
---
