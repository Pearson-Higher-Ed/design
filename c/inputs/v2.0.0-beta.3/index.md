---
layout: component-yaml
title: Inputs
section: Components
status: active
version: 2.0.0-beta.3
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
    name: Inputs States

  - type: two column
    text: |
      **Normal** is the normal state of the form element.  

      **Focus** is initiated when the user interacts with the field.  

      **Disabled** state is a form input that is unavailable for interaction.

      **Read only** indicates that a field is active, but not editable.

    contents:
      - type: wide image
        src: ./assets/Inputs_states.png       

  - type: section
    name: Inputs (single line)

  - type: two column
    text: |
      An input is a field used to elicit a response from a user

      **Hint text Usage** Hint text should be used as an aid to help guide users on the required format and content.

      - Hint text disappear as soon as input become focus.

    contents:
      - type: narrow image
        src: ./assets/Input_animate.gif
        caption: Example of standard inputs

  - type: section
    name: Inputs (multiple lines)

  - type: two column
    text: |
      Multiple lines inputs are to be used for multiple lines of text.


    contents:
      - type: wide image
        src: ./assets/Inputs_multiline.png

  - type: section
    name: Select

  - type: two column
    text: |
      The select input allows a user to choose one of many predetermined options.

      - A default value can be set for the select element if it's recommended for most users.  Bear in mind that a user can easily overlook a preselected item, so use caution when doing so.

      - The popup will follow the browser default style.


    contents:
      - type: narrow image
        src: ./assets/Inputs_select.png
        caption: Closed and opened select.

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
    name: Labels
  - type: two column
    text: |
      ### Required/Optional
      Use the label to indicate whether a given field is required or optional.

      **Usage** Only label in the minority case (for example, if 6 fields are required and 2 are optional, only indicate the optional fields).
    contents:
      - type: narrow image
        src: ./assets/Inputs_optional_1.png
        caption: Required and Optional label
      - type: narrow image
        src: ./assets/Inputs_optional_2.png
        caption: Example using (optional)label in a form

  - type: two column
    text: |
      ## Error Inputs State##
      **Error** is used when a field has been filled out incorrectly. This state should always be paired with an explanatory message.

      **Focused Error** appears when the user focuses an input with an error.

      **Error with error text** Error text displayed when error occur

      **Error with information text** Error text displayed below the existing information text


    contents:
      - type: wide image
        src: ./assets/Inputs_error.png

  - type: two column
    text: |
      ## Information text##
      Information/description text below the inputs.
    contents:    
        - type: narrow image
          src: ./assets/Inputs_info.png

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Input States

      Normal
      : - 1px solid (#6A7070) border
        - Input text (#252525), 14pt normal
        - Label (#6A7070),12pt normal
        - Hint text (#C7C7C7), 14pt normal

      Focus
      : - 4px solid (#047A9C) border
        - Input text (#252525), 14pt normal
        - Label (#047A9C),12pt normal

      Disable
      : - 1px solid (#C7C7C7) border
        - Disable text (#C7C7C7), 14pt normal

      Readonly
      : - No border
        - Read only text (#252525), 14pt normal
        - Label (#6A7070),12pt normal

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
      : - 1px solid (#DB0020) border
        - Input text (#252525), 14pt normal
        - Label (#6A7070),12pt normal

      Focus
      : - 4px solid (#DB0020) border
        - Input text (#252525), 14pt normal
        - Label (#6A7070),12pt normal

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

      Size
      : - 18x18px

      States
      : - There is no error state for the radio button itself, you **must** use explanatory text

    contents:
      - type: narrow image
        src: ./assets/redline_Input_checkbox.png

    exports:
      - Checkbox

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
  - version: 2.0.0-beta.2
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
