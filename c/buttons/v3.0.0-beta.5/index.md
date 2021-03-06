---
layout: component-yaml
title: Buttons
section: Components
version: 3.0.0-beta.5
status: deprecated
implemented: false
people:
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
  - role: QA
    name: Eajaz
implementation: https://github.com/Pearson-Higher-Ed/elements-sdk
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1xUcybzPNQYuWmKSZy-LcdAFhGkOrJvmGpVJUwtW_EAs/edit?usp=sharing
  - name: Sketch
    link: ./assets/Buttons.sketch

dependencies:
  - name: Colors
    version: 3.0.1
  - name: Typography
    version: 2.1.1

tagline: Buttons communicate the action that will occur when the user triggers them.
features:
usage_guidelines:

blocks:
  - type: section
    name: Types

  - type: two column
    text: |
      There are four types of buttons:

      * __CTA button__ is your Call To Action button. It is the single most important action on the page and takes higher priority over the Primary button type. It should be used only in specific instances such as the Sign-In process. It can only be used once per page.

      * __Primary button__ indicates the main call to action and should only appear once per group of buttons.

      * __Default button__ is your basic button, it can appear multiple times in a given group. Note that it is transparent so you are responsible for using it over a contrast compliant background.

      * __Tertiary button__ is for reduced importance actions which should be de-emphasized compared to the default button type.
    contents:
      - type: wide image
        src: ./assets/types@2.png
    features:
      - CTA Button
      - Primary Button
      - Default Button
      - Tertiary Button

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
    features:
      - Extra Large Button
      - Large Button
      - Small Button

  - type: section
    name: Color contrast

  - type: two column
    text: |
      Buttons and their text must be sufficiently contrasty against the background color. Be especially careful with default and tertiary buttons that the page background color is contrast compliant with the default's text color or the tertiary's gray background color.

      Refer to the [Color component](/c/colors) for information on contrast-compliant pairings.

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
    name: Disabled buttons

  - type: two column
    text: |
      Prefer to use a disabled button only if an action on the current screen can enable it (action possibility).

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
            - Use the same [visual styling as link text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--link)

          ### Don't:
            - Use link style buttons as part of a grouping with other buttons (button bars, save/cancel).
            - Use link style buttons for navigation.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Sizes
      Extra Large
      : - 40px tall
        - 20px minimum horizontal padding
        - [Large Bold UI Text](http://uxframework.pearson.com/c/typography/v2.2.0-beta.1/#typography--large-bold-ui-text)
        - 40px corner radius

      Large
      : - 36px tall
        - 20px minimum horizontal padding
        - [Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text)
        - 36px corner radius

      Small
      : - 32px tall
        - 12px minimum horizontal padding
        - [Bold UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--bold-ui-text)
        - 32px corner radius
    contents:
      - type: wide image
        src: ./assets/redline_size@2.png
    redlines:
      - Small Button
      - Large Button
      - Extra Large Button

  - type: two column
    text: |
      ### CTA button (Call To Action)

      Normal
      : - Background is [Sunshine Yellow](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--sunshine-yellow)
        - Text is [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)

      Hover/Active
      : - Background becomes [Sunflower Yellow](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--sunflower-yellow)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style
    contents:
      - type: wide image
        src: ./assets/redline_types_cta@2.png
    redlines:
      - CTA Button

  - type: two column
    text: |
      ### Primary buttons

      Normal
      : - Background is [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue)
        - Text is [White](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white)

      Hover/Active
      : - Background becomes [Ink Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--ink-blue)

      Disabled
      : - No disabled state

      Focus
      : - Browser default style
    contents:
      - type: wide image
        src: ./assets/redline_types_primary@2.png
    redlines:
      - Primary Button

  - type: two column
    text: |
      ### Default buttons

      Normal
      : - Background is transparent
        - Text is Graphite (#505759)
        - Border is 1px [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

      Hover/Active
      : - Border becomes 1px Graphite (#505759)

      Disabled
      : - Background becomes [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight)
        - Text is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - No border

      Focus
      : - Browser default style
    contents:
      - type: wide image
        src: ./assets/redline_types_default@2.png
    redlines:
      - Default Button

  - type: two column
    text: |
      ### Tertiary button

      Normal
      : - Background is [Moonlight](http://uxframework.pearson.com/c/colors/v3.0.1/#colors--moonlight)
        - Text is Graphite (#505759)

      Hover
      : - Background becomes #ededed

      Disabled
      : - No disabled state

      Focus
      : - Browser default
    contents:
      - type: wide image
        src: ./assets/redline_types_tertiary@2.png
    redlines:
      - Tertiary Button

changelog:
  - version: 3.0.0-beta.5
    changes: |
      - ADDED: Section advising on proper background contrast
  - version: 3.0.0-beta.4
    changes: |
      - FIXED: Typos
      - UPDATED: Accessibility checklist
      - CHANGED: Order of button types
  - version: 3.0.0-beta.3
    changes: |
      - CHANGED: Hover styles for tertiary and default buttons
      - CHANGED: Background on tertiary buttons to Moonlight
  - version: 3.0.0-beta.2
    changes: |
      - CHANGED: Large button size to 36px
      - ADDED: Extra large button size
      - ADDED: Initial redlines
      - CHANGED: Text color to graphite for default and tertiary buttons
  - version: 3.0.0-beta.1
    changes: |
      - CHANGED: Large button size to 40px
      - REMOVED: Extra large button size
      - CHANGED: Button visual styling
      - ADDED: Tertiary button type
  - version: 2.2.2
    changes: |
      - FIXED: UI text in the example image
  - version: 2.2.1
    changes: |
      - ADDED: Feature links
      - FIXED: Error in small CTA button image
  - version: 2.2.0
    changes: |
      - CHANGED: Primary button color from Digital Marine Turquoise to Digital Pearson Blue
      - CHANGED: Size names now reflect dev names (Large &rarr; Extra Large, Medium &rarr; Large)
      - CHANGED: Default button size is now 'Large'
      - CHANGED: Guidance to prefer disabled buttons vs hiding disabled actions
      - CHANGED: Link style guidance disallows disabled version
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
