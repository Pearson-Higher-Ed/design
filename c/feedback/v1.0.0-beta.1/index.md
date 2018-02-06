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
  This component allows users to provide general and contextual feedback. The feedback component is associated with APIs created by Gary Hatton’s team.
usage_guidelines: |
  Any feedback should follow the structure and behavior laid out in this component. Basic elements of the feedback component consist of a question, binary answer and/or comment box and system feedback via alerts.

features:
  - General feedback with only comment box
  - Contextual feedback with binary answer
  - Contextual feedback with binary answer and comment box

blocks:
  - type: section
    name: General Feedback

  - type: two column
    text: |
      Displays feedback...

    contents:
      - type: narrow image
        src: ./assets/help-list-2x.png
      - type: narrow image
        src: ./assets/help-detail-2x.png



  - type: section
    name: Contextual feedback with binary answer

  - type: two column
    text: |
      For contextual feedback where a binary answer is required, use "Yes" and "No".

      Follow up with system status in alert message.

    contents:
      - type: narrow image
        src: ./assets/Contextual_Feedback_YN.jpg
      - type: narrow image
        src: ./assets/Contextual_Feedback_SuccessMessage.jpg


  - type: section
    name: Contextual feedback with binary answer and comment box

  - type: two column
    text: |
      For contextual feedback that combines binary answer and positive/negative sentiment, use "Yes/No" and comment box.

      Follow up with system status in alert message.

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

      Multiple Line Text
      : - Uses the [Multiple line text]

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

    contents:
      - type: wide image
        src: ./assets/Redline-01.jpg

  - type: two column
    text: |
      ### Contextual feedback with binary answer

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

      Alert
      : - Uses the [Inline Alert](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--inline-alert) style, typically in the [Warning/Error variant](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--warning-error-alert)

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

      Multiple Line Text
      : - Uses the [Multiple line text]

      Button
      : - [Primary Buttons](/c/buttons/v2.2.1/#buttons--primary-button)

      Alert
      : - Uses the [Inline Alert](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--inline-alert) style, typically in the [Warning/Error variant](http://uxframework.pearson.com/c/alerts/v2.0.3/#alerts--warning-error-alert)

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
