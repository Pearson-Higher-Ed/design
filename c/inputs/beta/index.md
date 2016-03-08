---
layout: component-yaml
title: Inputs
section: Components
redirect_from: /docs/ui-components/forms/
status: active
version: 1.0.0-beta.1
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
  - Text, TextArea, Radio, Checkbox, Field Labels (required vs. optional), Field Groups
  - Guaranteed compliance with Accessibility contrast requirements
usage_guidelines: |
  Every instance of a form element should come from this component. See the sections below for information about when to use each type of form.

blocks:

  - type: section
    name: Form States

  - type: two column
    text: |
      **Active** is the normal state of the form element.  It is available for user interaction.

      **Focus** is initiated when the user interacts with the field.  We currently allow the browser to provide default styling for focus states.

      **Read only** indicates that a field is active, but not editable.

      **Disabled** state is a form input that is unavailable for interaction.
    contents:
      - type: narrow image
        src: ./assets/states.png
        caption: The four basic states. Note the focus is left up to the browser, this is an approximation of the Macintosh style.

  - type: section
    name: Text

  - type: two column
    text: |
      Text input form elements are to be used for single line text inputs.
    contents:
      - type: narrow image
        src: ./assets/text.png

  - type: section
    name: Textarea

  - type: two column
    text: |
      Textarea form elements are to be used for multiple lines of text.

      Vertical and horizontal resizing options may be enabled where appropriate.

      Textarea states are styled similarly to regular text inputs.
    contents:
      - type: narrow image
        src: ./assets/textarea.png

  - type: section
    name: Select

  - type: two column
    text: |


      The select input allows a user to choose one of many predetermined options.

      A default value can be set for the select element if it's recommended for most users.  Bear in mind that a user can easily overlook a preselected item, so use caution when doing so.
    contents:
      - type: narrow image
        src: ./assets/select.png

  - type: section
    name: Radio Buttons

  - type: two column
    text: |
      Radio buttons are for when the user must choose a single item out of several options.

      Choose radios over selects when you want the user to carefully consider the options and need to expose all available options.

      If there are only two mutually exclusive options, consider using a single checkbox. For example, use a checkbox for "I agree" instead of two radio buttons for "I agree" and "I don't agree."

      Radio buttons use the default browser style.
    contents:
      - type: narrow image
        src: ./assets/radio.png

  - type: section
    name: Checkboxes

  - type: two column
    text: |
      Checkboxes are for times when the user needs to make one or more binary choices about a related item.

      Unlike radio buttons, where a group of radio buttons represents a single choice, each check box in a group represents a separate, independent choice. When there is more than one option but only one can be selected, use a radio button instead.

      Checkboxes use the default browser style.
    contents:
      - type: narrow image
        src: ./assets/checkbox.png

  - type: section
    name: Labels

  - type: two column
    text: |
      Labels communicate the purpose and meaning of a field to users.

      Try to avoid over-explaining in the label (password requirements, for example, should be communicated in another way).
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

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---

## Labels

<div class="section_text" markdown="1">
A fieldset can contain one or more groupings of paired label and form elements.

Input prompts can be optionally placed inside text fields.

<aside class="usage" markdown="1">
The label of an input field does not fully explain what should be filled into it or when using such a label feels like over-explaining the interface.  

Use when you want to save the space that a label otherwise takes up.  

Use in combination with a label, to further explain what kind of input is needed.
</aside>
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/fieldset.png)
</div>
</div>



## Field Labels

<div class="section_text" markdown="1">
The label always sits above the field element to accommodate long text strings when dealing with internationalization.  When required or optional fields are needed, always opt to append the label with the option which appears less frequently.

<aside class="usage" markdown="1">
Suppose you have a 10 form elements on a screen.  

If the majority of elements are required, use the optional callout and vice versa for an optional majority.  

If there is an evenly matched number of required vs. optional form elements, use the required callout.
</aside>
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/field-label.png)
</div>
</div>

## Fieldset Groups

<div class="section_text" markdown="1">
A grouped fieldset contains multiple pairs of label and form elements and is used to visually connect these pairings with one another.  A fieldset title can be added to the group.

An alternate visual treatment can be used for more explicit emphasis.
</div>

<div class="images">
<div class="narrow_image" markdown="1">
![](./assets/fieldset-group.png)
</div>
</div>

## Redlines
[Download the redline specification here](./assets/redlines-01.png)
