---
layout: component-yaml
title: Forms
section: Components
version: 1.0.0
rebranded: true
status: active
implemented: true
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Designer
    name: Heather Reser
    email: heather.reser@pearson.com
  - role: Designer
    name: Parker Malenke
    email: parker.malenke@pearson.com
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1O7YP1xc9QtHbVB4sugeWG585RXJbNZIT81H5EBPH9ps/edit?usp=sharing

dependencies:
  - name: Typography
    version: 2.0.0-beta.7
  - name: Buttons
    version: 2.0.0-beta.4
  - name: Inputs
    version: 2.0.0-beta.2
  - name: Colors
    version: 2.0.0-beta.4

tagline: |
  Provides standard structure and behavior for multiple input forms.
features:
  - Error messaging
  - Multi step forms
  - Single column form layouts
usage_guidelines: |
  Any form should follow the structure and behavior laid out in this component.

blocks:
  - type: section
    name: Basic Form

  - type: two column
    text: |
      The basic form consists of several parts: a *Form Name*, an optional *Top Level Error*, one or more *Input Fields*, and a *Next/Submit* button.

      ### Form Name
      This should use one of the [Section UI Heading](/design/c/typography/v2.0.0-beta.7/#rd-ui-headings-section-basic) styles, and defaults to the Basic variant. It is required and should describe the ultimate action of the form.

      ### Top Level Error
      See [Error Handling](#error-handling) below.

      ### Input Fields
      One or more input fields from the input component may be included in the form. Currently, these will all occupy 100% of the form width and stack with 40px of spacing between them.

      ### Next/Submit Button
      This button should start out as a [default button](/design/c/buttons/v2.0.0-beta.4/#rd-default-button) and become a [primary](/design/c/buttons/v2.0.0-beta.4/#rd-primary-button) or [CTA](/design/c/buttons/v2.0.0-beta.4/#rd-cta-button) button once the form has been completely filled out.

      If the form is broken up into multiple pages, use a "Continue" or "Next" button to advance in the form series. Maintain the same Form Name between each page. You should also include some UI for returning to previous steps in the process, where possible.

    contents:
      - type: wide image
        src: ./assets/basic.form.png
        caption: A basic form showing all the principle components.

  - type: section
    name: Error Handling

  - type: two column
    text: |
      Individual input fields should present their own errors following the styles dictated in the [inputs components](http://pearson-higher-ed.github.io/design/c/inputs/v2.0.0-beta.3/#labels). Fields with errors should always be accompanied by error text, unless a top level error message is sufficient to understand and fix the problems.

      Top Level Errors relevant to the form as a whole may be presented above the first input and below the form name. It should consist of a single line message (which is colored red) and then an optional chunk of body copy that explains the situation in more detail.
    contents:
      - type: narrow image
        src: ./assets/individual.error.png
        caption: An example of errors specific to individual input fields.
      - type: narrow image
        src: ./assets/top.level.error.png
        caption: An error has occurred which effects all input fields in the form.

  - type: section
    name: Redlines

  - type: two column
    text: |

      Typography
      : - Form name is some [Section UI Heading](/design/c/typography/v2.0.0-beta.7/#rd-ui-headings-section-basic), defaults to basic
        - Top Level Error is [basic body copy](/design/c/typography/v2.0.0-beta.7/#rd-basic-body), [Strawberry Red](/design/c/colors/v2.0.0-beta.5/#rd-strawberry-red) for the first line and [Charcoal](/design/c/colors/v2.0.0-beta.5/#rd-charcoal) for any additional text

      Spacing
      : - 20px between Form Name and a Top Level Error
        - 30px between Form Name or Top Level Error and the first input
        - 40px between all inputs (this includes space dedicated for one line of error text)
        - 40px between the last input and the Next/Submit button

    contents:
      - type: wide image
        src: ./assets/redlines.png






changelog:
  - version: 1.0.0
    changes: Initial version.
---
