---
layout: component-yaml
title: Mobile - Quiz Results
section: Components
redirect_from: /docs/ui-components/mobile-quiz-results/
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
  This component defines the standard visual style for the quiz results screen.
features:
  - assignment date
  - due date
  - number of questions
  - question point value
  - number of attempts per question
  - number of questions answered (current / total)
  - assignment status (unavailable, completed, not started, in-progress, overdue)
  - scoring policy
  - primary action (close)
usage_guidelines: |
  The quiz results screen is used within ILP to view and access the results of a specific quiz for a particular course.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/mcq_results_inprogress_ios.png
        caption: in-progress assignment
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/mcq_results_completed_ios.png
        caption: completed assignment


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

      - mcq_results_inprogress_ios:
        <https://zpl.io/ZE4i64>
      - mcq_results_completed_ios:
        <https://zpl.io/ZE4i8b>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
