---
layout: component-yaml
title: Modal
section: Components
redirect_from: /docs/ui-components/modal/
version: 1.0.0-beta.3
status: active
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
    version: 1.0.0
  - name: Typography
    version: 1.0.0
  - name: Breakpoints
    version: 1.0.0
  - name: Icons
    version: 1.0.0
  - name: Templates
    version: 1.0.0-beta.1
downloads:
  - name: Sketch
    link: ./assets/modal.sketch

tagline: |
  Defines the standard visual style for a modal element with styles for both textual and image content.
features:
  - Fully responsive, scales with browser width
  - Accessibility compliant (constrained tab scope, focus memory, etc.)
  - Styles for both textual and image content
  - Optional button toolbar
usage_guidelines: |
  You should typically avoid modals in your designs, using the styles defined here only when necessary.

blocks:
  - type: section
    name: Text Modals

  - type: two column
    text: |
      Text modals include a header with a title and standard close button. The content area can then contain either a basic text message or more structured content such as a form.

      An optional button bar can present standard actions at the bottom of the  modal.

      At smaller breakpoints the modal shifts to 100% width to prevent content from being too constrained.

      ### Accessibility considerations
      Modals must be careful to properly handle keyboard access to maintain full accessibility compliance. Specifically they must:

      #### Capture Focus
      Opening a modal should move the current keyboard focus into the first focusable element of the modal. Tabbing should only loop through items within the modal, and not escape to the underlying content.

      #### Focus restoration
      Dismissing the modal should return focus to the element that was focused when the modal was activated.
    contents:
      - type: wide image
        src: ./assets/modal-standard.png
        caption: Desktop sized modal with optional button bar.
      - type: narrow image
        src: ./assets/modal-standard-resp.png
        caption: Responsive modal without the button bar.

  - type: section
    name: Image Modals

  - type: two column
    text: |
      The image modal is for image content. It replaces the title with zoom controls and has a [Black (#000000)](/design/c/colors/v1.0.1/#rd-black-000000) background color.

    contents:
      - type: wide image
        src: ./assets/modal-image.png

  - type: section
    name: Sizes

  - type: two column
    text: |
      Modals utilize the [Static Column](/design/c/templates/v1.0.0-beta.1) template and support both the large and small size of 480px or 800px.

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
  - version: 1.0.0-beta.3
    changes: |
      - CHANGED: Merged standard and alternate modal types
      - CHANGED: Sizing now leverages the templates component
      - ADDED: A11y details
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Sketch file
      - ADDED: Long Titles
      - FIXED: Dependencies
      - FIXED: Redlines

  - version: 1.0.0-beta.1
    changes: Initial version
---
