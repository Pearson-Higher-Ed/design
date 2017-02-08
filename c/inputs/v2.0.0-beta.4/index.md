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
        caption: Closed and opened select in the basic style.

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
      ### Single Line Text

  - type: two column
    text: |
      #### Basic Style

      Dimensions
      : - 36px tall
        - 3px border radius

      Spacing
      : - 14px horizontal padding
        - 6px vertical space between field and label

      Active
      : - 1px solid [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete) border
        - [White (#ffffff)](/design/c/colors/v2.0.0-beta.5/#rd-white) background
        - [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic) ([Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)) for the value
        - [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small) in [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray) for the label
        - Place holders are [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic), [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

      Focus
      : - Label is [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue)
        - Border is 1px solid [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue)
        - [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue) shadow with 5px blur

      Disabled
      : - Value is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)
        - Fill color is [Moonlight (#e9e9e9)](/design/c/colors/v2.0.0-beta.5/#rd-moonlight)

      Error
      : - Label is [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)
        - Border is 1px solid [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)
        - Error text is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small) in [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)
        - Error text is 3px below the field

      Focused Error
      : - [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red) shadow with 4px blur

      Readonly
      : - No input box
        - [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic) in [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - 8px below label
    contents:
      - type: narrow image
        src: ./assets/redlines.text.basic.1.png
      - type: narrow image
        src: ./assets/redlines.text.basic.2.png

  - type: two column
    text: |
      #### Fancy Style

      Spacing
      : - Label is 8px above value
        - Value is 10px above underline in most cases
        - Value is 7px above underline when focused or disabled

      Typography
      : - Label is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)
        - Value and placeholder text is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)
        - Error text is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)

      Active
      : - Label is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)
        - Value is [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal)
        - Placeholder text is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)
        - Underline is 1px solid [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

      Focus
      : - Label is [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue)
        - Underline is 4px solid [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue)
        - The underline should animate out from the center of the input once the user clicks into the field

      Readonly
      : - No underline or other decoration
        - Value is 8px below the label

      Disabled
      : - Value is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)
        - Underline is 4px solid [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

      Error
      : - Label and error text are [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)
        - Error text is 3px below the underline
        - Underline is 1px solid [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)

      Focused Error
      : - Underline is 4px solid [Strawberry Red (#db0020)](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red)
        - Underline is 7px below value

    contents:
      - type: narrow image
        src: ./assets/redlines.text.fancy.1.png
      - type: narrow image
        src: ./assets/redlines.text.fancy.2.png


  - type: two column
    text: |
      ### Multiple Line Text

      Spacing
      : - Label is 6px above input
        - Value has 14px horizontal padding, 9px vertical padding

      Typography
      : - Label is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)
        - Value and placeholder text is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)

      States
      : - Follow the styles defined for the Basic Single Line input for each state
    contents:
      - type: narrow image
        src: ./assets/redlines.text.multiple.png

  - type: two column
    text: |
      ### Select Inputs

  - type: two column
    text: |
      #### Basic Style

      Dimensions and Spacing
      : - Select box is 36px tall
        - Label is 6px above input
        - 14px of horizontal padding

      Typography
      : - Label is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)
        - Value is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)

      Behavior
      : - Activating the select should use the default browser popup

      States
      : - Follow the styles defined for the Basic Single Line input for each state
    contents:
      - type: narrow image
        src: ./assets/redlines.select.basic.png

  - type: two column
    text: |
      #### Fancy Style

      Spacing
      : - Label is 8px above value
        - Value is generally 10px above the underline

      Icons
      : - Dropdown icon is the dropdown-open-18 icon

      Typography
      : - Label is [Small UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-small)
        - Value and placeholder text is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)

      Behavior
      : - Activating the select should use the default browser popup

      States
      : - Follow the styles defined for the Fancy Single Line input for each state
    contents:
      - type: narrow image
        src: ./assets/redlines.select.fancy.png

  - type: two column
    text: |
      ### Radio Buttons

      Spacing
      : - Option value 10px right of the radio icon
        - Multiple options are separated by 14px of vertical space

      Typography
      : - Option value is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)

      Icons
      : - Unselected radios use the radio-button-off-18 icon
        - Selected radios use the radio-button-on-18 icon

      States
      : - Radio border is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete) in most cases
        - Selected radios have an inner circle filled with [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray) in most cases
        - Focused radios use [Digital Pearson Blue (#047A9C)](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue) borders
        - Disabled radios use a [Moonlight (#e9e9e9)](/design/c/colors/v2.0.0-beta.5/#rd-moonlight) fill color
        - Disabled but selected radios have an inner circle filled with [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete)

    contents:
      - type: narrow image
        src: ./assets/redlines.radiobuttons.png

  - type: two column
    text: |
      ### Checkboxes

      Spacing
      : - Option value 10px right of the checkbox icon
        - Multiple options are separated by 14px of vertical space

      Typography
      : - Option value is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic)

      Icons
      : - Unselected checkboxes use the checkbox-off-18 icon
        - Selected checkboxes use the checkbox-on-18 icon

      States
      : - Box border is [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete) in most cases
        - Selected checkboxes have a [Medium Gray](/design/c/colors/v2.0.0-beta.5/#rd-medium-gray) check mark in most cases
        - Focused checkboxes use [Digital Pearson Blue (#047A9C)](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue) borders
        - Disabled checkboxes use a [Moonlight (#e9e9e9)](/design/c/colors/v2.0.0-beta.5/#rd-moonlight) fill color
        - Disabled but selected checkboxes have a [Concrete (#c7c7c7)](/design/c/colors/v2.0.0-beta.5/#rd-concrete) check mark
    contents:
      - type: narrow image
        src: ./assets/redlines.checkboxes.png

    exports:
      - Checkbox

  - type: two column
    text: |
      ### Password Input

      Spacing
      : - Show/hide link is 10px above the underline in the fancy style
        - Link is 14px from the right edge in the basic style

      Typography
      : - Link is [Basic UI Text](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-basic) in [Digital Pearson Blue](/design/c/colors/v2.0.0-beta.4/#rd-digital-pearson-blue)

      Focus
      : - Hovering or focusing the link changes it to [Ink Blue](/design/c/colors/v2.0.0-beta.5/#rd-ink-blue) and adds an underline
        - Any browser default focus indicator is also preserved

    contents:
      - type: narrow image
        src: ./assets/redlines.password.showhide.png

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
