---
layout: component-yaml
title: Inputs
section: Components
redirect_from: /docs/ui-components/forms/
status: active
version: 1.0.0-beta.3
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Ed Zee
    email: ed.zee@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com

tagline: |
  This component defines the standard visual style for form elements.
features:
  - Single collection of all basic form styles
  - Text, Textarea, Select, Radio, Checkbox, Field Labels (required vs. optional)
  - Guaranteed compliance with Accessibility requirements
usage_guidelines: |
  Every instance of a form element should come from this component. See the sections below for information about when to use each type of form.

downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/13qcZKhRjvksN3oCb5xzKX48QJTtTeZGPQeom7xKKOfg/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/inputs.mockup.sketch
  - name: .ai mockup
    link: ./assets/inputs.mockup.ai

blocks:

  - type: section
    name: Form States

  - type: two column
    text: |
      **Active** is the normal state of the form element.  It is available for user interaction.

      **Focus** is initiated when the user interacts with the field.  We currently allow the browser to provide default styling for focus states.

      **Read only** indicates that a field is active, but not editable.

      **Disabled** state is a form input that is unavailable for interaction.

      **Error** is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message.
    contents:
      - type: narrow image
        src: ./assets/states.png
        caption: The five basic states. Note that focus is left up to the browser, this is an approximation of the Macintosh style.

  - type: section
    name: Text

  - type: two column
    text: |
      Text input form elements are to be used for single line text inputs.

      Placeholders can be used to give additional information about the format of data. They should typically not be used to label the input field; exceptions can be made when there is a single field and a secondary purpose indicator exists (like a search bar with a search icon in the attached button).

      A smaller size is also available.
    contents:
      - type: narrow image
        src: ./assets/text.png
        caption: Basic and small text inputs with values.
      - type: narrow image
        src: ./assets/placeholders.png
        caption: Basic text inputs with labels and placeholders.

  - type: section
    name: Textarea

  - type: two column
    text: |
      Textarea form elements are to be used for multiple lines of text.

      Vertical and horizontal resizing options may be enabled where appropriate.

      Textarea states are styled similarly to regular text inputs.

      They may also take a placeholder like basic text inputs. In this case the placeholder should simply offer additional information or guidance around the data format, it should never replace a label for the field.

      A smaller size is available.
    contents:
      - type: narrow image
        src: ./assets/textarea.png
        caption: Basic and small textareas.
      - type: narrow image
        src: ./assets/textarea.placeholder.png
        caption: Example placeholder used to provide an example input.

  - type: section
    name: Select

  - type: two column
    text: |
      The select input allows a user to choose one of many predetermined options.

      A default value can be set for the select element if it's recommended for most users.  Bear in mind that a user can easily overlook a preselected item, so use caution when doing so.

      The popup will follow the browser default style.

      A smaller variant is available.
    contents:
      - type: narrow image
        src: ./assets/select.png
        caption: Closed and opened select (demonstrating the Mac OS X default browser style); example of the smaller select size.

  - type: section
    name: Radio Buttons

  - type: two column
    text: |
      Radio buttons are for when the user must choose a single item out of several options.

      Choose radios over selects when you want the user to carefully consider the options and need to expose all available options.

      If there are only two mutually exclusive options, consider using a single checkbox. For example, use a checkbox for "I agree" instead of two radio buttons for "I agree" and "I don't agree."

      Radio buttons use the default browser style.

      Smaller radio buttons are also available.
    contents:
      - type: narrow image
        src: ./assets/radio.png
        caption: Basic states for radio buttons; an example of the smaller size.

  - type: section
    name: Checkboxes

  - type: two column
    text: |
      Checkboxes are for times when the user needs to make one or more binary choices about a related item.

      Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice. When there is more than one option but only one can be selected, use a radio button instead.

      Checkboxes use the default browser style.

      Like the other inputs, checkboxes are also available in a smaller size.
    contents:
      - type: narrow image
        src: ./assets/checkbox.png
        caption: Various checkbox states; an example of the smaller checkbox size.

  - type: section
    name: Labels

  - type: two column
    text: |
      Labels communicate the purpose and meaning of a field to users.

      Try to avoid over-explaining in the label (password requirements, for example, should be communicated in another way).

      Labels come in one size but can be used for both standard and small inputs.
    contents:
      - type: narrow image
        src: ./assets/labels.png

  - type: two column
    text: |
      ### Required/Optional
      Use the label to indicate whether a given field is required or optional. Only label the minority case (for example, if 6 fields are required and 2 are optional, only indicate the optional fields).
    contents:
      - type: narrow image
        src: ./assets/required-optional.png

  - type: section
    name: Specialized Inputs

  - type: two column
    text: |
      ### Search
      There is a standard search component which extends the basic text input with a integrated button on the right.

      Because this includes the button which indicates purpose the placeholder can serve as the input label (although this isn't required).

      Search only comes in the standard size right now.
    contents:
      - type: narrow image
        src: ./assets/specialized.png
        caption: Search input with integrated button.


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Text

      Dimensions
      : - 36px tall

      Spacing
      : - 14px horizontal padding

      Active
      : - 1px solid Hairline Gray (#d0d0d0) border
        - White (#ffffff) background
        - Large label (primary color)
        - Place holders are large labels (#6d6d6d, italic)

      Readonly
      : - Same as active, but background becomes Off White (#f2f2f2)
        - Placeholders should never appear in this state

      Disabled
      : - Same as readonly, but text color becomes Boring (#a6a8ab)
        - Placeholders should never appear in this state

      Focus
      : - Same as active
        - No changes to default browser style

      Error
      : - Same as active, except:
        - 1px solid \#D0021B border
        - \#D0021B drop shadow, 4px of blur
        - Error states **must** be accompanied by explanatory text. See the forms component for standard examples of error handling.

      Small Size
      : - 28px tall
        - 10px horizontal padding
        - Use basic instead of large labels throughout

    contents:
      - type: narrow image
        src: ./assets/redlines.text.png
        caption: Active text field, with both a value and a placeholder.
      - type: narrow image
        src: ./assets/redlines.text.small.png
        caption: Small text inputs.
      - type: narrow image
        src: ./assets/redlines.text.states.png
        caption: Readonly and disabled states.
      - type: narrow image
        src: ./assets/redlines.text.states.2.png
        caption: Focus (reproduction of Mac OS X style) and error states.

  - type: two column
    text: |
      ### Textarea

      Spacing
      : - 14px horizontal padding
        - 9px vertical padding

      Placeholders
      : - Follow text input redlines

      States
      : - Follow text redlines for states

      Small Size
      : - 10px horizontal padding
        - Use basic instead of large labels

    contents:
      - type: narrow image
        src: ./assets/redlines.textarea.png
        caption: Basic text area.
      - type: narrow image
        src: ./assets/redlines.textarea.small.png
        caption: Small text area redlines.

  - type: two column
    text: |
      ### Select

      Dimensions
      : - 36px tall

      Spacing
      : - 14px horizontal padding

      Popup
      : - Use browser default style

      States
      : - Follow redlines for basic text field

      Small Size
      : - 10px horizontal padding
        - 28px tall
        - Use basic labels instead of large

    contents:
      - type: narrow image
        src: ./assets/redlines.select.states.png
        caption: Readonly and disabled states.
      - type: narrow image
        src: ./assets/redlines.select.states.2.png
        caption: Focus (reproduction of Mac OS X browser default) and error states.
      - type: narrow image
        src: ./assets/redlines.select.png
        caption: Closed and open select (showing a browser default style); small select example.

  - type: two column
    text: |
      ### Radio Buttons

      Spacing
      : - 10px between button and label

      States
      : - Use browser default styles in all cases
        - Note this means there is no error state for the radio button itself, you **must** use explanatory text

      Small size
      : - Use basic label, instead of large
    contents:
      - type: narrow image
        src: ./assets/redlines.radio.png
        caption: Example radio buttons in the Mac OS X browser style.

  - type: two column
    text: |
      ### Checkboxes

      Spacing
      : - 10px between checkbox and label

      States
      : - Use browser default styles in all cases
        - Note this means there is no error state for the radio button itself, you **must** use explanatory text

      Small Size
      : - Use basic label, instead of large
    contents:
      - type: narrow image
        src: ./assets/redlines.checkbox.png
        caption: Example checkboxes in the Mac OS X browser style.

  - type: two column
    text: |
      ### Labels

      Spacing
      : - Left justified with related field
        - 6px gap separating

      Typography
      : - Basic label

      Error state
      : - \#D0021B color

      Required/Optional
      : - Only label the type which occurs less frequently
        - Simply append '(required)' or '(optional)' to the label text

    contents:
      - type: narrow image
        src: ./assets/redlines.labels.png
        caption: Labels name each field.
      - type: narrow image
        src: ./assets/redlines.labels.required-optional.png
        caption: Only label whichever type occurs less frequently (e.g. if there are four required fields and one optional only notate the single optional field).

  - type: two column
    text: |
      ### Search input
      Dimensions
      : - Match text input

      Spacing
      : - 14px horizontal padding in the text box
        - 14px horizontal padding in the button (inherited from buttons)

      Typography
      : - Match text input

      States
      : - Match text input
        - Except for the exclusion of a readonly state
        - Disabled state should override the button style to maintain a border

      Button
      : - Medium button (default)
        - fa-search icon, large label size

      Joint
      : - Override corners to provide square joint between input and button
        - Dividing line should be 1px wide
    contents:
      - type: narrow image
        src: ./assets/redlines.specialized.png
changelog:
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
