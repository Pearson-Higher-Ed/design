---
layout: component-yaml
title: Mobile - Quiz Item
section: Components
redirect_from: /docs/ui-components/mobile-quiz-item/
version: 1.0.0-beta.1
status: active
implemented: false
private: true
people:
  - role: Product Owner
    name: Mike Pace
    email: michael.pace@pearson.com
  - role: Designer
    name: Adam Beckley
    email: adam.beckley@pearsoned.com
  - role: Designer
    name: Xin Hu
    email: xin.hu@pearson.com
dependencies:

tagline: |
  This component defines the standard visual style for the quiz item screen.
features:
  - current question number indicator
  - total question number indicator
  - point value
  - problem statement (can contain text, audio, video, and/or images)
  - answer options
  - question navigation
  - primary action (submit answer)
usage_guidelines: |
  The quiz item screen is used within ILP to view and answer questions within a REVEL quiz.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/mcq_unselected_ios.png
        caption: no answer selected
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/mcq_selected_ios.png
        caption: selected answer


# ANDROID

  - type: section
    name: Android

  - type: two column
    text: tba

# REDLINES

  - type: section
    name: Redlines

  - type: two column
    text: |
      ### iOS

      - mcq_unselected_ios:
        <https://zpl.io/Z22Yksn>
      - mcq_selected_ios:
        <https://zpl.io/Z1OOMHs>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
