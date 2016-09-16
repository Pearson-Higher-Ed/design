---
layout: component-yaml
title: Inputs
section: Components
redirect_from: /docs/ui-components/forms/
status: deprecated
version: 1.0.0-beta.9
private: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Lynn Chang
    email: lynn.chang@pearson.com

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
  - name: Icons
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
    name: Form States

  - type: two column
    text: |
      **Active** is the normal state of the form element.  

      **Hover** is initiated when the cursor in over the input area. It is available for user interaction.

      **Focus** is initiated when the user interacts with the field.  We currently allow the browser to provide default styling for focus states (except for the text input and textarea as browsers are inconsistent in their use of a focus state here).

      **Read only** indicates that a field is active, but not editable.

      **Disabled** state is a form input that is unavailable for interaction.

      **Error** is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message.

      **Focused Error** appears when the user focuses an input with an error.
    contents:
      - type: narrow image
        src: ./assets/Inputs_states.png        

  - type: section
    name: Text

  - type: two column
    text: |
      Text input form elements are to be used for single line text inputs.

      Placeholders can be used to give additional information about the format of data. They should typically not be used to label the input field; exceptions can be made when there is a single field and a secondary purpose indicator exists (like a search bar with a search icon in the attached button).

      Note that the component provides custom focus styles for this input since certain versions of Firefox, IE11, and Edge don't offer a default focus state.

      A smaller size is also available.
    contents:
      - type: narrow image
        src: ./assets/Inputs_size.png
        caption: Basic and small text inputs with values.
      - type: narrow image
        src: ./assets/Inputs_box_size.png
        caption: Basic text inputs with labels and placeholders.

  - type: section
    name: Textarea

  - type: two column
    text: |
      Textarea form elements are to be used for multiple lines of text.

      Vertical and horizontal resizing options may be enabled where appropriate.

      Textarea states are styled similarly to regular text inputs.

      They may also take a placeholder like basic text inputs. In this case the placeholder should simply offer additional information or guidance around the data format, it should never replace a label for the field.

      Note that the component provides custom focus styles for this input since certain versions of Firefox, IE11, and Edge don't offer a default focus state.

      A smaller size is available.
    contents:
      - type: narrow image
        src: ./assets/Inputs_label.png
        caption: Basic and small textareas.
      - type: narrow image
        src: ./assets/Inputs_box_placeholder.png
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
        src: ./assets/Inputs_select.png
        caption: Closed and opened select (demonstrating the Mac OS X default browser style); example of the smaller select size.

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
        caption: Various radio button states; an example of the smaller font size.

  - type: section
    name: Checkboxes

  - type: two column
    text: |
      Checkboxes are for times when the user needs to make one or more binary choices about a related item.

      Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice. When there is more than one option but only one can be selected, use a radio button instead.

    contents:
      - type: narrow image
        src: ./assets/Inputs_checkbox.png
        caption: Various checkbox states; an example of the smaller font size.

  - type: section
    name: On/off Switches

  - type: two column
    text: |
      On/off switches toggle the state of a single option between two states.
    contents:
    - type: narrow image
      src: ./assets/Inputs_toggle.png     

  - type: section
    name: Labels
  - type: two column
    text: |
      Labels communicate the purpose and meaning of a field to users.

      *Usage* Try to avoid over-explaining in the label (password requirements, for example, should be communicated in another way).

      **Size** Labels come in two sizes for top-left aligned and left aligned. Each size works for both standard and small size inputs.
    contents:
      - type: narrow image
        src: ./assets/Inputs_label_1.png
        caption: Top-left aligned text label
      - type: narrow image
        src: ./assets/Inputs_label_2.png
        caption: Left aligned text label

  - type: two column
    text: |
      ### Required/Optional
      Use the label to indicate whether a given field is required or optional.

      **Usage** Only label the minority case (for example, if 6 fields are required and 2 are optional, only indicate the optional fields).
    contents:
      - type: narrow image
        src: ./assets/Inputs_optional.png

  - type: two column
    text: |
      ### Information text
      Information/description text about the inputs.

      **Error message** When error message occurs, the information text will be replace with the error messages.
    contents:
      - type: narrow image
        src: ./assets/Inputs_info.png


  - type: section
    name: Inputs with icon

  - type: two column
    text: |
      The icons inside the input fields is only used for common inputs that can be visualized by simple icons.

      **Icon placement** Icon on the left is for decoration only. Icon on right implies that there's action attached to it.
    contents:
    - type: narrow image
      src: ./assets/Inputs_icon.png



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
      : - 1px solid [Hairline Gray (#d0d0d0)](/design/c/colors/v1.0.1/#rd-hairline-gray-d0d0d0) border
        - [White (#ffffff)](/design/c/colors/v1.0.1/#rd-white-ffffff) background
        - [Large label](/design/c/typography/v1.0.0/#rd-large-label) ([primary color](/design/c/typography/v1.0.0/#rd-primary-label-color))
        - Place holders are [large labels](/design/c/typography/v1.0.0/#rd-large-label), [Sandy Gray (#6d6d6d)](/design/c/colors/v1.0.1/#rd-sandy-gray-6d6d6d), italic

      Readonly
      : - Same as active, but background becomes [Off White (#f2f2f2)](/design/c/colors/v1.0.1/#rd-off-white-f2f2f2)
        - Placeholders should never appear in this state

      Disabled
      : - Same as readonly, but text color becomes [Boring (#a6a8ab)](/design/c/colors/v1.0.1/#rd-boring-a6a8ab)
        - Placeholders should never appear in this state

      Focus
      : - Replace default browser style
        - [Basic Blue (#107ACA)](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) border
        - [Basic Blue (#107ACA)](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) dropshadow, no X/Y offset, 5px blur

      Error
      : - Same as active, except:
        - 1px solid [Firetruck (#D0021B)](/design/c/colors/v1.0.1/#rd-firetruck-d0021b) border
        - Error states **must** be accompanied by explanatory text. See the forms component for standard examples of error handling.

      Focused Error
      : - Add a [Firetruck (#D0021B)](/design/c/colors/v1.0.1/#rd-firetruck-d0021b) drop shadow, 5px of blur to the core error style
        - This replaces the default browser style

      Small Size
      : - 28px tall
        - 10px horizontal padding
        - Use [basic](/design/c/typography/v1.0.0/#rd-basic-label) instead of large labels throughout

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
    exports:
      - Text Input

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
        - Use [basic](/design/c/typography/v1.0.0/#rd-basic-label) instead of large labels

    contents:
      - type: narrow image
        src: ./assets/redlines.textarea.png
        caption: Basic text area.
      - type: narrow image
        src: ./assets/redlines.textarea.small.png
        caption: Small text area redlines.
    exports:
      - Textarea

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
        - Use [basic](/design/c/typography/v1.0.0/#rd-basic-label) instead of large labels

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
    exports:
      - Select Input

  - type: two column
    text: |
      ### Radio Buttons

      Spacing
      : - 10px between button and label

      States
      : - Use browser default styles in most cases
        - Override for focus to show a 1px [Basic Blue](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) outline, with a 2px offset
        - Note this means there is no error state for the radio button itself, you **must** use explanatory text

      Small size
      : - Use [basic label](/design/c/typography/v1.0.0/#rd-basic-label), instead of large
    contents:
      - type: narrow image
        src: ./assets/redlines.radio.png
        caption: Example radio buttons in the Mac OS X browser style.
    exports:
      - Radio Button

  - type: two column
    text: |
      ### Checkboxes

      Spacing
      : - 10px between checkbox and label

      States
      : - Use browser default styles in most cases
        - Override for focus to show a 1px [Basic Blue](/design/c/colors/v1.0.1/#rd-basic-blue-107aca) outline, with a 2px offset
        - Note this means there is no error state for the radio button itself, you **must** use explanatory text

      Small Size
      : - Use [basic label](/design/c/typography/v1.0.0/#rd-basic-label), instead of large
    contents:
      - type: narrow image
        src: ./assets/redlines.checkbox.png
        caption: Example checkboxes in the Mac OS X browser style.
    exports:
      - Checkbox

  - type: two column
    text: |
      ### Labels

      Spacing
      : - Left justified with related field
        - 6px gap separating

      Typography
      : - [Basic label](/design/c/typography/v1.0.0/#rd-basic-label)

      Error state
      : - [Firetruck (#D0021B)](/design/c/colors/v1.0.1/#rd-firetruck-d0021b) color

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
    exports:
      - Label

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
      : - [Medium button](/design/c/buttons/v1.0.0/#rd-medium-button) ([default style](/design/c/buttons/v1.0.0/#rd-default-button))
        - [Search icon](/design/c/icons/v1.0.0/#rd-search), [large label size](/design/c/typography/v1.0.0/#rd-large-label)

      Joint
      : - Override corners to provide square joint between input and button
        - Dividing line should be 1px wide
    contents:
      - type: narrow image
        src: ./assets/redlines.specialized.png
    exports:
      - Search Input

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
  - version: 1.0.0-beta.8
    changes: |
      Nothing yet
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
