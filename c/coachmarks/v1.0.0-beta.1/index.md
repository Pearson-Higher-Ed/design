---
layout: component-yaml
title: Coach Marks
section: Components
version: 1.0.0-beta.1
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Pramit Sanyal
    email: pramit.sanyal@pearson.com
  - role: Interaction Design
    name: Albert Christy
    email: albert.christy@pearson.com
  - role: Developer
    name: Marc Donovan
    email: marc.donovan@pearson.com
implementation: https://origami.pearsoned.com/registry/components/coach-marks
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: Sketch
    link: ./assets/coach.mark.mockup.sketch

tagline: |
  This component informs the user of a new feature, nudges a user to use features or guides the user through a multistep process.

features:
  - Coach Mark and background attributes
  - Consistent guidelines on when to use the single coach mark vs. coach mark tour
  - Guidelines on positioning the coach mark to the highlighted feature

usage_guidelines: |
  Coach marks should be used sparingly in the application to avoid coach mark chains. Information presented in a coach mark should be short and sweet, focusing on one key function.

blocks:
  - type: section
    name: Single

  - type: two column
    text: |
      A single coach mark appears pointing to the targeted focus. The coach mark displays a title, description and a link to dismiss the coach mark. The coach mark can only be dismissed manually through the link or the coach marks closing "x". Once the coach mark is dismissed, it will not show again.

    contents:
      - type: narrow image
        src: ./assets/single.instance.png
        caption: The single instance coach mark.

  - type: section
    name: Tour

  - type: two column
    text: |
      The tour is a number of coach marks strung together through previous and next links. The tour is used to point out multiple pieces of functionality introduced in a related workflow. A tour can also be used to show the steps a user needs to take to finish a workflow. Closing the tour will close all related coach marks in the sequence.

      ### Options

      #### Additional numbering
      An additional numbering system can be added to the coach mark tour. Use this option when the tour is a true sequential process.

    contents:
      - type: wide image
        src: ./assets/tour.pic1.png
        caption: First Coach Mark in Tour
      - type: wide image
        src: ./assets/tour.pic2.png
        caption: Second Coach Mark in Tour
      - type: wide image
        src: ./assets/tour.pic3.png
        caption: Third Coach Mark in Tour
      - type: wide image
        src: ./assets/tour.alt.png
        caption: Alternate tour design with number in title.

  - type: section
    name: < 480px Viewport

  - type: two column
    text: |
      At the extra small breakpoint < 480px the arrow is removed and the coach mark is centered onto the screen under the focus.

    contents:
      - type: narrow image
        src: ./assets/mobile.under480.png
        caption: The coach mark arrow is removed in this mobile view.

  - type: section
    name: Target Highlight and Modal Functionality

  - type: two column
    text: |
      When a coach mark needs to stand out and stop all other user interaction on a page, the screen can be dimmed and the target of the coach mark should be highlighted. Step by step tours that move a user through various functions on a screen is a good candidate to utilize the modal dimming.

      Highlighting is done by creating a div without a background on the target and adding a expanding transparent box-shadow around the object. When adding the transparent div be conscience of the space around the item and highlight the container div if it allows for breathing room around the element you are targeting.

    contents:
      - type: narrow image
        src: ./assets/highlight.right.png
        caption: |
          Do
          Give the target breathing room in the highlight.
      - type: narrow image
        src: ./assets/highlight.wrong.png
        caption: |
          Do Not
          Crowd the target with the highlight.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Single

      #### ≥ 480px

      Dimensions - Bubble
      : - 300px wide
        - Height varies by content
        - 4px radius

      Dimensions - Arrow
      : - 15px high
        - 30px wide

      Shadow
      : - 0px h-shadow
        - 1px v-shadow
        - 10 blur
        - 0 spread

      Spacing
      : - Title, Body left aligned
        - close "x" and "Got it" link right aligned
        - 20px padding top, left and bottom
        - 25px padding right
        - 10px padding right for close "x"
        - 20px between Title and Body
        - 15px between Body and "Got it" link.

      Background
      : - White (#FFFFFF)

      Typography
      : - Title is Bold Label Pitch
        - Body is Basic Body Small Variant
        - Link is Basic Body Link

      States
      : - Links use the browser default style for focus
        - Hovering shows the hand icon, but otherwise no style change

      #### < 480px

      Dimensions - Arrow
      : - None

      Align
      : - Centered on Screen

    contents:
      - type: narrow image
        src: ./assets/redlines.singleinstance1.png
        caption: Single Instance Coachmark ≥ 480px
      - type: narrow image
        src: ./assets/redlines.singleinstance2.png
        caption: Single Instance Coachmark ≥ 480px
      - type: narrow image
        src: ./assets/redlines.singleinstance.small.png
        caption: Single Instance Coachmark < 480px

  - type: two column
    text: |
      ### Tour

      #### ≥ 480px

      Dimensions - Bubble
      : - 300px wide
        - Height varies by content
        - 4px radius

      Dimensions - Arrow
      : - 15px high
        - 30px wide

      Spacing
      : - Title, Body left aligned
        - close "x" and "Got it" link right aligned
        - 20px padding top, left and bottom
        - 25px padding right
        - 10px padding right for close "x"
        - 20px between Title and Body
        - 15px between Body and "Got it" link.

      Background
      : - White (#FFFFFF)

      Typography
      : - Title is Bold Label Pitch
        - Body is Basic Body Small Variant
        - Links are Basic Body Link
        - Numbering is Small Label Gray No. 1

      Dimmed Browser
      : - Black 20% Opacity

      Variant Numbering
      : - 30px high
        - 30px wide
        - background Basic Blue
        - border 1px Sky Blue
        - Large Label Bold White
        - 14px padding right

      States
      : - Links use the browser default style for focus
        - Hovering shows the hand icon, but otherwise no style change

      #### < 480px

      Dimensions - Arrow
      : - None

      Align
      : - Centered on Screen

      #### Target Highlight and Background Dim

      Highlight
      : - | box-shadow 0 0 0 9999999px rgba (0,0, .4)

      The Highlight is created by focusing on the div and dimming the rest of the screen by adding a giant box shadow that encompasses the screen.


    contents:
      - type: narrow image
        src: ./assets/redlines.tour1.png
      - type: narrow image
        src: ./assets/redlines.tour2.png
      - type: narrow image
        src: ./assets/redlines.tour.alt.png
        caption: Variant Numbering Tour Coach Mark

changelog:
  - version: 1.0.0-beta.1
    changes: |
      - CHANGED: Initial Creation
---
