---
layout: component-yaml
title: Modal
section: Components
redirect_from: /docs/ui-components/modal/
version: 2.0.0-beta.1
status: active
implemented: false
people:
  - role: Designer
    name: Van Yang
    email: van.yang@pearson.com
  - role: Designer
    name: Linda Tsai
    email: linda.tsai@pearson.com

dependencies:
  - name: Buttons
    version: 1.0.0

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1PRuQGU_AlpPkWBGA5gJuOTEG3pu9xEp5_H7Z2dD7YMw/edit?usp=sharing
  - name: Sketch
    link: ./assets/modal.sketch

tagline: |
  Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.



blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Use modals deliberately as it is intrusive to the user’s work flow. Modal can be used to

      - Request for a decision from the user
      - Provide additional information
      - Alert the users of the consequences of their actions (ex: All progress in this lesson will be lost.)
      - Prevent destructive actions (ex: Are you sure you want to delete this course?)
      - Collect feedbacks and ratings

    contents:
      - type: wide image
        src: ./assets/modal_1.png
      - type: wide image
        src: ./assets/modal_definition.png

  - type: section
    name: Types

  - type: two column
    text: |
      There are two types of modals based on the level of importance of the message.

      - __Modals with actions__
        Use buttons when you need to communicate an important message or require the users to take critical actions. In this case, the modal can only be dismissed by making a selection.

      - __Modals without actions__
        For information that is not going to make an impact if the users were to neglect the content, allow the user to exit the modal by selecting “X” or anywhere outside the modal. Note that when there is no buttons, the modal must include the “X” for accessibility.

    contents:
      - type: wide image
        src: ./assets/modal_types.png


  - type: section
    name: Size / Responsive Design

  - type: two column
    text: |
      - __Large Modal (Viewport >= 768)__

        Generous spacing

      - __Small Modal (Viewport < 768)__

        Compact spacing

    contents:
      - type: wide image
        src: ./assets/modal_large.png
      - type: narrow image
        src: ./assets/modal_small.png


  - type: section
    name: Actions

  - type: two column
    text: |

      ### General rule for button placement
        - __Primary button__ is right-aligned
        - __Secondary button__ is left-aligned
      Read more on how to position buttons.


      ### For large modal (Viewport >= 768)
        Choose one of the following:
        - Button size is determined by button text length
        - Buttons expand to fill up the width of the container collectively


      ### For small modal (viewport < 768)
      Buttons expand to fill up the width of the container collectively

      ### Avoid having buttons with long text
      Button labels should be as concise as possible - one or two words. However, in the case where multiple buttons just can’t fit in one row on a narrow device, they will stack up by default. Read more about guidance on buttons.

    contents:
      - type: wide image
        src: ./assets/modal_button_placement.png


  - type: section
    name: Scrolling Modal

  - type: two column
    text: |
      When the modal content exceeds the height of the browser the modal will behave in two ways depending on whether or not the modal contains buttons. The page below the modal will not scroll.

      - __Modal with buttons: sticky buttons__
        Buttons should remain accessible by default. It’s important to inform the users up-front that actions are required, so the buttons will be anchored on the bottom of the page.

      - __Modal without buttons: page scroll__
        The scrollable area will automatically expand to include just enough space for scrolling.

    contents:
      - type: narrow image
        src: c/modal/v2.0.0-beta.1/assets/prototype_modal_with buttons.mov
      - type: narrow image
        src: ./assets/prototype_modal_no buttons.mov        

  - type: two column
    text: |
      ### Avoid using modal for displaying long content
      We don’t recommend using a modal for displaying long content as it is not designed for that purpose. From the accessibility point of view, complicated steps or actions are also not recommended. Therefore, the general rule of thumb is to keep a modal as simple as possible. If a certain steps and action must be carried out, try exploring alternative solutions without using a modal. For example, can the message be displayed on an individual for a better reading experience?

    contents:
      - type: narrow image
        src: ./assets/modal_buttons_with_long_text.png


changelog:

  - version: 2.0.0.-beta.1
    changes: |
      - Re-skinned with the latest styles
      - ADDED: Sticky buttons for long content

  - version: 1.0.1
    changes: |
      - FIXED: Responsive image button bar and sizing.
  - version: 1.0.0
    changes: Initial version
---
