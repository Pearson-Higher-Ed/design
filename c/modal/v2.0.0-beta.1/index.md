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
      Use modals when it is necessary to interrupt users with a message or request for certain actions.
      For example:

      * __Confirming decisions__ E.g., “Are you sure?” moment.
      * __Providing additional information__
      * __Asking for a decision__ or complete a task at an important part of their workflow.
      * __Asking for feedback__ E.g., "How would you rate this tutorial?"


      Use them sparingly as they are interruptive. For screen reader users, it is especially frustrating because they’ll lose their place in the application.


    contents:
      - type: wide image
        src: ./assets/modal_1.png


  - type: two column
    text: |

      ### Modals vs. alerts
      It’s easy to confuse [alerts](/design/c/alerts/beta/) with modals. Modals interrupt users by blocking the current view while alerts coexist on the page and do not stop the user flow. Don’t use modals when alerts are more appropriate as modals are intrusive.


  - type: section
    name: Components

  - type: two column
    text: |

      Modals contains three parts:

      * __Header__ is optional. Designers should use their best judgment to create a clear message.
      * __Content__
      * __Actions__ are optional. When there isn’t a button, you must include the “X” as a way to dismiss the modals to meet accessibility requirements.

    contents:
      - type: wide image
        src: ./assets/modal_definition.png


  - type: section
    name: Behavior

  - type: two column
    text: |

      ### Dismissing the modal
      Modals retain focus, including keyboard focus, until a certain action has been taken. Provide a visible and focusable way to close the modal.

      Here are two different approaches:

      * __Modals with actions__

        When an action is required from users, force them to make a decision by clicking a button. Don’t include the “X” or allow the users to click outside the modal to dismiss it.

      * __Modals without actions__

        For less critical content, meaning it won’t make much difference if users ignore the content, then you don’t need to include buttons. Users can simply click the “X” or click outside the modal to dismiss it. For example, a modal that displays additional information about a teacher to help students choose a class doesn’t need action buttons.


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


      * __Modals with actions:__ Sticky buttons

        [Interact with the prototype](https://preview.uxpin.com/4b90bc323219879d681c381bdc71e1d80adc9ab0#/pages/67336979/simulate/no-panels)

        The buttons must be accessible upfront so that users know that they are expected to take an action.

      * __Modal without action:__ Scrolling page

        [Interact with the prototype](https://preview.uxpin.com/4b90bc323219879d681c381bdc71e1d80adc9ab0#/pages/67336990/simulate/no-panels)

    contents:
      - type: narrow video
        src: ./assets/Prototype_modal_mobile_with_actions.mp4
        caption: Modal with actions (Mobile). This prototype failed to show the scroll bar due to technical limitation, but the actual build should have the scroll bar visible at all times for this modal.
      - type: narrow video
        src: ./assets/Prototype_modal_mobile_without_actions.mp4
        caption: Modal without actions (Mobile)


  - type: two column
    text: |

      ### Avoid long content
      Modals are not designed for displaying long content, especially when we want the users to actually read the content. Consider in-line expansion within the originating page or displaying the information on a separate page for a better user experience.

      ### Avoid modals launching modals
      Launching a modal within a modal adds complexity and is not a good user experience. Look for alternative solutions. For example, consider creating a separate page for tasks.

      ### Avoid nested scroll within a modal
      On narrow devices, there isn't enough horizontal room for a scrolling area inside modal if the modal happens to exceed the viewport as well. This would become a usability issue.


  - type: section
    name: Actions

  - type: two column
    text: |

      ### Button placement

      See the [buttons component](/design/c/buttons/beta/) for how to place the buttons.
      Avoid having more than two buttons in a modal to keep it simple for users.

    contents:
      - type: wide image
        src: ./assets/modal_button_types.png


  - type: section
    name: Responsive Behavior

  - type: two column
    text: |

      For native mobile apps, use the native modal. The specs in this documentation is for responsive web mobile design.

      This modal adjusts to different screen sizes.

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

      [See specs on Zeplin](https://zpl.io/1I2TYO). For access, contact Linda (linda.tsai@pearson.com)

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

      Line
      : - Thickness: 1px
        - [Concrete #c7c7c7](/design/c/colors/v2.0.0-beta.7/#rd-concrete)

      Spacing (Responsive)
      : - Viewport >= 768px: Standard spacing
        - Viewport < 768px: Compact spacing

      Buttons (Responsive)
      : - Style and size: [Large Buttons](/design/c/buttons/v2.1.0-beta.2/#rd-large-button)
        - Width (Viewport >= 768px): Standard
        - Width (Viewport < 768px): Expanded

      Overlay
      : - [Charcoal #252525](/design/c/colors/v2.0.0-beta.7/#rd-charcoal)
        - Opacity: 85%

      Scroll Bar
      : - Default scroll bar by browser
        - For modals with actions, make the scroll bar visible at all times


      __Note: The touch target for "X"__ is smaller than the minimal size of 44px because there is additional touch area outside the modal to accommodate for that. This allows more room for heading.


      __Use the native modal for native mobile apps.__ The specs in this documentation is for responsive web mobile design.



    contents:
      - type: wide image
        src: ./assets/modal_specs.png

  - type: two column
    text: |  

      ### Button Width

      * __Desktop__ (Viewport >= 768px): Standard

        Button width is determined by the length of the label.

      * __Mobile__ (Viewport < 768px): Expanded

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
