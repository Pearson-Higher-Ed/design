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
      Modals retain focus until dismissed or a certain action has been taken. Use them sparingly because they are interruptive. Modals can be used to

      * __Confirmation acknowledgement__ from users regarding the consequences followed by their decision
      * __Provide additional information__
      * __Ask for a decision__


    contents:
      - type: wide image
        src: ./assets/modal_1.png


  - type: two column
    text: |

      ### Modals is different from alerts
      Modals interrupt users by blocking the current view while alerts co-exist on the page and do not stop users from continuing the process. Do not use modals when alerts are more appropriate as modals are relatively intrusive.


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
        Buttons should remain accessible by default. It’s important to inform the users up-front that actions are required, so the buttons will be anchored on the bottom of the page. The scroll bar will be visible by default to suggest scrolling.

      * __Modal without action:__ page scroll

    contents:
      - type: narrow image
        src: ./assets/modal_with_actions_scrolling_mobile.png
        caption: Modal with actions (Mobile)
      - type: narrow image
        src: ./assets/modal_without_actions_scrolling_mobile.png
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
    name: Responsive Design

  - type: two column
    text: |

      ### Design changes at breakpoint = 768px
      The modal is responsive to accommodate all device sizes. See how spacing and button size change at breakpoint of 768px.

  - type: section
    name: Actions

  - type: two column
    text: |

      Buttons are positioned according to the type of actions:

      * __Affirmative actions__ are placed on the right and continues the process. They are actions that are desired by users or the application.

      * __Dismissive actions__ are placed on the left and return the user to the previous screen or step in the process.

      __Destructive actions may be affirmative actions__

      In some situations, destructive actions such as "delete" or “leave” may be affirmative actions. For example, when a student attempts to leave the page in the middle of a quiz, and is asked to confirm if the student acknowledges the consequences of leaving the page at this point. Since prior to seeing the modal, the student clicks on the “Exit” button indicates that the student desires to leave the page, so the “leave” button should be placed on the right to help the student continue with the process as expected.


      __Avoid having more than two buttons__


    contents:
      - type: wide image
        src: ./assets/modal_button_types.png

  - type: section
    name: Specs

  - type: two column
    text: |    

      Dimensions
      : - Width: auto
        - Height: auto
        - Max Width: 600px
        - Margin: 6.25%

      Heading Text
      : - [Basic Section Heading](/design/c/typography/v2.0.0/#rd-ui-headings-section-basic)
        - [Charcoal #252525](/design/c/colors/v2.0.0-beta.7/#rd-charcoal)

      Content Text
      : - [Basic Body](/design/c/typography/v2.0.0/#rd-basic-body)  
        - [Medium Grey #6a7070](/design/c/colors/v2.0.0-beta.7/#rd-medium-gray)

      "X" icon
      : - size: [remove-sm-24](/design/c/icons/v2.0.0-beta.4)
        - touch target: 36px (It's smaller than 44px because there is additional touch area outside the modal to accommodate for that. This allows more room for heading.)

      Overlay
      : - [Charcoal #252525](/design/c/colors/v2.0.0-beta.7/#rd-charcoal) at 85%


      ### Spacing

      * __Desktop__ (Viewport >= 768px): Wide spacing
      * __Mobile__ (Viewport < 768px): Compact spacing

    contents:
      - type: wide image
        src: ./assets/modal_specs.png

  - type: two column
    text: |  

      ### Button size

      * __Standard Buttons__ (Desktop)

        Width of the buttons are determined by the text length of the labels.

      * __Expanded Buttons__ (Desktop or mobile)

        Buttons expands to take up the full width of the parent container. This is to maximize the touch target.


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
