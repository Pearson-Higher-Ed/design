---
layout: component-yaml
title: Buttons
section: Components
version: 2.1.0-beta.4
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: Designer
    name: Ed Zee
  - role: QA
    name: Eajaz
implementation: https://pearson-elements-v0.surge.sh/elements/buttons/
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/19r4uvPAZpmXRwT_krIr9MqHLYC-Vgjah2kPDi9PYaQA/edit?usp=sharing
  - name: Sketch
    link: ./assets/buttons.2.1.0-beta.4.sketch

dependencies:
  - name: Colors
    version: 2.0.0-beta.6
  - name: Typography
    version: 2.0.0-beta.5

tagline: This component defines the standard visual style for buttons.
features:
  - Single collection of all button styles
  - Primary, Default, and CTA button types
  - Default/Large, Medium and Small button sizes
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Every instance of a button should come from this component. See the sections below for information about when to each each type of button.

blocks:
  - type: section
    name: Button types

  - type: two column
    text: |
      Buttons come in several different types. Each defines a normal, active/hover, and disabled state.

      **Primary** indicates the main call to action and should only appear once per group of buttons.

      **Default** is your basic button, it can appear multiple times in a given group.

      **CTA** is your Call To Action button and should be used only in very specific instances such as Sign-In.  It takes a higher priority over the Primary button type.  It is the single most important action you can take on a page.  They can only be used ONCE per page.  **There is no disabled state for the CTA button type.**

      If a Default or Primary button increases in priority within the context of the same page, it can convert to a CTA button.

    contents:
      - type: wide image
        src: ./assets/types.png
        caption: All three button types in their various states.

  - type: section
    name: Button sizes

  - type: two column
    text: |
      Buttons come in small, medium and large/default sizes. Prefer the standard/large size but feel free to use the small size where they would fit better with surrounding content. Medium button sizes are meant to only pair with equally sized inputs.  Standard/Large buttons are to be used when the UI appears on a mobile device or screen smaller than 768px width (tablet portrait view).
    contents:
      - type: wide image
        src: ./assets/sizes.png
        caption: The three button sizes.

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
    name: Confirmation Buttons

  - type: two column
    text: |
      In situations where the user should receive feedback that the action initiated by a button was successful use the Confirmation Button style which integrates feedback.

      For simple binary confirmation feedback, this type of button is sufficient—an additional alert or message is unnecessary.  Use Digital Grass Green #038238 from the Conditional Palette in the Colors specification.
    contents:
      - type: narrow video
        src: ./assets/confirmation.short.mov
        caption: The loading indicator should appear for at least 500ms to provide the proper context.
      - type: narrow video
        src: ./assets/confirmation.long.mov
        caption: If the action takes longer than 500ms then the loader is displayed until the action completes.

  - type: two column
    text: |
      ### Error style
      If the action failed to complete, there is an error state for the button which should be paired with an explanatory alert.  Use Strawberry Red #DB0020 from the Conditional Palette in the Colors specification.
    contents:
      - type: narrow video
        src: ./assets/error.short.mov
        caption: If the action results in an error that can be presented within the button context as well. Make sure to pair this with an explanatory alert.

  - type: section
    name: Link Style Buttons

  - type: two column
    text: |
      In situations where link styled text is to be used in place of a button for the purposes of de-emphasizing an action (visual hierarchy), link style buttons should be used.  The premise stands that links are to be used for navigation and buttons are to be used for actions.  The need for a link styled button is conform to [Pearson Accessibility Guidelines for E-Learning (#11 Semantic Markup)][Accessibility]

      [Accessibility]: http://wps.pearsoned.com/accessibility/115/29601/7577872.cw/index.html#PG11

      *Identify roles (e.g. heading, numbered list, bulleted list, data table, paragraph, emphasized text) of page elements using conventions for the media type. (And do not misidentify roles by using those conventions solely for their visual effects.)*
    contents:
      - type: text
        content: |

          ### Do:
            - Use link style buttons to de-emphasize less important actions.
            - Use link style buttons to trigger an action.
            - Indicate in design specification the presence of a link style button to your developer.
            - Use the same visual styling as link text.  [See typography specification document.](http://pearson-higher-ed.github.io/design/c/typography/)
            Examples:
              - Edit
              - Dismiss
              - Resend Verification Email
              - Reset Password"

          ### Don't:
            - Use link style buttons as part of a grouping with other buttons (button bars, save/cancel).
            - Use link style buttons for navigation.

  - type: section
    name: Button Labels

  - type: two column
    text: |
      A button is meant to direct users into taking an action. Help users by writing button labels that clearly explain what each button does.
    contents:
      - type: text
        content: |
          ### Do:
            - Keep text short. Use as few words as possible.

              Examples

                - Next
                - Save
                - Create
                - View
                - Edit
                - Learn more
                - Study
                - Review
                - Delete
                - Cancel
                - Close

            - Use sentence case.
            - Capitalize proper nouns.
            - Use specific action-oriented text for CTAs.

              Examples

                - Activate
                - Create account
                - Sign in
                - Reset password
                - Submit
                - Resend Verification Email
                - Go to Dashboard

          ### Be sure to:
            - Look across the experience and check for consistent use of labels.
            - Reserve enough space in the label for translation to other languages.
            - Avoid excessive use of exclamation points (!).


  - type: section
    name: Button Placement

  - type: two column
    text: |  

      Buttons are positioned according to the type of actions:

      * __Affirmative actions__ are placed on the right and continue the process. They are actions that are desired by users or the application.

      * __Dismissive actions__ are placed on the left and return the user to the previous screen or step in the process.

      __Destructive actions may be affirmative actions__

      In some situations, destructive actions such as "delete" or “leave” may be affirmative actions. For example, when a student attempts to leave the page in the middle of a quiz, and is asked to confirm if the student acknowledges the consequences of leaving the page at this point. Since prior to seeing the modal, the student clicks on the “Exit” button indicates that the student desires to leave the page, so the “leave” button should be placed on the right to help the student continue with the process as expected.    

      __Adjacent buttons are always spaced 16px apart__    

    contents:
      - type: wide image
        src: ./assets/modal_button_types.png  



  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Small button
      : - 32px tall
        - 12px horizontal padding
        - [Basic label font](/design/c/typography/v2.0.0-beta.2/#rd-basic-label)

      Medium button - Use only with input fields
      : - 36px tall
        - 12px horizontal padding
        - [Basic label font](/design/c/typography/v2.0.0-beta.2/#rd-basic-label)

      Standard/Large button
      : - 44px tall
        - 20px horizontal padding
        - [large label font](/design/c/typography/v2.0.0-beta.2/#rd-large-label)

    contents:
      - type: narrow image
        src: ./assets/redlines.sizes.png

    exports:
      - Small Button
      - Medium Button
      - Standard/Large Button

  - type: two column
    text: |
      ### Corners
      All sizes use a 2px border radius.

  - type: style table
    styles:
      - Standard/Large Button
      - Medium Button
      - Small Button

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - [Digital Marine Turquoise (#19A6A4)](/design/c/colors/v2.0.0-beta.3/#rd-digital-marine-turquoise-19a6a4) fill
        - [White](/design/c/typography/v2.0.0-beta.5/#rd-white-ffffff) button text
        - No border

      Hover/Active
      : - [Brackish Turquoise (#179599)](/design/c/colors/v2.0.0-beta.3/#rd-brackish-turquoise-179599) fill
        - [White](/design/c/typography/v2.0.0-beta.5/#rd-white-ffffff) button text
        - No border

      Disabled
      : - No disabled state

      Focus
      : - Use the browser default style
    contents:
      - type: wide image
        src: ./assets/redlines.primary.png
    exports:
      - Primary Button

  - type: style table
    styles:
      - Primary Button

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - [Moonlight (#E9E9E9)](/design/c/colors/v2.0.0-beta.3/#rd-digital-moonlight-e9e9e9) fill
        - [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.3/#rd-charcoal-252525) text color
        - 1px [Concrete (#C7C7C7)](/design/c/colors/v2.0.0-beta.3/#rd-concrete-c7c7c7) border

      Hover/Active
      : - [Alto (#D9D9D9)](/design/c/colors/v2.0.0-beta.3/#rd-alto-d9d9d9) fill
        - [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.3/#rd-charcoal-252525) text color
        - 1px [Concrete (#C7C7C7)](/design/c/colors/v2.0.0-beta.3/#rd-concrete-c7c7c7) border

      Disabled
      : - [Moonlight (#E9E9E9)](/design/c/colors/v2.0.0-beta.3/#rd-digital-moonlight-e9e9e9) fill
        - [Concrete (#C7C7C7)](/design/c/colors/v.2.0.0-beta.3/#rd-concrete-c7c7c7) button text
        - No border

      Focus
      : - Use the browser default style
    contents:
      - type: wide image
        src: ./assets/redlines.default.png
    exports:
      - Default Button

  - type: style table
    styles:
      - Default Button

  - type: two column
    text: |
      ### Call to Action buttons

      Normal Yellow
      : - [Sunshine Yellow (#FFB81C)](/design/c/colors/v2.0.0-beta.3/#rd-sunshine-yellow-FFB81C) fill
        - [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.3/#rd-charcoal-252525) text color
        - No border

      Hover/Active Yellow
      : - [Sunflower Yellow (#FF9A19)](/design/c/colors/v2.0.0-beta.3/#rd-sunflower-yellow-FFF9A19) fill
        - [Charcoal (#252525)](/design/c/colors/v2.0.0-beta.3/#rd-charcoal-252525) text color
        - No border

      Disabled
      : - No disabled state

      Focus
      : - Use the browser default style
    contents:
      - type: wide image
        src: ./assets/redlines.cta.png
    exports:
      - CTA Button

  - type: style table
    styles:
      - CTA Button

  - type: two column
    text: |

changelog:
  - version: 2.1.0-beta.4
    changes: |
      - ADDED: Borders on default buttons
      - UPDATED: Primary and CTA button styles
      - UPDATED: Button sizes now meet accessibility requirements
  - version: 2.1.0-beta.3
    changes: |
      - ADDED: Button placement guidelines
      - REMOVED: Link style buttons; Just use link text
  - version: 2.1.0-beta.1
    changes: |
      - ADDED: Turquoise CTA button option
  - version: 2.0.0
    changes: Updated for new branding
  - version: 1.0.0
    changes: Initial version
---
