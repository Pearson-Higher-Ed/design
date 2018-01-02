---
layout: component-yaml
title: Forms
section: Components
version: 1.1.0-beta.2
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Lynn Chang
    email: lynn.chang@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1O7YP1xc9QtHbVB4sugeWG585RXJbNZIT81H5EBPH9ps/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/forms.sketch

dependencies:
  - name: Typography
    version: 2.1.1
  - name: Buttons
    version: 2.2.2
  - name: Inputs
    version: 2.2.0
  - name: Colors
    version: 3.0.1
  - name: Alerts
    version: 2.0.3
  - name: Grid
    version: 1.0.1
  - name: Breakpoints
    version: 1.0.0


tagline: |
  Provides standard structure and behavior for multiple input forms.
features:
  - Alerts messaging placement in a form
  - Multi step forms
  - Single column form layouts
  - Form groups
  - Responsive form
usage_guidelines: |
  Any form should follow the structure and behavior laid out in this component.

blocks:
  - type: section
    name: Basic form

  - type: two column
    text: |
      The basic form consists of several parts: a *form name*, an optional set of *form instructions*, an optional *alert message*, one or more *input fields*, and *primary/secondary* action buttons.

      ### Form name

      ### Form instructions
      Optional. Instructions for filling out the form.

      ### Alert message
      Optional. See [error handling](#error-handling) section for more details.

      ### Input fields
      Can be either the basic or fancy style.

      ### Buttons
      Where it makes sense, a standard pattern is to have the submit (or equivalent) button start out as a [default button](http://uxframework.pearson.com/c/buttons/v2.2.2/#buttons--default-button) and become a [primary](http://uxframework.pearson.com/c/buttons/v2.2.2/#buttons--primary-button) or [CTA](http://uxframework.pearson.com/c/buttons/v2.2.2/#buttons--cta-button) button once the form has been completely filled out.

      If the form is broken up into multiple pages, use a "Continue" or "Next" button to advance in the form series. Maintain the same Form Name between each page. You should also include some UI for returning to previous steps in the process, where possible.

    contents:
      - type: wide image
        src: ./assets/form_basic.png
        caption: Example of basic form showing all the principal components
    features:
        - Basic Form
        - Form Instructions
        - Alert Message


  - type: section
    name: Form groups

  - type: two column
    text: |
      If you have many fields, consider organizing related fields into groups. Each group can have a section name. A form group consists of a section name followed by a horizontal line and input fields.

    contents:
    - type: wide image
      src: ./assets/form_basic_sections.png      
    features:
        - Form Groups

  - type: section
    name: Responsive forms

  - type: two column
    text: |
      The width of the form adjusts to the width of the [viewport](http://uxframework.pearson.com/c/breakpoints/).

    contents:
    - type: narrow image
      src: ./assets/form_mobile.png
      caption: Basic form (small and extra small devices)
    - type: narrow image
      src: ./assets/form_mobile_sections.png
      caption: Form group (small and extra small devices)
    - type: narrow image
      src: ./assets/form_fancy_example.png
      caption: Example of the Sign in screen with fancy style form fields

  - type: section
    name: Error handling

  - type: two column
    text: |
      Individual input fields should present their own errors following the styles dictated in the [Inputs component](/c/inputs). Fields with errors should always be accompanied by an error, unless a top level error message is sufficient to understand and fix the problems.

      Top Level Errors relevant to the form as a whole should be presented above the first input and below the form name as an [alert message](http://uxframework.pearson.com/c/forms/v1.1.0-beta.2/#forms--alert-message).

    contents:
    - type: wide image
      src: ./assets/form_error.png   

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### Basic form

      Typography
      : - Form name is [Basic Section UI Heading](http://uxframework.pearson.com/c/typography/v2.1.1/#typography--basic-section-ui-heading)

      Spacing
      : - 36px between Form Name and first input field
        - 36px between all inputs (this includes space dedicated for one line of error text)
        - 52px between the last input and the associated buttons
        - For side by side input fields use the [gutter width](/c/grid) of the current breakpoint as the spacing

      Buttons
      : - Use [Large Buttons](http://uxframework.pearson.com/c/buttons/v2.2.2/#buttons--large-button)

      Input style
      : - Can be either basic or fancy, form redlines are the same either way

    contents:
      - type: wide image
        src: ./assets/redlines_form_fancy.png
    redlines:
      - Basic Form

  - type: two column
    text: |
      ### Form Instructions

      Instruction text
      : - For form with information text, 24px above and below the information text and form title/first input field
    contents:
      - type: wide image
        src: ./assets/redlines_form_basic.png
    redlines:
      - Form Instructions

  - type: two column
    text: |
      ### Alert Message
      Spacing
      : - 24px between the form name and the alert.
        - 24px between the alert and first input.

      Alert
      : - Uses the [Inline Alert](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--inline-alert) style, typically in the [Warning/Error variant](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--warning-error-alert)
    contents:
      - type: wide image
        src: ./assets/redlines_form_error.png
    redlines:
      - Alert Message


  - type: two column
    text: |
      ### Form groups
      Typography
      : - Section name is [Basic Section UI Heading](http://uxframework.pearson.com/c/typography/v2.1.1/#typography--basic-section-ui-heading)

      Spacing
      : - 16px between Section name and horizontal line.
        - 36px between horizontal line and first input.

      Horizontal line
      : - 1px [Concrete](http://uxframework.pearson.com/c/colors/v3.0.1/#colors--concrete)

    contents:
        - type: wide image
          src: ./assets/redlines_form_sections.png
    redlines:
        - Form Groups


changelog:
  - version: 1.1.0-beta.2
    changes: |
      - FIXED: Cleaned up documentation, redlines, feature links, etc.
  - version: 1.1.0-beta.1
    changes: |
      - UPDATED: Delete responsive spec
      - ADDED: Feature links
      - UPDATE: Adding dependencies Grid and Breakpoints
  - version: 1.0.0-beta.4
    changes: |
      - UPDATED: Change X-large buttons to large buttons
      - ADDED: Fancy style input form spec
      - UPDATED: Change input style to basic
      - ADDED: responsive form
  - version: 1.0.0-beta.3
    changes: |
      - UPDATED: Error images to match latest input error style
  - version: 1.0.0-beta.2
    changes: |
      - FIXED: References to other components, cleaned up documentation in general
  - version: 1.0.0-beta.1
    changes: Initial version.
---
