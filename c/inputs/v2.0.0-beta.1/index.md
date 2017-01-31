---
layout: component-yaml
title: Inputs
section: Components
status: active
version: 2.0.0-beta.1
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
    name: Inputs States

  - type: two column
    text: |
      **Active** is the normal state of the form element.  

      **Focus** is initiated when the user interacts with the field.  We currently allow the browser to provide default styling for focus states (except for the text input and textarea as browsers are inconsistent in their use of a focus state here).

      **Disabled** state is a form input that is unavailable for interaction.

      **Read only** indicates that a field is active, but not editable.

      **Error** is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message.

      **Focused Error** appears when the user focuses an input with an error.
    contents:
      - type: wide image
        src: ./assets/Inputs_states.png        

  - type: section
    name: Inputs (single line)

  - type: two column
    text: |
      An input is a field used to elicit a response from a user

      **Placeholder Usage** Placeholder can be used to give additional information about the format of data.They should be used as an aid to help guide users on the required format and content.

      - Placeholders disappear as soon as the user starts typing in an element.

      - They are not a replacement for labels.

      - Exceptions can be made when there is a single field and a secondary purpose indicator exists (like a search bar with a search icon in the attached button).

      **Placement and size** A standard size input is designed for 16pt.  There's also small size available for 14pt font. Please see Redlines for more detail.
    contents:
      - type: narrow image
        src: ./assets/Inputs_size.png
        caption: Basic and small text inputs with values.
      - type: narrow image
        src: ./assets/Inputs_label.png
        caption: Example of input with placeholder

  - type: section
    name: Textarea (multiple lines)

  - type: two column
    text: |
      Textarea form elements are to be used for multiple lines of text.

      **Usage**

      * Vertical and horizontal resizing options may be enabled where appropriate.

      * Textarea states are styled similarly to regular text inputs.

      **Size** A smaller size is available.

    contents:
      - type: narrow image
        src: ./assets/Inputs_box_placeholder.png
        caption: Inputs that use placeholder to provide guidelines or examples.

  - type: two column
    text: |
        **Text area with text counts**

        - When the user start typing (in focus state ), it shows the remaining available characters

        - The user can type more than the charactors limited in but the error will displayed (and disables the action button).

    contents:
      - type: wide image
        src: ./assets/Inputs_box_textcount.png


  - type: section
    name: Select

  - type: two column
    text: |
      The select input allows a user to choose one of many predetermined options.

      - A default value can be set for the select element if it's recommended for most users.  Bear in mind that a user can easily overlook a preselected item, so use caution when doing so.

      - The popup will follow the browser default style.

      **Size** A smaller variant is available.

    contents:
      - type: narrow image
        src: ./assets/Inputs_select.png
        caption: Closed and opened select (demonstrating the Mac OS X default browser style); example of the smaller select size.

  - type: section
    name: Radio Buttons

  - type: two column
    text: |
      Radio buttons are for when the user must choose a single item out of several options.

      - Choose radios over selects when you want the user to carefully consider the options and need to expose all available options.

      - If there are only two mutually exclusive options, consider using a single checkbox. For example, use a checkbox for "I agree" instead of two radio buttons for "I agree" and "I don't agree."

    contents:
      - type: narrow image
        src: ./assets/Inputs_radiobutton.png
        caption: Various radio button states.

  - type: section
    name: Checkboxes

  - type: two column
    text: |
      Checkboxes are for times when the user needs to make one or more binary choices about a related item.

      - Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice.

      - When there is more than one option but only one can be selected, use a radio button instead.

    contents:
      - type: narrow image
        src: ./assets/Inputs_checkbox.png
        caption: Various checkbox states.

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
      Label element provides direction to the user, telling them what information is needed in an inputs field.

      **Usage** Try to avoid over-explaining in the label (password requirements, for example, should be communicated in another way).

      **Size** Labels come in two sizes for top aligned and left aligned. Each size works for both standard and small size inputs. See Redlines for detail.
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

      **Usage** Only label in the minority case (for example, if 6 fields are required and 2 are optional, only indicate the optional fields).
    contents:
      - type: narrow image
        src: ./assets/Inputs_optional.png
        caption: Required and Optional label
      - type: narrow image
        src: ./assets/Inputs_optional_2.png
        caption: Example using (optional)label in a form

  - type: two column
    text: |
      ### Information text / Error message
      Information/description text above the inputs.

      **Error message** When error message occurs, the information text will be replace with the error messages.
    contents:
      - type: wide image
        src: ./assets/Inputs_info.png

  - type: section
    name: Inputs with icon

  - type: two column
    text: |
      **Usage** The icons inside the input fields can only be used for common inputs that can be visualized by simple icons. For example: Search, Username, phone number.

      **Icon placement**

      - Icon on the left is for decoration only.

      - Icon on right implies that there's action attached to it. (Act as a button)

      - The only exception is the password input that act as toggle button.

    contents:
    - type: narrow image
      src: ./assets/Inputs_icon.png
    - type: narrow image
      src: ./assets/Inputs_icon_2.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Text input field
      **Sizes** Use input size that corresponds with the body font size.

      Standard
      : - Font size: 16pt
        - Height: 36px
        - Padding: 12px horizontal, Vertically aligned center

      Small
      : - Font size: 14pt
        - Height: 24px
        - Padding: 12px horizontal, Vertically aligned center

      **Error** When error occurs, the information text will replaced with error messages

    contents:
      - type: narrow image
        src: ./assets/redline_Inputs_size_1.png
        caption: Regular Inputs field (36px height)
      - type: narrow image
        src: ./assets/redline_Inputs_size_2.png
        caption: Regular Inputs field (24px height)
      - type: wide image
        src: ./assets/redline_label_error.png
        caption: Information text and error messages


  - type: two column
    text: |
      ### Input States
      2px corner radius for all input fields

      Active
      : - 1px solid (#C7C7C7) border
        - Background White (#ffffff)
        - Text (#6B7071), italic

      Focus
      : - Replace default browser style
        - Border (#1047A9C) 1px solid  
        - Dropshadow (#1047A9C) , no X/Y offset, 5px blur

      Readonly
      : - border (#C7C7C7) 1px solid  
        - background (#F5F5F5)
        - text:(#252525), normal

      Disabled
      : - Border (#C7C7C7) 1px solid  
        - Background (#F5F5F5)
        - Text:(#6A7070), normal

      Error
      : - Border (#DB0020) 1px solid  
        - Background (#ffffff)

      Focused Error
      : - Replace default browser style
        - Border (#DB0020) 1px solid  
        - Dropshadow (#DB0020) , no X/Y offset, 5px blur


    contents:
      - type: narrow image
        src: ./assets/redline_Inputs_state_1.png
        caption: Active State (with both a value and a placeholder) and focus state
      - type: narrow image
        src: ./assets/redline_Inputs_state_4.png
        caption: Disable state, Read only state
      - type: narrow image
        src: ./assets/redline_Inputs_state_5.png
        caption: Error state and error focus

    exports:
      - Text Input




  - type: two column
    text: |
      ### Select

      Dimensions
      : - Standard:36px tall
        - Small:24px tall

      Spacing
      : - Standard14px horizontal padding
        - Small:12px horizontal padding

      Popup
      : - Use browser default style

      States
      : - Follow redlines for basic text field

    contents:
      - type: narrow image
        src: ./assets/redline_select_size_1.png
        caption: standard size, w 16pt font
      - type: narrow image
        src: ./assets/redline_select_size_2.png
        caption: small size, w 14pt font
      - type: narrow image
        src: ./assets/redline_select_state_1.png
        caption: Active and error state.
      - type: narrow image
        src: ./assets/redline_select_state_2.png
        caption: Disable and read only state.
    exports:
      - Select Input

  - type: two column
    text: |
      ### Radio Buttons

      Spacing
      : - 12px between button and label

      States
      : - There is no error state for the radio button itself, you **must** use explanatory text

      Size
      : - There's only one size of custom radio button. It will fit both 14pt and 16pt font.

    contents:
      - type: narrow image
        src: ./assets/redline_Inputs_radiobutton.png

    exports:
      - Radio Button

  - type: two column
    text: |
      ### Checkboxes

      Spacing
      : - 12px between checkbox and label

      States
      : - There is no error state for the radio button itself, you **must** use explanatory text

      Size
      : - There's only one size of custom checkbox. It will fit both 14pt and 16pt font.
    contents:
      - type: narrow image
        src: ./assets/redline_Inputs_checkbox.png

    exports:
      - Checkbox

  - type: two column
    text: |
      ### Labels

      Spacing
      : - See redline for both left and top aligned label

      Typography
      : - Text color #6B7071

      Error state
      : - Text color #DB0020 Semibold 13pt

      Required/Optional
      : - Only label the type which occurs less frequently
        - Simply append '(required)' or '(optional)' to the label text

    contents:
      - type: narrow image
        src: ./assets/redline_label.png
        caption: Labels for top and left aligned placement.
      - type: narrow image
        src: ./assets/redline_label_2.png
        caption: Required and optional text fields.

    exports:
      - Label

  - type: two column
    text: |
      ### Input with icon
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

    contents:
      - type: narrow image
        src: ./assets/redline_inputs_icon_1.png
      - type: narrow image
        src: ./assets/redline_inputs_icon_2.png
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
