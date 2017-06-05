---
layout: component-yaml
title: Buttons
section: Components
version: 2.1.2-beta.1
status: active
implemented: false
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: QA
    name: Eajaz
implementation: https://pearson-elements-v0.surge.sh/elements/buttons/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1eSGAoNb7F1A8iA_DqLQfSP_TxzuV0V2yTAK8ksDeQBU/edit?usp=sharing
  - name: Sketch
    link: ./assets/Buttons_06042017.sketch

dependencies:
  - name: Colors
    version: 2.1.0
  - name: Typography
    version: 2.0.0

tagline: Buttons communicate the action that will occur when the user trigger them.
features:
usage_guidelines:

blocks:
  - type: section
    name: Types

  - type: two column
    text: |
      There are three types of buttons.

      * __Primary__ indicates the main call to action and should only appear once per group of buttons.

      * __Default__ is your basic button, it can appear multiple times in a given group.

      * __Call To Action (CTA)__ is your Call To Action button and should be used only in very specific instances such as Sign-In.  It takes a higher priority over the Primary button type.  It is the single most important action you can take on a page.  They can only be used ONCE per page.  **There is no disabled state for the CTA button type.**

      If a Default or Primary button increases in priority within the context of the same page, it can convert to a CTA button.

    contents:
      - type: wide image
        src: ./assets/types@2.png
        caption: Three button types (Large)

  - type: section
    name: Sizes

  - type: two column
    text: |
      Buttons come in small, medium and large/default sizes. The standard/large size is preferred, but feel free to use the small size where they would fit better with surrounding content. Medium button sizes are meant to only pair with equally sized inputs.  Standard/Large buttons are to be used when the UI appears on a mobile device or screen smaller than 768px width (tablet portrait view).
    contents:
      - type: wide image
        src: ./assets/size@2.png
        caption: Three button sizes








  - type: section
    name: Disabled Buttons

  - type: two column
    text: |
      Use a disabled button only if an action on the current screen can enable it (action possibility).  A disabled button should only appear when contextually relevant.  If the button is not needed for the task at hand, it should be hidden.  

      If a bank of 2 or more buttons is present but can only be enabled by direct action on the same screen, it can be hidden and only shown when enabled to give emphasis of new controls available to the user.
    contents:
      - type: wide image
        src: ./assets/disabled.example.png
        caption: Examples of when to enable/disable vs. show/hide buttons

  - type: section
    name: Link Style Buttons

  - type: two column
    text: |
      In situations where link styled text is to be used in place of a button for the purposes of de-emphasizing an action (visual hierarchy), link style buttons should be used.  The premise stands that links are to be used for navigation and buttons are to be used for actions.  The need for a link styled button is conform to [Pearson Accessibility Guidelines for E-Learning (#11 Semantic Markup)][Accessibility]:

      [Accessibility]: http://wps.pearsoned.com/accessibility/115/29601/7577872.cw/index.html#PG11

      > *Identify roles (e.g. heading, numbered list, bulleted list, data table, paragraph, emphasized text) of page elements using conventions for the media type. (And do not misidentify roles by using those conventions solely for their visual effects.)*
    contents:
      - type: text
        content: |

          ### Do:
            - Use link style buttons to de-emphasize less important actions.

              *Examples*: Edit, Dismiss, Resend Verification Email, and Reset Password

            - Use link style buttons to trigger an action.
            - Indicate in design specification the presence of a link style button to your developer.
            - Use the same visual styling as link text.  [See typography specification document.](http://pearson-higher-ed.github.io/design/c/typography/)

          ### Don't:
            - Use link style buttons as part of a grouping with other buttons (button bars, save/cancel).
            - Use link style buttons for navigation.

  - type: section
    name: Labels

  - type: two column
    text: |
      A button is meant to direct users into taking the action you want them to take. Help users by writing button labels that clearly explain what each button does.
    contents:
      - type: text
        content: |
          ### Do:
            - Keep text short. Use as few words as possible.

              *Examples*: Next, Save, Create, View, Edit, Learn more, Study, Review, Delete, Cancel, and Close

            - Use sentence case.
            - Capitalize proper nouns.
            - Use specific action-oriented text for CTAs.

              *Examples*: Activate, Create account, Sign in, Reset password, Submit, Resend Verification Email, and Go to Dashboard

          ### Be sure to:
            - Look across the experience and check for consistent use of labels.
            - Reserve enough space in the label for translation to other languages.
            - Avoid excessive use of exclamation points (!).


  - type: section
    name: Button placement

  - type: two column
    text: |  

      Buttons are positioned according to the type of actions:

      * __Affirmative actions__ are placed on the right and continue the process. They are actions that are desired by users or the application.

      * __Dismissive actions__ are placed on the left and return the user to the previous screen or step in the process.

      __Destructive actions may be affirmative actions__

      In some situations, destructive actions such as "delete" or “leave” may be affirmative actions. For example, when a student attempts to leave the page in the middle of a quiz, and is asked to confirm if the student acknowledges the consequences of leaving the page at this point. Since prior to seeing the modal, the student clicks on the “Exit” button indicates that the student desires to leave the page, so the “leave” button should be placed on the right to help the student continue with the process as expected.    


    contents:
      - type: wide image
        src: ./assets/modal.example.png  



  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Large (Standard)
      : - 44px tall
        - 20px horizontal padding
        - [UI Heading - Section - Small](/design/c/typography/v2.0.0/#rd-ui-headings-section-basic)

      Medium
      : - 36px tall
        - 12px horizontal padding
        - [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic)

      Small
      : - 32px tall
        - 12px horizontal padding
        - [UI Text - Basic](/design/c/typography/v2.0.0/#rd-ui-text-basic)


    contents:
      - type: wide image
        src: ./assets/redline_size@2.png


  - type: two column
    text: |
      ### Default buttons

      Normal
      : - BG: [Moonlight (#E9E9E9)](/design/c/colors/v2.1.0/#rd-digital-moonlight)
        - Text: [Charcoal (#252525)](/design/c/colors/v2.1.0/#rd-charcoal)
        - Border: 1px [Concrete (#C7C7C7)](/design/c/colors/v2.1.0/#rd-concrete)

      Hover/Active
      : - BG: [Alto (#D9D9D9)](/design/c/colors/v2.1.0/#rd-alto)
        - Text: [Charcoal (#252525)](/design/c/colors/v2.1.0/#rd-charcoal)
        - Border: 1px [Concrete (#C7C7C7)](/design/c/colors/v2.1.0/#rd-concrete)

      Disabled
      : - BG: [Moonlight (#E9E9E9)](/design/c/colors/v2.1.0/#rd-digital-moonlight)
        - Text: [Concrete (#C7C7C7)](/design/c/colors/v2.1.0/#rd-concrete)

      Focus
      : - Browser default style

    contents:
      - type: wide image
        src: ./assets/redline_types@2.png
    exports:
      - Default Button


  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - BG: [Digital Marine Turquoise (#19A6A4)](/design/c/colors/v2.1.0/#rd-digital-marine-turquoise)
        - Text: [White](/design/c/colors/v2.1.0/#rd-white)

      Hover/Active
      : - BG: [Brackish Turquoise (#179599)](/design/c/colors/v2.1.0/#rd-brackish-turquoise)
        - Text: [White](/design/c/colors/v2.1.0/#rd-white)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style

    exports:
      - Primary Button

  - type: two column
    text: |
      ### CTA button (Call To Action)

      Normal Yellow
      : - BG: [Sunshine Yellow (#FFB81C)](/design/c/colors/v2.1.0/#rd-sunshine-yellow)
        - Text: [Charcoal (#252525)](/design/c/colors/v2.1.0/#rd-charcoal)

      Hover/Active Yellow
      : - BG: [Sunflower Yellow (#FF9A19)](/design/c/colors/v2.1.0/#rd-sunflower-yellow)
        - Text: [Charcoal (#252525)](/design/c/colors/v2.1.0/#rd-charcoal)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style

    exports:
      - CTA Button

  - type: two column
    text: |
      ### Corner radius
      All sizes use a 2px border radius.

  - type: two column
    text: |
      ### Distance between buttons
      * Large buttons: 12px
      * Medium and small buttons: 8px

    contents:
      - type: wide image
        src: ./assets/redline_distance@2.png


changelog:
  - version: 2.1.1
    changes: |
      - FIXED: Typos and copy errors
  - version: 2.1.0
    changes: |
      - CHANGED: Primary button to turquoise color
      - CHANGED: Button sizing and fonts to maintain a11y contrast compliance
      - ADDED: Button placement guidelines
      - ADDED: Link button clarification
  - version: 2.0.0
    changes: Updated for new branding
  - version: 1.0.0
    changes: Initial version
---
