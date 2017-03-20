---
layout: component-yaml
title: Alerts
section: Components
redirect_from: /docs/ui-components/application-header/
version: 2.0.0-beta.1
status: active
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Visual Design
    name: Lynn Chang
    email: lynn.chang@pearson.com
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
    name: Static alerts

  - type: two column
    text: |
      When a message needs to be displayed upon page load (there was an error confirming an email address, for example) the alert should appear statically in the upper left corner of the page. This location makes it  noticeable even when the user's screen is magnified.

    contents:
      - type: wide image
        src: ./assets/alert_over.png
        caption: The message should appear in the upper corner as part of the normal page load.
      - type: wide video
        src: ./assets/animation.mp4
        caption: Example of the animation for displaying and dismissing a dynamic alert.

  - type: two column
    text: |
        An system alert message should appear statically under the header at full width of the page.

    contents:
        - type: wide image
          src: ./assets/alert_fullpage.png
          caption: The message should appear in full width under the header area.

  - type: two column
    text: |
      At responsive sizes the alert occupies the entire width of the content area.
    contents:
      - type: narrow image
        src: ./assets/alert_mobile.png
        caption: Responsive alert.


  - type: section
    name: Alert Types

  - type: two column
    text: |
      Warning
      : - Use when an error occurred that cannot be resolve on the user end.
        - Use when an issue that may or may not cause problems for the users, but the user should know about.
        - Example: System alert

      Success
      : - Use to tell user that a task has been completed successfully.
        - Use to let user know that everything is working property.
        - Example: Submitting a form, completing a quiz

      Information
      : - Use to inform the user about something relevant: to share tips or suggestions.
        - Use to let user know that everything is working property.
        - Example: Information about the specific content

      Error
      : - Use to let user know that something has gone wrong and it needs to be resolved to complete the task. IT can also provide suggestions on how to proceed.
        - Use to communicate an unsuccessful action.
        - Example: Form Error, login error, search error.

    contents:
      - type: wide image
        src: ./assets/alert_all.png
        caption:




changelog:
  - version: 1.0.0-beta.5
    changes: |
      - CHANGED: Uses basic CSS easing curves, rather than springs.
  - version: 1.0.0-beta.4
    changes: |
      - FIXED: Accessibility verbiage is now more accurate
      - FIXED: Spacing verbiage, other typos
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
