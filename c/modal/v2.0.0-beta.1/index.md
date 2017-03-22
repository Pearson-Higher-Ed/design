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
  - name: typography
    version: 2.0.0
  - name: colors
    version: 2.0.0-beta.7
  - name: icons
    version: 2.0.0-beta.4


downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/document/d/1FJSGR24EpDlRvk1Ve-AjFPy-BE-qoW5ePE7Tt-CPtzs/edit
  - name: Sketch
    link: ./assets/UXF_modal_3.sketch

tagline: |
  Modal interrupts the user with a message or request for certain actions with a block of content on top of the main view.



blocks:
  - type: section
    name: Usage

  - type: two column
    text: |
      Modals are used when it is necessary to interrupt users with a message or request for certain actions. Modals retain focus until dismissed or a certain action has been taken, such as:

      * __Confirmation acknowledgement__ from users regarding the consequences followed by their decision
      * __Providing additional information__
      * __Asking for a decision__


      Use them sparingly as they are interruptive which could potentially create frustration.


    contents:
      - type: wide image
        src: ./assets/modal_1.png


  - type: two column
    text: |

      ### Modals is different from alerts
      It's easy to confuse [alerts](/design/c/alerts/beta/) with modals. Modals interrupt users by blocking the current view while alerts co-exist on the page and do not stop users from continuing the process. Do not use modals when alerts are more appropriate as modals are relatively intrusive.


  - type: section
    name: Content

  - type: two column
    text: |

      Modals contains three parts:

      * __Header__ is not needed when the message can be clearly delivered with just the content.
      * __Content__
      * __Actions__ are optional. When there is no actions provided, the “X” must be provided so it’s clear to the users how to dismiss the modal.

    contents:
      - type: wide image
        src: ./assets/modal_definition.png


  - type: section
    name: Behavior

  - type: two column
    text: |

      ### Dismissing the modal
      Modals retain focus until dismissed or a certain action has been taken. You must provide a visible, focusable and clickable way to close the modal. There are different approaches you can take depending on the level of importance of the modal:

      * __Modal with actions__

        In situations where an action is required from users, we will force users to make a selection. In this case, the “X” won’t be provided. Clicking outside of the modal will not close the modal, either. Ex: Confirm with the user about deleting a course because it is an destructive action.

      * __Modal without action__

        When the content is relatively less critical, meaning it won’t make much difference if users ignore the content, then buttons are not needed. Users can simply select the “X” or outside the modal to close the modal. Ex: Show additional information about a teacher to help student choose a class


    contents:
      - type: narrow image
        src: ./assets/modal_with_actions_mobile.png
        caption: Modal with actions (Mobile)
      - type: narrow image
        src: ./assets/modal_without_actions_mobile.png
        caption: Modal without actions (Mobile)


  - type: two column
    text: |
      ### Scrolling Modals
      When the modal content exceeds the height of the viewport the scrollable area will automatically expand to include just enough space for scrolling, without scrolling the page below.

      * __Modal with actions:__ sticky buttons

        [Click here to play with the prototype](https://preview.uxpin.com/4b90bc323219879d681c381bdc71e1d80adc9ab0#/pages/67336979/simulate/no-panels)

        Buttons should remain accessible by default. It’s important to inform the users up-front that actions are required, so the buttons will be anchored on the bottom of the page. The scroll bar will be visible by default to suggest scrolling.

      * __Modal without action:__ page scroll

        [Click here to play with the prototype](https://preview.uxpin.com/4b90bc323219879d681c381bdc71e1d80adc9ab0#/pages/67336990/simulate/no-panels)

    contents:
      - type: narrow video
        src: ./assets/Prototype_modal_mobile_with_actions.mp4
        caption: Modal with actions (Mobile)
      - type: narrow video
        src: ./assets/Prototype_modal_mobile_without_actions.mp4
        caption: Modal without actions (Mobile)


  - type: two column
    text: |

      ### Avoid long content
      Modals are not designed for displaying long content, especially when we want the users to actually read the content. Consider in-line expansion within the originating page or displaying the information on a separate page for better user experience.

      ### Avoid modals launching modals
      Launching a modal within a modal adds complexity. If they are needed to complete a task, consider using a separate page for these tasks.

      ### Avoid nested scroll within a modal
      Scrolling inside a modal can become a usability issue on narrow devices and is not recommended.


  - type: section
    name: Actions

  - type: two column
    text: |

      ### Button placement

      Follow the [buttons guidance](/design/c/buttons/beta/) for how to place buttons and see how to deal with specific cases. In general, there are two types of actions:

      * __Affirmative actions__ are placed on the right and continues the process. They are actions that are desired by users or the application.

      * __Dismissive actions__ are placed on the left and return the user to the previous screen or step in the process.


      ### Avoid having more than two buttons


    contents:
      - type: wide image
        src: ./assets/modal_button_types.png


  - type: section
    name: Responsive Behavior

  - type: two column
    text: |

      The modal is responsive to accommodate all device sizes.

      __Desktop__ (Viewport >= 768px)

      - Standard spacing
      - Standard buttons (Width is dependent upon the length of the label)

      __Mobile__ (Viewport < 768px)

      - Compact spacing
      - Expanded buttons (Occupies the full row to allow larger touch target)

    contents:
      - type: wide image
        src: ./assets/modal_1.png
        caption: Desktop (Viewport >= 768px)
      - type: narrow image
        src: ./assets/modal_small.png
        caption: Mobile (Viewport < 768px)


  - type: section
    name: Specs

  - type: two column
    text: |    

      Dimensions
      : - Height: auto
        - Width: auto
        - Max Width: 600px
        - Margin: 6.25%

      Heading Text
      : - [Basic Section Heading](/design/c/typography/v2.0.0/#rd-ui-headings-section-basic)
        - [Charcoal #252525](/design/c/colors/v2.0.0-beta.7/#rd-charcoal)

      Content Text
      : - [Basic Body](/design/c/typography/v2.0.0/#rd-basic-body)  
        - [Medium Grey #6a7070](/design/c/colors/v2.0.0-beta.7/#rd-medium-gray)

      "X" icon
      : - Size: [remove-sm-24](/design/c/icons/v2.0.0-beta.4)
        - Touch target: 36px (See notes below)

      Spacing (Responsive)
      : - Viewport >= 768px: Standard spacing
        - Viewport < 768px: Compact spacing

      Buttons (Responsive)
      : - Style and size: [Large Buttons](/design/c/buttons/v2.1.0-beta.2/#rd-large-button)
        - Width (Viewport >= 768px): Standard or expanded
        - Width (Viewport < 768px): Expanded


      Overlay
      : - [Charcoal #252525](/design/c/colors/v2.0.0-beta.7/#rd-charcoal)
        - Opacity: 85%


      __Note: The touch target for "X"__ is smaller than the minimal size of 44px because there is additional touch area outside the modal to accommodate for that. This allows more room for heading.



    contents:
      - type: wide image
        src: ./assets/modal_specs.png

  - type: two column
    text: |  

      ### Button Width

      * __Standard Buttons__ (Desktop)

        Button width is determined by the length of the label.

      * __Expanded Buttons__ (Desktop or mobile)

        Buttons expand to take up the full width of the parent container to maximize touch area.


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


  - type: two column
    text: |   

      ### Scrolling Modals
      When the modal content exceeds the height of the viewport the scrollable area will automatically expand to include just enough space for scrolling, without scrolling the page below.

      * __Modal with buttons:__ sticky buttons
      * __Modal without buttons:__ page scroll


    contents:
      - type: wide image
        src: ./assets/modal_scrolling_specs.png
      - type: wide image
        src: ./assets/modal_without_actions_scrolling.png  
        caption: Modal with buttons (Desktop)
      - type: narrow image
        src: ./assets/modal_without_actions_scrolling_mobile.png
        caption: Modal without buttons (Mobile)


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
