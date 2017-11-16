---
layout: component-yaml
title: Forms
section: Components
version: 1.1.0-beta.1
status: active
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
      The basic form consists of several parts: a *form name*, an optional *alert message*, one or more *input fields*, and *primary/secondary* action buttons.

      ### Form name

      ### Form instructions
      Instructions for filling out the form.

      ### Alert message
      See error handling for more details.

      ### Input fields
      One or more input field from the input component may be include in the form. Input fields can be laid out in one "or" multiple columns within the form.

      ### Buttons
      This button should start out as a [default button](/design/c/buttons/v2.2.2/#buttons--default-button) and become a [primary](/design/c/buttons/v2.2.2/#buttons--primary-button) or [CTA](/design/c/buttons/v2.2.2/#buttons--cta-button) button once the form has been completely filled out.

      If the form is broken up into multiple pages, use a "Continue" or "Next" button to advance in the form series. Maintain the same Form Name between each page. You should also include some UI for returning to previous steps in the process, where possible.

    contents:
      - type: wide image
        src: ./assets/form_basic.png
        caption: A two-column style form showing all the principal components
    features:
        - Alert message

  - type: section
    name: Form groups

  - type: two column
    text: |
      If you have many fields, consider organizing related fields into groups. Each group can have a section title. The form groups consist sections titles and follow by horizontal line and input field.

    contents:
    - type: wide image
      src: ./assets/form_basic_sections.png

  - type: section
    name: Responsive forms

  - type: two column
    text: |
      Mobile responsive is sharing the same spec as the desktop version. Except that it is one column style only. All the input fields will be stacked and cover 100% of the form width.

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
      Individual input fields should present their own errors following the styles dictated in the [inputs components](http://pearson-higher-ed.github.io/design/c/inputs/#information-error-text). Fields with errors should always be accompanied by error text, unless a top level error message is sufficient to understand and fix the problems.

      Top Level Errors relevant to the form as a whole may be presented above the first input and below the form name. Refer to [alerts components](http://http://pearson-higher-ed.github.io/design/c/alerts/)  

    contents:
      - type: wide image
        src: ./assets/form_error.png
    redlines:
      - Alert message

  - type: section
    name: Redlines

  - type: two column
    text: |

      Typography
      : - Form name is [Section UI Heading](/design/c/typography/v2.0.0-beta.7/#rd-ui-headings-section-basic), defaults to basic

      Spacing
      : - 36px between Form Name and first input field
        - 36px between all inputs (this includes space dedicated for one line of error text)
        - 52px between the last input and the Next/Submit button
        - For form with information text, 24px above and below the information text and form title/first input field.

      Buttons
      : - Use [large button](/design/c/buttons/v2.2.2/#buttons--large-button)

      * Fancy input style form is sharing the same spec as basic input style form.

    contents:
      - type: wide image
        src: ./assets/redlines_form_basic.png
      - type: wide image
        src: ./assets/redlines_form_error.png
      - type: wide image
        src: ./assets/redlines_form_fancy.png

  - type: two column
    text: |

      Typography
      : - Section name is [Section UI Heading](/design/c/typography/v2.0.0-beta.7/#rd-ui-headings-section-basic), defaults to basic

      Spacing
      : - 24px between the form name and the alert.
        - 24px between the alert and first input.

    contents:
      - type: wide image
        src: ./assets/redlines_form_error.png

  - type: two column
    text: |

      Typography
      : - Section name is [Section UI Heading](/design/c/typography/v2.0.0-beta.7/#rd-ui-headings-section-basic), defaults to basic

      Spacing
      : - 16px between Section name and horizontal line.
        - 36px between horizontal line and first input.

      Horizontal line
      : - 1px [Concrete](/design/c/colors/v2.1.0/#rd-concrete)

    contents:
        - type: wide image
          src: ./assets/redlines_form_sections.png



changelog:
  - version: 1.1.0-beta.1
    changes: |
      - UPDATED: Delete responsive spec
      - Adding: feature links
  - version: 1.0.0-beta.4
    changes: |
      - UPDATED: Change X-large buttons to large buttons
      - Adding Fancy style input form spec
      - UPDATED: Change input style to basic
      - Adding responsive form
  - version: 1.0.0-beta.3
    changes: |
      - UPDATED: Error images to match latest input error style
  - version: 1.0.0-beta.2
    changes: |
      - FIXED: References to other components, cleaned up documentation in general
  - version: 1.0.0-beta.1
    changes: Initial version.
---
