---
layout: component-yaml
title: Coach Marks
section: Components
version: 1.0.0-beta.2
status: deprecated
implemented: false
people:
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
  This component informs the user of a new feature, nudges a user to use a feature or guides the user through a multistep process.

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
    name: Uses

  - type: two column
    text: |
      The coach mark is used to inform and instruct the user. It can either appear automatically, such as when a user visits a page for the first time or a new feature is added, or in response to user action, like activating an info icon.

      Be careful not to use the coach mark to provide help content that would be better served by the [Contextual Help](http://pearson-higher-ed.github.io/design/c/contextual-help/) component. The info coach mark should only be used to clarify the meaning of a section of the page. Prefer to use [information text](http://pearson-higher-ed.github.io/design/c/inputs/#information-error-text) if the target is a form input.

      One reason to break this guideline is if the amount of information would be unwieldy below the input, as in the example here.
    contents:
      - type: narrow image
        src: ./assets/info.example.png
        caption: An example of using a Coach Mark when there's too much information to put under the input.

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
      Spacing
      : - 20px vertical padding
        - 24px horizontal padding
        - 4px between title and message
        - 24px between message and dismissal link

      Dimensions
      : - 280px wide at every viewport

      Arrow
      : - 16px wide, 8px tall
        - Prefer to position the arrow in the center of the box, or 32px from either side
        - If necessary the arrow may be positioned as close as 20px from either end
        - Prefer arrows to point downwards rather than upwards
        - Arrow never points out of either side

      Close icon
      : - remove-sm-18
        - Centered in a 44x44 px tap target in the upper right corner

      Colors
      : - Digital Ice Blue background color
        - All text is Charcoal

      Typography
      : - Title is UI Text - Bold
        - Message is UI Text - Basic
        - Links are link styles UI Text - Basic

    contents:
      - type: wide image
        src: ./assets/redlines.single.png
        caption: Single Instance Coach Mark

changelog:
  - version: 1.0.0-beta.2
    changes: |
      - UPDATED: Uses new visual aesthetic
  - version: 1.0.0-beta.1
    changes: |
      - CHANGED: Initial Creation
---
