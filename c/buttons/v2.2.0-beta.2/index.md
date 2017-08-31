---
layout: component-yaml
title: Buttons
section: Components
version: 2.2.0-beta.2
status: active
implemented: true
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: QA
    name: Eajaz
implementation: https://github.com/Pearson-Higher-Ed/elements/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1eSGAoNb7F1A8iA_DqLQfSP_TxzuV0V2yTAK8ksDeQBU/edit?usp=sharing
  - name: Sketch
    link: ./assets/Buttons_1.sketch

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
      There are three types of buttons:

      * __Default button__ is your basic button, it can appear multiple times in a given group.

      * __Primary button__ indicates the main call to action and should only appear once per group of buttons.

      * __CTA button__ is your Call To Action button. It is the single most important action on the page and takes higher priority over the Primary button type. It should be used only in specific instances such as the Sign-In process. It can only be used once per page.


    contents:
      - type: wide image
        src: ./assets/types@2.png  

  - type: section
    name: Size

  - type: two column
    text: |
      There are three sizes of buttons:

      * __Extra Large:__ Use this button for important actions that are the primary focus of a page, for example 'Sign in' or 'Create account'.
      * __Large:__ The standard button size, prefer this button as a default size unless there is a reason to go up or down.
      * __Small:__ Try to avoid using this size if possible, but it is available for space constrained situations.

    contents:
      - type: wide image
        src: ./assets/size@2.png


  - type: section
    name: Button placement

  - type: two column
    text: |  

      Buttons are positioned relatively according to the type of actions:

      * __Affirmative actions__ are placed on the right and continue the process. They are actions that are desired by users or the application.

      * __Dismissive actions__ are placed on the left and return the user to the previous screen or step in the process.

      __Align the button group to the right side of the container by default__

      With that said, you still have the flexibility to align the button groups differently based on the use case and visual balance.

      __Destructive actions may be affirmative actions__

      In some situations, destructive actions such as "delete" or “leave” may be affirmative actions. For example, an instructor attempts to delete a course. A modal shows up to confirm the action and make sure the instructor understand the consequences followed by the action. In such case, the "delete" button is an affirmative action.

    contents:
      - type: wide image
        src: ./assets/button_placement_example.png  

  - type: section
    name: Button labels

  - type: two column
    text: |
      A button is meant to direct users into taking certain actions. Help users by writing labels that clearly communicate what each button does.
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
    name: Disabled Buttons

  - type: two column
    text: |
      Use a disabled button only if an action on the current screen can enable it (action possibility).  A disabled button should only appear when contextually relevant.  If the button is not needed for the task at hand, it should be hidden.  

      If a bank of 2 or more buttons is present but can only be enabled by direct action on the same screen, it can be hidden and only shown when enabled to give emphasis of new controls available to the user.

  - type: section
    name: Link style buttons

  - type: two column
    text: |
      In situations where link styled text is to be used in place of a button for the purposes of de-emphasizing an action (visual hierarchy), link style buttons should be used.  The premise stands that links are to be used for navigation and buttons are to be used for actions. Link buttons should not appear in a situation where they could be disabled.

    contents:
      - type: text
        content: |

          ### Do:
            - Use link style buttons to de-emphasize less important actions.

              *Examples*: Edit, Dismiss, Resend Verification Email, and Reset Password

            - Use link style buttons to trigger an action.
            - Indicate in design specification the presence of a link style button to your developer.
            - Use the same [visual styling as link text](http://pearson-higher-ed.github.io/design/c/typography/)

          ### Don't:
            - Use link style buttons as part of a grouping with other buttons (button bars, save/cancel).
            - Use link style buttons for navigation.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Extra Large
      : - 44px tall
        - 20px horizontal padding
        - [UI Section Heading - Small Bold](/design/c/typography/v2.1.0-beta.1/#rd-ui-headings-section-small-bold)

      Large
      : - 36px tall
        - 12px horizontal padding
        - [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)

      Small
      : - 32px tall
        - 12px horizontal padding
        - [UI Text - Bold](/design/c/typography/v2.0.0/#rd-ui-text-bold)


    contents:
      - type: wide image
        src: ./assets/redline_size@2.png


  - type: two column
    text: |
      ### Corners
      2px border radius

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - Background is [Moonlight](/design/c/colors/v2.1.0/#rd-digital-moonlight)
        - Text is [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)
        - Border is 1px [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

      Hover/Active
      : - Background becomes [Alto](/design/c/colors/v2.1.0/#rd-alto)
        - Text and border are the same

      Disabled
      : - Background remains [Moonlight](/design/c/colors/v2.1.0/#rd-digital-moonlight)
        - Text is [Concrete](/design/c/colors/v2.1.0/#rd-concrete)
        - No border

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
      : - Background is [Digital Pearson Blue](/design/c/colors/v2.1.0/#rd-digital-pearson-blue)
        - Text is [White](/design/c/colors/v2.1.0/#rd-white)

      Hover/Active
      : - Background becomes [Ink Blue](/design/c/colors/v2.1.0/#rd-ink-blue)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style

    exports:
      - Primary Button

  - type: two column
    text: |
      ### CTA button (Call To Action)

      Normal
      : - Background is [Sunshine Yellow](/design/c/colors/v2.1.0/#rd-sunshine-yellow)
        - Text is [Charcoal](/design/c/colors/v2.1.0/#rd-charcoal)

      Hover/Active
      : - Background becomes [Sunflower Yellow](/design/c/colors/v2.1.0/#rd-sunflower-yellow)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style

    exports:
      - CTA Button

  - type: two column
    text: |
      ### Button Spacing
      Buttons are 16px apart by default

    contents:
      - type: wide image
        src: ./assets/redline_distance@2.png

  - type: style table
    styles:
      - Standard/Large Button
      - Medium Button
      - Small Button
      - Primary Button
      - Default Button
      - CTA Button

changelog:
  - version: 2.2.0-beta.2
    changes: |
      - UPDATED: Link style guidance disallows disabled version
  - version: 2.2.0-beta.1
    changes: |
      - CHANGED: Primary button color from Digital Marine Turquoise to Digital Pearson Blue
      - CHANGED: Size names now reflect dev names (Large &rarr; Extra Large, Medium &rarr; Large)
      - CHANGED: Default button size is now 'Large'
      - ADDED: Large and Small version of Primary and CTA buttons
      - FIXED: Default button color restored to Charcoal
  - version: 2.1.2
    changes: |
      - FIXED: Typos and copy errors
      - REPLACED: Old images with more clear and comprehensive visual presentation
      - SIMPLIFIED: Text and took out unnecessary information
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
