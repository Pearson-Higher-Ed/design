---
layout: component-yaml
title: Alerts
section: Components
redirect_from: /docs/ui-components/application-header/
version: 1.0.0-beta.3
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker Malenke
    email: parker.malenke@pearson.com
implementation:
downloads:
  - name: UXD Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1Zx7iuaBbjVis_m6p5yXxBxXhJFCYSagSgb-v6D9HaX8/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/alerts.mockup.sketch

dependencies:
  - name: Colors
    version: 2.0.0-beta.4
  - name: Typography
    version: 2.0.0-beta.3

tagline: |
  Presents important feedback or information to users either in response to their actions or upon page load.
features:
  - Modes for page load and dynamic presentation
  - Animated presentation
  - Error, information, and confirmation styles
usage_guidelines: |
  Simple confirmation acknowledgements that don't require additional detail should just use a confirmation button. If an error occurs or additional information is needed to clarify then the appropriate alert style may be dynamically presented.

blocks:
  - type: section
    name: Static Presentation

  - type: two column
    text: |
      When a message needs to be displayed upon page load (there was an error confirming an email address, for example) the alert should appear statically in the upper left corner of the page. This location makes it  noticeable even when the users screen is magnified.

    contents:
      - type: wide image
        src: ./assets/static.error.png
        caption: The message should appear in the upper corner as part of the normal page load, with no animation.

  - type: two column
    text: |
      At responsive sizes the alert occupies the entire top of the viewport.
    contents:
      - type: narrow image
        src: ./assets/responsive.static.png
        caption: Responsive alert.

  - type: section
    name: Dynamic Presentation

  - type: two column
    text: |
      Alerts can also appear dynamically in response to user actions like submitting a form, choosing an option, or completing an assignment. In this case the alert will animate down from the top.
    contents:
      - type: wide video
        src: ./assets/dynamic.mov
        caption: The animation for showing/dismissing a dynamic alert.

  - type: section
    name: Alert Types

  - type: two column
    text: |
      Alerts come in two different types, Error and Success. Try to avoid using the success style unless you need to present more information about the success. Confirmation Buttons are a better pattern for typical cases.
    contents:
      - type: wide image
        src: ./assets/alert.types.png
        caption: The two alert styles. Note that success alerts should only be used when there is additional information that needs to be conveyed.

  - type: section
    name: Redlines

  - type: two column
    text: |
      Dimensions
      : - Color bar is 6px high
        - Horizontal and bottom padding is 15px
        - Title is 10px below color bar and 8px above message text

      Colors
      : - Error color is [Strawberry Red](/design/c/colors/v2.0.0-beta.4/#rd-strawberry-red)
        - Success color is [Digital Grass Green](/design/c/colors/v2.0.0-beta.4/#rd-digital-grass-green)
        - Background is [White](/design/c/colors/v2.0.0-beta.4/#rd-white)

      Icon
      : - Generic X

      Typography
      : - Title is [Basic Label](/design/c/typography/v2.0.0-beta.3/#rd-basic-label)
        - Message is [Basic Body Copy](/design/c/typography/v2.0.0-beta.3/#rd-basic-body)

      Animation
      : - Drop in uses a Runge-Kutta spring with a tension of 400 and friction of 30
        - Slide out uses a RK spring with a tension of 400 and friction of 34

      Position
      : - Alert should be aligned with the left side of the grid's container
        - 50px of vertical padding above the first alert
        - 20px spacing between alerts if there are more than one

      Focus Behavior
      : - Most alerts can just be announced by ARIA alerts and don't need special focus treatment
        - If an alert is particularly important, focus should be moved to the first element of the alert (and restored to it's original position upon dismissal)
        - Statically presented alerts should just be read and focused in the normal flow of the document
    contents:
      - type: wide image
        src: ./assets/redlines.png



changelog:
  - version: 1.0.0-beta.3
    changes: |
      - ADDED: Positioning details to redlines
      - UPDATED: Keyboard and focus redlines.
  - version: 1.0.0-beta.2
    changes: |
      - ADDED: Success style, redlines, a11y checklist
  - version: 1.0.0-beta.1
    changes: Initial version
---
