---
layout: component-yaml
title: Alerts
section: Components
version: 2.0.0-beta.1
status: deprecated
implemented: false
people:
  - role: Product Owner
    name: Joe Macaluso
    email: joe.macaluso@pearson.com
  - role: Interaction Design
    name: Parker
    email: parker.malenke@pearson.com
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
    name: Popover alerts (Static)

  - type: two column
    text: |
      When a message is displayed upon page load, for example if there was an error confirming an email address, the alert should appear statistically in the upper left corner of the page or if on a mobile device the message will appear in the center of the mobile devices screen.  The location will make it noticeable even when the user screen is magnified.

      This message can simply be closed by clicking on the close button or it will auto close the window upon time out.

    contents:
      - type: wide image
        src: ./assets/alert_over.png
        caption: The message should appear in the upper corner as part of the normal page load.

  - type: two column
    text: |
      At responsive sizes the alert occupies the top part of the viewport.
    contents:
      - type: narrow image
        src: ./assets/alert_mobile_over.png
        caption: Responsive popover alert.

  - type: section
    name: Popover alerts (Dynamic Presentation)

  - type: two column
    text: |
      Alerts can also appear dynamically in response to user actions like submitting a form, choosing an option, or completing an assignment. In this case the alert will animate down from the top.
    contents:
      - type: wide video
        src: ./assets/animation.mp4
        caption: The animation for showing/dismissing a dynamic alert.

  - type: section
    name: Content (task) level alerts

  - type: two column
    text: |
      The alert that applies to a specific task or section content will be displayed above or below where the action occurred.

    contents:
        - type: wide image
          src: ./assets/alert_inline.png
          caption: The example of message appear below the content area.
        - type: narrow image
          src: ./assets/alert_mobile.png
          caption: Example of responsive version content level alert.

  - type: section
    name: Alert Types

  - type: two column
    text: |
      Warning
      : - Use when an error occurred that cannot be resolve on the user end.
        - Use when an issue that may or may not cause problems for the users, but the user should know about.
        - Example: System alert

      Error
      : - Use to let user know that something has gone wrong and it needs to be resolved to complete the task. IT can also provide suggestions on how to proceed.
        - Use to communicate an unsuccessful action
        - Example: Form Error, login error, search error.

      Success
      : - Use to tell user that a task has been completed successfully.
        - Use to let user know that everything is working property.
        - Example: Submitting a form, completing a quiz
        - The success alert can be closed to save screen estate.

      Information
      : - Use to inform the user about something relevant: to share tips or suggestions.
        - Use to let user know that everything is working property.
        - Example: Information about the specific content
        - The information alert can be closed to save screen estate.

    contents:
      - type: wide image
        src: ./assets/alerts_all.png


  - type: section
    name: Redlines

  - type: two column
    text: |
      Dimensions
      : - Color bar is 3px high
        - Horizontal and bottom padding is 28px (desktop)

      Colors
      : - Error and warning color is [Strawberry Red](/design/c/colors/v2.0.0-beta.7/#rd-strawberry-red)
        - Success and information color is [Digital Marine Turquoise](/design/c/colors/v2.0.0-beta.7/#rd-digital-marine-turquoise)
        - Background is [White](/design/c/colors/v2.0.0-beta.7/#rd-white)

      Typography
      : - Title is [Bold Text](/design/c/typography/v2.0.0/#rd-bold-text)
        - Message is [Basic Body Copy](/design/c/typography/v2.0.0-beta.3/#rd-basic-body)

      Animation
      : - Drop in uses an ease-in-out easing curve with a duration of 300ms
        - Slide out uses an ease-in easing curve with a duration of 200ms

      Focus Behavior
      : - Most alerts can just be announced by using ARIA alert roles and don't need special focus treatment
        - If an alert is particularly important, focus should be moved to the first element of the alert (and restored to it's original position upon dismissal)
        - Statically presented alerts should just be read and focused in the normal flow of the document

    contents:

      - type: wide image
        src: ./assets/alerts_spec.png

      - type: wide image
        src: ./assets/alerts_spec_popover.png
        caption: Popover alerts

      - type: wide image
        src: ./assets/alerts_spec_desktop 2.png
        caption: Screen level alerts

      - type: wide image
        src: ./assets/alerts_spec_desktop 1.png
        caption: Content(task) level alert



changelog:
  - version: 2.0.0-beta.1
    changes: |
      - CHANGED: New visual design. adding more alert types
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
