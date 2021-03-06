---
layout: component-yaml
title: Inputs
section: Components
status: active
version: 2.2.2
rebranded: true
implementation: https://github.com/Pearson-Higher-Ed/elements-sdk
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
    version: 3.0.1
  - name: Typography
    version: 2.1.1
  - name: Icons
    version: 2.3.0


downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1AI3oAtEYhGvIH0YkbbU1FJXeO30u2jHd5M80RvqqGiE/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/inputs.sketch

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

      **Error (focused)** is the focused version of the error state. Note that in almost every case an error state should be accompanied by explanatory text. See the [Informational/Error Text section](#informational-error-text) section for more details.
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
    features:
      - Basic Single Line Input
      - Fancy Single Line Input

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
    features:
      - Multiple Line Input

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
    features:
      - Basic Select Input
      - Fancy Select Input

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
    features:
      - Radio Button Input

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
    features:
      - Checkbox Input

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
    features:
      - Required/Optional Label


  - type: section
    name: Informational/Error Text

  - type: two column
    text: |
      Additional instructions or context for an input may appear below the field. Prefer this over placeholder text for any information that all users should be able to access.
    contents:
      - type: narrow image
        src: ./assets/Inputs_info.png
        caption: Informational text for both fancy and basic styled inputs.
    features:
      - Informational Text
      - Error Text

  - type: two column
    text: |
      Any fields that have an error should explain the error with additional text below the field. In this case it is colored red and paired with an error state on the form.

      If necessary, informational and error text may appear simultaneously, with error text appearing last.
    contents:
      - type: narrow image
        src: ./assets/Inputs_error_text.png
        caption: Error text.
      - type: narrow image
        src: ./assets/Inputs_error_text_2.png
        caption: Simultaneous display of informational and error text.


  - type: section
    name: Specialized Inputs

  - type: two column
    text: |
      ### Password
      The password input includes a show/hide option to turn off obfuscation. The value is hidden by default but may be revealed in lower security settings to make it easier for a user to type the intended password.

      Note the show/hide control is slightly different than the standard link style with the underline appearing on hover/focus. This is to mesh with the fancy form style better.
    contents:
      - type: narrow image
        src: ./assets/inputs_password.png
        caption: Show/Hide password feature in the fancy input style.
      - type: narrow image
        src: ./assets/inputs_password_2.png
        caption: And in the basic input style.
    features:
      - Password Input

  - type: two column
    text: |
      ### Phone number w/ country code
      The Phone number with country code input is made up of two parts that operate together to provide a phone number value:

      - Dropdown for selecting country
      - Form field for inputting the phone number

    contents:
      - type: narrow image
        src: ./assets/inputs_phone.png
        caption: Fancy input style.
      - type: narrow image
        src: ./assets/inputs_phone_2.png
        caption: And in the basic input style.
      - type: narrow image
        src: ./assets/inputs_phone_3.png
        caption: Fancy input style dropdown.
    features:
      - Phone Number Input


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
      : - 1px solid [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete) border
        - [White](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--white) background
        - [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) ([Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)) for the value
        - [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text) in [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray) for the label
        - Place holders are [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text), [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

      Focus
      : - Label is [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray)
        - Border is 1px solid [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue)
        - [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue) shadow with 5px blur

      Disabled
      : - Value is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Fill color is [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight)

      Error
      : - Label is [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray)
        - Border is 1px solid [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Error text is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text) in [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Error text is 3px below the field and 4px to the right of the warning icon
        - Icon: warning-sm-18
        - Icon is 1px below the input field

      Error (focused)
      : - [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red) shadow with 4px blur

      Informational Text
      : - [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text) in [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)
        - 3px below the field

      Read only
      : - No input box
        - [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) in [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)
        - 8px below label
    contents:
      - type: narrow image
        src: ./assets/redlines.text.basic.1.png
      - type: narrow image
        src: ./assets/redlines.text.basic.2.png
    redlines:
      - Basic Single Line Input
      - Required/Optional Label
      - Informational Text
      - Error Text

  - type: two column
    text: |
      #### Fancy Style

      Spacing
      : - Label is 8px above value
        - Value is 10px above underline in most cases
        - Value is 7px above underline when focused or disabled

      Typography
      : - Label is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text)
        - Value and placeholder text is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)
        - Error text is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text)

      Active
      : - Label is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Value is [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)
        - Placeholder text is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Underline is 1px solid [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

      Focus
      : - Label is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Underline is 4px solid [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue)

        - The underline should animate out from the center of the input once the user clicks into the field

      Read only
      : - No underline or other decoration
        - Value is 8px below the label

      Disabled
      : - Value is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Underline is 4px solid [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

      Error
      : - Label is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)
        - Error text is [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Error text is 3px below input field and 4px to the right of the warning icon
        - Underline is 1px solid [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Icon: warning-sm-18
        - Icon is 1px below the input field


      Error (focused)
      : - Underline is 4px solid [Strawberry Red](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--strawberry-red)
        - Underline is 7px below value

      Informational Text
      : - [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text) in [Charcoal](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--charcoal)
        - 3px below field

    contents:
      - type: narrow image
        src: ./assets/redlines.text.fancy.1.png
      - type: narrow image
        src: ./assets/redlines.text.fancy.2.png
    redlines:
      - Fancy Single Line Input


  - type: two column
    text: |
      ### Multiple Line Text

      Spacing
      : - Label is 6px above input
        - Value has 14px horizontal padding, 9px vertical padding

      Typography
      : - Label is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text)
        - Value and placeholder text is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)

      States
      : - Follow the styles defined for the Basic Single Line input for each state
    contents:
      - type: narrow image
        src: ./assets/redlines.text.multiple.png
    redlines:
      - Multiple Line Input

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
      : - Label is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text)
        - Value is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)

      Behavior
      : - Activating the select should use the default browser popup

      States
      : - Follow the styles defined for the Basic Single Line input for each state

      Icons
      : - Use the [dropdown-open-sm-24](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--dropdown-open-sm) icon
    contents:
      - type: narrow image
        src: ./assets/redlines.select.basic.png
    redlines:
      - Basic Select Input

  - type: two column
    text: |
      #### Fancy Style

      Spacing
      : - Label is 8px above value
        - Value is generally 10px above the underline

      Icons
      : - Dropdown icon is the [dropdown-open-sm-24](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--dropdown-open-sm) icon

      Typography
      : - Label is [Small UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--small-ui-text)
        - Value and placeholder text is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)

      Behavior
      : - Activating the select should use the default browser popup

      States
      : - Follow the styles defined for the Fancy Single Line input for each state
    contents:
      - type: narrow image
        src: ./assets/redlines.select.fancy.png
    redlines:
      - Fancy Select Input

  - type: two column
    text: |
      ### Radio Buttons

      Spacing
      : - Option value 10px right of the radio icon
        - Multiple options are separated by 14px of vertical space

      Typography
      : - Option value is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)

      Icons
      : - Unselected radios use the [radio-button-off-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--radio-button-off) icon
        - Selected radios use the [radio-button-on-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--radio-button-on) icon

      States
      : - Radio border is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete) in most cases
        - Selected radios have an inner circle filled with [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray) in most cases
        - Focused radios use [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue) borders
        - Disabled radios use a [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight) fill color
        - Disabled but selected radios have an inner circle filled with [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete)

    contents:
      - type: narrow image
        src: ./assets/redlines.radiobuttons.png
    redlines:
      - Radio Button Input

  - type: two column
    text: |
      ### Checkboxes

      Spacing
      : - Option value 10px right of the checkbox icon
        - Multiple options are separated by 14px of vertical space

      Typography
      : - Option value is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text)

      Icons
      : - Unselected checkboxes use the [checkbox-off-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--checkbox-off) icon
        - Selected checkboxes use the [checkbox-on-18](http://pearson-higher-ed.github.io/design/c/icons/v2.3.0/#icons--checkbox-on) icon

      States
      : - Box border is [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete) in most cases
        - Selected checkboxes have a [Medium Gray](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--medium-gray) check mark in most cases
        - Focused checkboxes use [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue) borders
        - Disabled checkboxes use a [Moonlight](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--moonlight) fill color
        - Disabled but selected checkboxes have a [Concrete](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--concrete) check mark
    contents:
      - type: narrow image
        src: ./assets/redlines.checkboxes.png
    redlines:
      - Checkbox Input

  - type: two column
    text: |
      ### Password Input

      Spacing
      : - Show/hide link is 10px above the underline in the fancy style
        - Link is 14px from the right edge in the basic style

      Typography
      : - Link is [Basic UI Text](http://pearson-higher-ed.github.io/design/c/typography/v2.1.1/#typography--basic-ui-text) in [Digital Pearson Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--digital-pearson-blue)

      Focus
      : - Hovering or focusing the link changes it to [Ink Blue](http://pearson-higher-ed.github.io/design/c/colors/v3.0.1/#colors--ink-blue) and adds an underline
        - Any browser default focus indicator is also preserved

    contents:
      - type: narrow image
        src: ./assets/redlines.password.showhide.png
    redlines:
      - Password Input

  - type: two column
    text: |
      ### Phone number w/ country code

      Spacing
      : - 4px between dropdown and country code
        - 4px between country code and input
        - Flag is 8px below label and 10px above dropdown

      Sizes
      : - The max height for the Dropdown before scroll bars are available is 250px
        - Standard flag sizes are 20px wide by 10px tall

      Dropdown
      : - Uses standard [dropdown component](http://pearson-higher-ed.github.io/design/c/dropdown/v1.1.0-beta.1/)

      Behavior
      : - Choosing a country in the dropdown updates the country code displayed next to the input

    contents:
      - type: narrow image
        src: ./assets/redlines.phone.png
    redlines:
      - Phone Number Input

changelog:
  - version: 2.2.2
    changes: |
      - REPLACED: The warning icon from font format to sketch file
      - SPECIFIED: Redline for error message and the warning icon
  - version: 2.2.1
    changes: |
      - ENHANCED: The accessibility of the error message for color blind users by adding an icon in front of the error message under the input field
  - version: 2.2.0
    changes: |
      - ADDED: Phone number input
  - version: 2.1.0
    changes: |
      - CHANGED: Icon for select input
      - ADDED: Feature links
  - version: 2.0.1
    changes: |
      - FIXED: Some images had disabled labels that don't match the actual design
  - version: 2.0.0
    changes: |
      Change design to align with new brand
  - version: 1.0.0
    changes: Initial version
---
