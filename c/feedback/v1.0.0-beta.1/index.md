---
layout: component-yaml
title: Feedback
section: Components
redirect_from: /docs/ui-components/contextual-help/
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Designer
    name: Alex Johnson
  - role: Designer
    name: Tony Nguyen

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1YjPJz6ZJgG6m4iJvtTFYuhIBGVuefHpzYx3H_lPU-vo/edit?usp=sharing
  - name: .sketch
    link: ./assets/contextual-help.mockup.sketch
  - name: .ai
    link: ./assets/contextual-help.mockup.ai
  - name: Authoring Guidelines
    https: https://docs.google.com/document/d/1tQVifP2ynJhHlg7R-Odk2Ej1qQxMs0SQ67fYzTlYjM8/edit?ts=578397b6

dependencies:
  - name: Drawer
    version: 1.0.0
  - name: Typography
    version: 1.0.0
  - name: Application Header
    version: 1.1.0
  - name: Icons
    version: 1.1.0

tagline: |
  This component lets users provide general and targeted feedback. This component is pointed to the Feedback API endpoints created by Gary Hatton’s team.
usage_guidelines: |
  To collect user feedback, follow the structure and behavior described in this component. The feedback component includes the following sets of basic elements:

  * Comment box
  * Question, Yes or No response, and alert
  * Question, Yes or No response, comment box, and alerts
features:
  - General feedback with only a comment box
  - Targeted feedback with Yes or No response
  - Targeted feedback with Yes or No response and comment box

blocks:
  - type: section
    name: General Feedback

  - type: two column
    text: |
      Displays feedback...

    contents:
      - type: narrow image
        src: ./assets/Contextual_Feedback_CommentBox.jpg



  - type: section
    name: Targeted feedback with Yes or No response

  - type: two column
    text: |
      This feedback feature lets you ask a question targeted at obtaining feedback for selected content(for example, a selected help topic). The user response requires either Yes or No.

      Note: Follow up with an alert message to acknowledge that the feedback was received.

    contents:
      - type: narrow image
        src: ./assets/Contextual_Feedback_YN.jpg
      - type: narrow image
        src: ./assets/Contextual_Feedback_SuccessMessage.jpg


  - type: section
    name: Targeted feedback with Yes or No response and comment box

  - type: two column
    text: |
      This feedback feature lets you add a comment field to the previous targeted feedback user flow. Use its elements when you want to get more information to better understand the Yes or No response.

      Note: Follow up with an alert message to acknowledge that the feedback was received.

    contents:
    - type: narrow image
      src: ./assets/Contextual_Feedback_YN.jpg
    - type: narrow image
      src: ./assets/Contextual_Feedback_CommentBox.jpg
    - type: narrow image
      src: ./assets/Contextual_Feedback_SuccessMessage.jpg


  - type: section
    name: Redlines

  - type: two column
    text: |
      ### General

      Container
      : - Modal

      Spacing
      : - 25px margin above article title and below article excerpt

      Typography
      : - Question title is a [UI Text - Bold](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold)

      Input
      : - Uses the [Multiple line text]

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

    contents:
      - type: wide image
        src: ./assets/Redline-01.jpg

  - type: two column
    text: |
      ### Contextual feedback with binary answer

      Typography
      : - Question title is a [UI Text - Bold](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold)

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

      Alert
      : - Uses the [Inline Alert](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--inline-alert) style

    contents:
      - type: wide image
        src: ./assets/Redline-01.jpg
      - type: wide image
        src: ./assets/Redline-03.jpg

  - type: two column
    text: |
      ### Contextual feedback with binary answer

      Typography
      : - Question title is a [UI Text - Bold](/design/c/typography/v2.0.0-beta.9/#rd-ui-text-bold)

      Input
      : - Uses the [Multiple line text]

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

      Alert
      : - Uses the [Inline Alert](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--inline-alert) style

    contents:
      - type: wide image
        src: ./assets/Redline-01.jpg
      - type: wide image
        src: ./assets/Redline-02.jpg
      - type: wide image
        src: ./assets/Redline-03.jpg


changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
