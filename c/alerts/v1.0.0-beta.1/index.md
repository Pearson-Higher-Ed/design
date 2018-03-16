---
layout: component-yaml
title: Alerts
section: Components
redirect_from: /docs/ui-components/application-header/
version: 1.0.0-beta.1
status: deprecated
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
    link: https://docs.google.com/a/pearson.com/document/d/1Uhkqt3gyK7cVDKkEeUcgXfO1GjYLwk5qp_2Gu8CcKhc/edit?usp=sharing
  - name: .sketch mockup
    link: ./assets/alerts.sketch

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


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
