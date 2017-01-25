---
layout: component-yaml
title: Inputs
section: Components
status: active
version: 2.0.0-beta.4
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Lynn Chang
    email: lynn.chang@pearson.com
  - role: Designer
    name: Heather Reser
    email: heather.reser@pearson.com

tagline: |
  This component defines the standard visual style for form elements.
features:
  - Single collection of all basic form styles
  - Text, Textarea, Select, Radio, Checkbox, Field Labels (required vs. optional)
  - Guaranteed compliance with Accessibility requirements
usage_guidelines: |
  Every instance of a form element should come from this component. See the sections below for information about when to use each type of form.

dependencies:
  - name: Colors
    version: 1.0.1
  - name: Typography
    version: 1.0.0
  - name: Buttons
    version: 1.0.0


downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/13qcZKhRjvksN3oCb5xzKX48QJTtTeZGPQeom7xKKOfg/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/inputs.mockup.sketch
  - name: .ai mockup
    link: ./assets/inputs.mockup.ai

blocks:

  - type: section
    name: Input Types

  - type: two column
    text: |
      Inputs come in two styles, *Fancy* and *Basic*. Most situations should use the basic style, fancy inputs are reserved for high-touch pages where it's important to emphasize the Pearson brand (such as Sign In or Account Creation).

      Never mix the two styles on the same page.
    contents:
      - type: narrow image
        src: ./assets/Inputs_text_fancy.png
        caption: Text inputs in the fancy style.
      - type: narrow image
        src: ./assets/Inputs_text_basic.png
        caption: Text inputs in the basic style.

  - type: section
    name: Input States

  - type: two column
    text: |
      **Normal** is the normal state of the form element.

      **Focus** is initiated when the user interacts with the field.

      **Disabled** state is a form input that is unavailable for interaction.

      **Read only** indicates that a field is active, but not editable.

    contents:
      - type: wide image
        src: ./assets/Inputs_states.png

  - type: two column
    text: |
      **Error** is when the field's content has some sort of error.

      **Focused Error** is the focused version of the error state.

      **Error with info text** is used when additional details about the error are necessary. Note that space for one line of explanation is built into the input so no shifting is necessary.
    contents:
      - type: wide image
        src: ./assets/Inputs_error.png

  - type: section
    name: Single Line Text

  - type: two column
    text: |
      Text inputs may contain placeholder text as an aid to help guide users on the required format and content.

    contents:
      - type: narrow image
        src: ./assets/Inputs_text_fancy.png
        caption: Fancy single line text inputs.
      - type: narrow image
        src: ./assets/Inputs_text_basic.png
        caption: Basic single line text inputs.

  - type: two column
    text: |
      The fancy input style has an animation on focus.
    contents:
      - type: narrow image
        src: ./assets/Input_animate.gif

  - type: section
    name: Multiple Line Text

  - type: two column
    text: |
      These inputs only come in the basic style (fancy inputs should not be used in forms that need to collect this much information).

      These inputs may optionally be resized vertically to allow for variable amounts of input.
    contents:
      - type: narrow image
        src: ./assets/Inputs_multiline_placeholder.png
        caption: Multiple line input with a placeholder.
      - type: narrow image
        src: ./assets/Inputs_multiline_value.png
        caption: Multiple line input with a value. Note this input has the handle for vertical resizing.

  - type: section
    name: Select

  - type: two column
    text: |
      The select input allows a user to choose one of many predetermined options.

      A default value can be set for the select element if it's recommended for most users.  Bear in mind that a user can easily overlook a preselected item, so use caution when doing so.

      The popup will follow the browser default style.


    contents:
      - type: narrow image
        src: ./assets/Inputs_select_fancy.png
        caption: Closed and opened select in the fancy style.
      - type: narrow image
        src: ./assets/Inputs_select_basic.png
        caption: Closed an open select in the basic style.

  - type: section
    name: Radio Buttons

  - type: two column
    text: |
      Radio buttons are for when the user must choose a single item out of several options.

      Choose radios over selects when you want the user to carefully consider the options and need to expose all available options.

      If there are only two mutually exclusive options, consider using a single checkbox. For example, use a checkbox for "I agree" instead of two radio buttons for "I agree" and "I don't agree."

    contents:
      - type: narrow image
        src: ./assets/Inputs_radiobutton.png
        caption: Various radio button states.

  - type: section
    name: Checkboxes

  - type: two column
    text: |
      Checkboxes are for times when the user needs to make one or more binary choices about a related item.

      Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice.

      When there is more than one option but only one can be selected, use a radio button instead.

    contents:
      - type: narrow image
        src: ./assets/Inputs_checkbox.png
        caption: Various checkbox states.

  - type: section
    name: Labels

  - type: two column
    text: |
      Labels are always required in order to satisfy accessibility requirements.

      ### Required/Optional
      Use the label to indicate whether a given field is required or optional.

      Only label in the minority case (for example, if 6 fields are required and 2 are optional, only indicate the optional fields).
    contents:
      - type: narrow image
        src: ./assets/Inputs_optional_1.png
        caption: Required and Optional labels.
      - type: narrow image
        src: ./assets/Inputs_optional_2.png
        caption: Example using (optional) label in a form.


  - type: section
    name: Information/Error Text

  - type: two column
    text: |
      Additional instructions or context for an input may appear below the field. Prefer this over placeholder text for any information that all users should be able to access.
    contents:
      - type: narrow image
        src: ./assets/Inputs_info.png
        caption: Info text for both fancy and basic styled inputs.

  - type: two column
    text: |
      Any fields that have an error should explain the error with additional text below the field. In this case it is colored red and paired with an error state on the form.

      If necessary, information and error text may appear simultaneously, with error text following the informational.
    contents:
      - type: narrow image
        src: ./assets/Inputs_error_text.png
        caption: Error text.
      - type: narrow image
        src: ./assets/Inputs_error_text_2.png
        caption: Simultaneous display of info and error text.


  - type: section
    name: Specialized Inputs

  - type: two column
    text: |
      ## Password
      The password input includes a show/hide option to turn off obfuscation. The value is hidden by default but may be revealed in lower security settings to make it easier for a user to type the intended password.

      Note the show/hide control is slightly different than the standard link style with the underline appearing on hover/focus. This is to mesh with the fancy form style better.
    contents:
      - type: narrow image
        src: ./assets/inputs_password.png
        caption: Show/Hide password feature in the fancy input style.
      - type: narrow image
        src: ./assets/inputs_password_2.png
        caption: And in the basic input style.

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Input States

      Normal
      : - border: 1px solid  (#6A7070) or [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Input text: 14px normal(#252525) or [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - Label:12px normal (#6A7070) or [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)
        - Hint text: 14pt normal (#C7C7C7) or [Concrete](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

      Focus
      : - border: 4px solid (#047A9C) or [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.5/#rd-digital-pearson-blue)
        - Input text: 14px normal (#252525) or [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - Label: 12px normal (#047A9C) or [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.5/#rd-digital-pearson-blue)

      Disable
      : - border: 1px solid (#C7C7C7)
        - Disable text: 14px normal (#C7C7C7) or [Concrete](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

      Readonly
      : - border: no border
        - Read only text: 14px normal, (#252525) or [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - Label 12px normal, (#6A7070) or [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)

    contents:
      - type: wide image
        src: ./assets/redline_input_states.png
      - type: narrow image
        src: ./assets/redline_input.png
        caption: Regular Inputs field
      - type: narrow image
        src: ./assets/redline_input_nolabel.png
        caption: Input with no label

  - type: two column
    text: |
      ### Input Error States

      Normal
      : - border: 1px solid (#DB0020)
        - Input text: 14px normal (#252525)
        - Label: 12px normal (#6A7070)

      Focus
      : - border: 4px solid (#DB0020)
        - Input text: 14px normal (#252525)
        - Label: 12px normal (#6A7070)

    contents:
      - type: wide image
        src: ./assets/redline_input_error.png

  - type: two column
    text: |
      ### Radio Buttons

      Size
      : - 18x18px

      States
      : - There is no error state for the radio button itself, you **must** use explanatory text

    contents:
      - type: narrow image
        src: ./assets/redline_Input_radiobutton.png

    exports:
      - Radio Button

  - type: two column
    text: |
      ### Checkboxes

      Check icon
      : [check-sm-18](/design/c/icons/beta)

      Normal States
      : - border-radius: 2px
        - border: 1px solid
        - color: (#6a7070) or [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray)


      Focus States
      : - border-radius: 2px
        - border: 1px solid
        - color: (#047A9C) or [Digital Blue](/design/c/colors/v2.0.0-beta.5/#rd-digital-ice-blue)


      Disable States
      : - border-radius: 2px
        - border: 1px solid
        - color: (#c7c7c7) or [Concrete](/design/c/colors/v2.0.0-beta.5/#rd-concrete)
        - fill: (#E9E9E9) or [Moonlight](/design/c/colors/v2.0.0-beta.5/#rd-moonlight)


    contents:
      - type: narrow image
        src: ./assets/redline_checkbox.png

    exports:
      - Checkbox

  - type: two column
    text: |
      ### Password Show/Hide

    contents:
      - type: narrow image
        src: ./assets/redline_input_password.png

  - type: style table
    styles:
      - Text Input
      - Textarea
      - Select Input
      - Radio Button
      - Checkbox
      - Label
      - Search Input

changelog:
  - version: 2.0.0-beta.4
    changes: |
      - ADDED: Basic input style
  - version: 2.0.0-beta.3
    changes: |
      Change design to align with new brand
  - version: 1.0.0-beta.7
    changes: |
      - FIXED: Mockups now match the new focus and error styles.
      - CHANGED: Selects now use new focus and error styles.
      - CHANGED: Radio buttons and checkboxes now have an explicit focus style (this is because certain versions of Firefox lacked a built in style).
  - version: 1.0.0-beta.6
    changes: |
      - CHANGED: Text input and textarea focus states to use custom (i.e. non-browser) styles. This is because IE11 and Edge and certain versions of Firefox don't actually implement a browser focus state.
      - CHANGED: Text input and textarea error states to be more compatible with focus + error states.
      - FIXED: Error in the text input redline images.
  - version: 1.0.0-beta.5
    changes: |
      - Add dependency links
  - version: 1.0.0-beta.4
    changes: |
      - ADDED: Exported styles
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: UXD Accessibility checklist
      - ADDED: Sketch and AI mockups
      - CHANGED: Search box input redlines go into more detail
  - version: 1.0.0-beta.2
    changes: |
      - FIXED: Incorrect labeling in redline image
  - version: 1.0.0-beta.1
    changes: Initial version
---
