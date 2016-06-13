---
layout: component-yaml
title: Modal
section: Components
redirect_from: /docs/ui-components/modal/
version: 1.0.0-beta.1
status: deprecated
implemented: false
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Steph Mineart
    email: steph.mineart@pearsoned.com
  - role: Designer
    name: Sennett Johnson
    email: sennett.johnson@pearson.com
  - role: Designer
    name: Elle Steiner
    email: elle.steiner@pearson.com
dependencies:
  - name: Buttons
    version: 1.0.0-beta.5
  - name: Typography
    version: 1.0.0-beta.5
  - name: Breakpoints
    version: 1.0.0-beta.2
  - name: Icons
    version: 1.0.0-beta.8

tagline: |
  This component defines the standard visual style for the modal element.
features:
  - Fully responsive, scales with browser width
  - Variable width can be set
  - Keyboard accessible
  - Tab scope constrained to modal
  - Focus memory on modal entry/exit
usage_guidelines: |
  Every instance of a modal element should come from this component.

blocks:
  - type: section
    name: Modal Types

  - type: two column
    text: |
      ### Standard

      A modal window requires the user to interact with it before returning to the parent window or application.

      The default modal style is comprised of a title area with close button, a content area, and a footer area with actionable [Standard Buttons](/design/c/buttons/v1.0.0/#rd-standard-button).

    contents:
      - type: wide image
        src: ./assets/modal-standard.png

  - type: two column
    text: |
      ### Alternate

      The alternate modal is similar to the standard modal but has a title area with a [Sea (#0C5D99)](/design/c/colors/v1.0.1/#rd-sea-0c5d99) background color.

    contents:
      - type: wide image
        src: ./assets/modal-alternate.png

  - type: two column
    text: |
      ### Image

      The image modal is for image content. It replaces the title with zoom controls and has a [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000) background color.

    contents:
      - type: wide image
        src: ./assets/modal-image.png

  - type: section
    name: Responsive

  - type: two column
    text: |
      The modal is fully responsive down to the [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) width of 320px.

      The modal [Large Title](/design/c/typography/v1.0.0/#rd-large-title) reduces in font size for [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) viewports.

    contents:
      - type: narrow image
        src: ./assets/modal-standard-resp.png
        caption: Standard Modal
      - type: narrow image
        src: ./assets/modal-alternate-resp.png
        caption: Alternate Modal
      - type: narrow image
        src: ./assets/modal-image-resp.png
        caption: Image Modal

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Standard

      Overlay
      : - Background Color: rgba(0, 0, 0, 0.50)

      Window
      : - Width: 80% of Viewport (100% for [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) Viewports)
        - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Border: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)

      Title Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Text: [Large Title](/design/c/typography/v1.0.0/#rd-large-title)
        - Color: [Pitch (#231F20)](/design/c/colors/v1.0.1/#rd-pitch-231f20)
        - Padding: 11px
        - Icon: [fa-close](/design/c/icons/v1.0.0/#rd-times)
        - Border Bottom: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)

      Content Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Text: [Basic Body](/design/c/typography/v1.0.0/#rd-basic-body)
        - Padding: 15px

      Footer Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Padding: 11px
        - Border Top: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)
        - Buttons: [Standard Size](/design/c/buttons/v1.0.0/#rd-standard-button)

    contents:
    - type: wide image
      src: ./assets/modal-standard-red.png

  - type: two column
    text: |
      ### Alternate

      Overlay
      : - Background Color: rgba(0, 0, 0, 0.50)

      Window
      : - Width: 80% of Viewport (100% for [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) Viewports)
        - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Border: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)

      Title Area
      : - Background Color: Sea (#0C5D99)
        - Text: [Large Title](/design/c/typography/v1.0.0/#rd-large-title)
        - Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Padding: 11px
        - Icon: [fa-close](/design/c/icons/v1.0.0/#rd-times)

      Content Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Text: [Basic Body](/design/c/typography/v1.0.0/#rd-basic-body)
        - Padding: 15px

      Footer Area
      : - Background Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Padding: 11px
        - Border Top: 1px solid [Sidewalk (#B3B3B3)](/design/c/colors/v1.0.1/#rd-sidewalk-b3b3b3)
        - Buttons: [Standard Size](/design/c/buttons/v1.0.0/#rd-standard-button)

    contents:
    - type: wide image
      src: ./assets/modal-alternate-red.png

  - type: two column
    text: |
      ### Image

      Overlay
      : - Background Color: rgba(0, 0, 0, 0.50)

      Window
      : - Width: 80% of Viewport (100% for [Extra Small](/design/c/breakpoints/v1.0.0/#rd-extra-small) Viewports)
        - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000)

      Title Area
      : - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000)
        - Text: [Large Title](/design/c/typography/v1.0.0/#rd-large-title)
        - Color: [White (#FFFFFF)](/design/c/colors/v1.0.1/#rd-white-ffffff)
        - Diabled Color: [Gray No.1 (#565656)](/design/c/colors/v1.0.1/#rd-gray-no-1-565656)
        - Padding: 11px
        - Icon: [fa-close](/design/c/icons/v1.0.0/#rd-times), icon-zoom-out, icon-zoom-in

      Content Area
      : - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000)

      Footer Area
      : - Background Color: [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000)
        - Height: 15px

    contents:
    - type: wide image
      src: ./assets/modal-image-red.png


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
