---
layout: component-yaml
title: Modal
section: Components
sdk: stand_alone
redirect_from: /docs/ui-components/modal/
version: 2.0.5
status: active
implemented: true
implementation: https://github.com/Pearson-Higher-Ed/modal/
dependencies:
  - name: Buttons
    version: 2.2.1
  - name: Typography
    version: 2.1.1
  - name: Colors
    version: 3.0.1
  - name: Icons
    version: 2.3.0
  - name: Breakpoints
    version: 1.0.2

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/document/d/1FJSGR24EpDlRvk1Ve-AjFPy-BE-qoW5ePE7Tt-CPtzs/edit
  - name: Sketch
    link: ./assets/modals_5.sketch

tagline: |
  Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.



blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Use modals when it is necessary to interrupt users with a message or request for certain actions.
      For example:

      * __Confirming decisions__ E.g., “Are you sure?” moment.
      * __Providing additional information__
      * __Asking for a decision__ or complete a task at an important part of their workflow.
      * __Asking for feedback__ E.g., "How would you rate this tutorial?"


      Use them sparingly as they are interruptive. Modals can be particularly frustrating for screen reader users because these users will lose their place in the application.

    features:
      - Basic Modal

    contents:
      - type: wide image
        src: ./assets/modal_desktop_with_actions.png

  - type: two column
    text: |

      ### Modals vs. alerts
      It’s easy to confuse [alerts](/c/alerts/) with modals. Modals interrupt users by blocking the current view while alerts coexist on the page and do not stop the user flow. Don’t use modals when alerts are more appropriate as modals are intrusive.

  - type: section
    name: Components

  - type: two column
    text: |

      Modals contains three parts:

      * __Header__ (Optional)

        Users should be able to understand the choices based on the header and button label. If header is applied, make the question or statement clear followed by an explanation in the content area. Avoid apologies or ambiguity such as “Be careful!” or “Are you sure?”.

        Note that when there is no header, designer should still provide a name for the modal to the developers because a screen reader user would need this.

      * __Content__

      * __Actions__ (Optional)

        When there’s no actions, you must include the “X” as a way to dismiss the modals to meet accessibility requirements.

    contents:
      - type: wide image
        src: ./assets/modal_definition.png

    features:
      - Modal Header
      - Modal Actions


  - type: section
    name: Behavior

  - type: two column
    text: |

      ### Dismissing the modal

      Here are two different approaches:

      * __Modals with actions__

        When an action is required from users, force them to make a decision by clicking a button. Don’t include the “X” or allow the users to click outside the modal to dismiss it.

      * __Modals without actions__

        If the modal content is not as critical to the users, then you don’t need buttons. Users can simply click the “X” or anywhere outside the modal to close it. For example, a modal that displays additional information about an instructor to help students choose a class doesn’t need buttons.


    contents:
      - type: narrow image
        src: ./assets/modal_with_actions_mobile.png
        caption: Modal with actions
      - type: narrow image
        src: ./assets/modal_without_actions_mobile.png
        caption: Modal without actions


  - type: two column
    text: |
      ### Scrolling
      When the content exceeds the height of the viewport, the modal will become scrollable. The scrolling behavior differs depending on the scenarios:

      * __Modals with actions:__

        In this case, the buttons will be sticky to the bottom of the viewport making sure that they are visible to the users upfront. Users scroll inside the modal to access more content.
        See [prototype](https://pearson.invisionapp.com/share/BPDUFEYWZ#/257173380_prototype_Modal_with_actions_scrolling_mobile)

      * __Modal without actions:__

        In this case, the modal will extend “below the fold” so that users know there is more content to scroll through. This is called “page scroll” as opposed to the in-modal scroll.


    contents:
      - type: wide image
        src: ./assets/modal_desktop_with_actions_scrolling.png
      - type: narrow image
        src: ./assets/modal_scrolling modal_with actions.gif
        caption: Modal with actions (Mobile). This prototype failed to show the scroll bar due to technical limitation, but the actual build should have the scroll bar visible at all times for this modal.
      - type: narrow video
        src: ./assets/Prototype_modal_mobile_without_actions.mp4
        caption: Modal without actions (Mobile)


  - type: section
    name: Design guidelines

  - type: two column
    text: |
      ### Don't allow modals launching modals
      Launching a modal within a modal adds complexity and confusion for the users. Look for alternative solutions such as creating a separate page for the task.

      ### Avoid long content
      Modals are not designed for displaying long content, especially when we want the users to actually read the content. Consider in-line expansion within the originating page or displaying the information on a separate page for a better user experience.

      ### Avoid nested scroll within a modal
      On narrow devices, there isn't enough horizontal room for a scrolling area inside modal if the modal happens to exceed the viewport as well. This would become a usability issue.

  - type: two column
    text: |
      ### Button placement
      See [buttons](/c/buttons/) for how to place the buttons.
      Avoid having more than two buttons in a modal to keep it simple for users.

    contents:
      - type: wide image
        src: ./assets/modal_button_types.png

  - type: section
    name: Responsive behavior

  - type: two column
    text: |
      The modal adjusts itself on different devices to optimize the user experience. The modal becomes narrower and have a more compact layout on smaller devices. For more details, see the [redlines](/c/modal/#redlines).

      For native mobile apps, use the native modal. The guideline in this documentation is for responsive web mobile design.

    contents:
      - type: wide image
        src: ./assets/modal_1.png
        caption: Modal on desktop (Viewport >= 768px)
      - type: narrow image
        src: ./assets/modal_with_actions_mobile.png
        caption: Modal on iPhone 5 (Viewport = 320dp)


  - type: section
    name: Redlines

  - type: two column
    text: |

      ### Responsive Behavior
      They layout of the modal changes at different [breakpoints](/c/breakpoints/):

      - Medium device (md) and up (768px <= viewport)
      - Small device (sm) (480px <= viewport < 768px)
      - Extra small device (xs) (320px <= viewport < 480px)


  - type: two column
    text: |  

      Width
      : - md and up: 600px
        - sm: 440px
        - xs: Auto

      Distance between the modal and the edge of the viewport
      : - minimum distance: 20px

      Spacing
      : - md devices have a more generous spacing (see illustration on the right)
        - sm and xs devices have a more compact layout (see illustration on the left)

      Header text
      : - md: [Large Section UI Heading](/c/typography/v2.1.1/#typography--large-section-ui-heading) 24px
        - sm and xs: [Basic Section UI Heading](/c/typography/v2.1.1/#typography--basic-section-ui-heading) 20px
        - [Charcoal](/c/colors/v3.0.1/#colors--charcoal)

      Content text
      : - [Basic Body Copy](/c/typography/v2.1.1/#typography--basic-body-copy) 14px
        - [Charcoal](/c/colors/v3.0.1/#colors--charcoal)

      Border Radius
      : - 2px

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button) [(Large)](/c/buttons/v2.2.1/#buttons--large-button)

      "X" icon
      : - Size: [remove-sm-24](/c/icons/v2.3.0/#icons--remove-sm)
        - Touch target: 44x44px
        - [Medium Gray](/c/colors/v3.0.1/#colors--medium-gray)

      Overlay
      : - [Charcoal](/c/colors/v3.0.1/#colors--charcoal)
        - Opacity: 60%

      Focus behavior
      : - Follow [the default behaviors for "X" defined in the drawer](/c/drawer/)
        - Follow [the default behaviors for buttons](/c/buttons/)

      __Use the native modal for native mobile apps.__ The specs in this documentation is for responsive web mobile design.


    contents:
      - type: wide image
        src: ./assets/modal_specs.png

    redlines:
    - Basic Modal
    - Modal Header
    - Modal Actions


  - type: two column
    text: |   

      ### Scrolling Modals
      When the content exceeds the height of the viewport, the modal will become scrollable. The scrolling behavior differs depending on the scenarios:

      * __Modal with actions:__ Sticky buttons
      * __Modal without actions:__ Page scroll

  - type: two column
    text: |   

      Scroll Bar
      : - Default scroll bar by browser
        - If possible, make the scroll bar visible even when user is not scrolling

      Line
      : - Thickness: 1px
        - [Concrete](/c/colors/v3.0.1/#colors--concrete)

      Focus Behavior
      : - For sticky buttons, the scrollable area must be focusable and scrollable via the keyboard

      Responsive Behavior
      : - The sticky header/footer should be disabled and a standard page scroll used if the viewport height is 400px or less

    contents:
      - type: wide image
        src: ./assets/modal_scrolling_specs.png
        caption: Modal with buttons
      - type: wide image
        src: ./assets/modal_without_actions_scrolling.png  
        caption: Modal without buttons (Desktop)
      - type: narrow image
        src: ./assets/modal_without_actions_scrolling_mobile.png
        caption: Modal without buttons (Mobile)


  - type: two column
    text: |  

      ### Responsive Buttons  

      - __md and up:__ Default (fixed padding)
      - __sm & xs:__ Expanded (filling up the full width of the container)


    contents:
      - type: wide image
        src: ./assets/buttons_standard_vs_expanded.png

  - type: two column
    text: |  

      ### Buttons stack up when they don’t fit

      Button labels should be as concise as possible - one or two words. However, in the case where multiple buttons just can’t fit in one row on a narrow device, they will stack up by default.

    contents:
      - type: narrow image
        src: ./assets/modal_buttons_with_long_text.png


changelog:
  - version: 2.0.5
    person: Linda Tsai
    changes: |
      - REFINED: Content to make it more clear and concise
      - CHANGED: The minimum margin on the top and bottom of the modal to be 20px
      - FIXED: Broken links
  - version: 2.0.4
    changes: |
      - FIXED: Scrolling behavior of modal actions on a vertically constrained or zoomed in screen
      - CHANGED: Organization of usage guidelines
  - version: 2.0.3
    changes: |
      - UPDATED: UI copy in the example images
      - ADDED: Link to redlines per feature
      - UPDATED: The button style in the video example
  - version: 2.0.2
    changes: |
      - UPDATED: Dependencies (version number and links)
      - UPDATED: Images showing mockups at mobile size to have a gray (#f5f5f5) background color
  - version: 2.0.1
    changes: |
      - CHANGED: Button style to match Buttons v2.2.1 (Blue buttons)
      - CHANGED: Touch target for the "X" icon from 36x36px to 44x44px to meet accessibility standard
      - CHANGED: Margin from auto to specific values (60/20/20 for different breakpoints)
      - UPDATED: Button placement by moving the default button "Cancel" from the far left of the modal to the right. Note that it is still on the left relatively to the primary button.  
  - version: 2.0.0
    changes: |
      - Re-skinned with the latest styles
      - ADDED: Sticky buttons for long content
  - version: 1.0.1
    changes: |
      - FIXED: Responsive image button bar and sizing.
  - version: 1.0.0
    changes: Initial version
---
