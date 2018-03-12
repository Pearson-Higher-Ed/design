---
layout: component-yaml
title: Feedback
section: Components
version: 1.0.0-beta.1
status: active
implemented: false
people:
  - role: Designer
    name: Alex Johnson
  - role: Designer
    name: Tony Nguyen
  - role: UX Writer
    name: Carole Balawender

downloads:
  - name: UX Accessibility Checklist
    link: https://docs.google.com/a/pearson.com/document/d/1YjPJz6ZJgG6m4iJvtTFYuhIBGVuefHpzYx3H_lPU-vo/edit?usp=sharing
  - name: .sketch
    link: ./assets/Feedback-1.0

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
  This component lets users provide targeted feedback. This component must point to the Feedback API provided by the Social and Engagement team.
usage_guidelines: |
  To collect user feedback, follow the structure and behavior described in this component. The feedback component includes the following sets of basic elements:

  * Question, Yes or No response, and alert
  * Question, Yes or No response, comment box, and alert
features:
  - Targeted feedback with Yes or No response
  - Targeted feedback with Yes or No response and comment box

blocks:
  - type: section
    name: Targeted feedback with Yes or No response

  - type: two column
    text: |
      This feedback feature lets you ask a question targeted at obtaining feedback for selected content(for example, a selected help topic). The user response requires either Yes or No.

      Note: Follow up with an alert message to acknowledge that the feedback was received.

    contents:
      - type: narrow image
        src: ./assets/Contextual_Feedback_YN@2x.jpg
      - type: narrow image
        src: ./assets/Contextual_Feedback_SuccessMessage@2x.jpg

  - type: section
    name: Targeted feedback with Yes or No response and comment box

  - type: two column
    text: |
      This feedback feature lets you add a comment field to the previous targeted feedback user flow. Use its elements when you want to get more information to better understand the Yes or No response.

      Note: Follow up with an alert message to acknowledge that the feedback was received.

    contents:
    - type: narrow image
      src: ./assets/Contextual_Feedback_YN@2x.jpg
    - type: narrow image
      src: ./assets/Contextual_Feedback_CommentBox@2x.jpg
    - type: narrow image
      src: ./assets/Contextual_Feedback_SuccessMessage@2x.jpg

  - type: section
    name: Redlines

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
        src: ./assets/Redline-01@2x.jpg
      - type: wide image
        src: ./assets/Redline-03@2x.jpg

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
        src: ./assets/Redline-01@2x.jpg
      - type: wide image
        src: ./assets/Redline-02@2x.jpg
      - type: wide image
        src: ./assets/Redline-03@2x.jpg

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
