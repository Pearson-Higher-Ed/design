---
layout: component-yaml
title: Mobile - Quiz Feedback
section: Components
redirect_from: /docs/ui-components/mobile-quiz-feedback/
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
  This component defines the standard visual style for the quiz item feedback screen.
features:
  - current question number indicator
  - total question number indicator
  - point value
  - problem statement (can contain text, audio, video, and/or images)
  - question correctness
  - identified correct answer
  - identified incorrect answer (when answered incorrectly)
  - question navigation
  - primary action (next question, try again)
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
        src: ./assets/ios/mcq_fb_incorrect.png
        caption: incorrect
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/mcq_fb_correct.png
        caption: correct


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

      - mcq_fb_incorrect:
        <https://zpl.io/2oVjNU>
      - mcq_fb_correct:
        <https://zpl.io/Be6YP>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
