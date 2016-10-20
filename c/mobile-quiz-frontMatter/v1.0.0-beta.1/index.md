---
layout: component-yaml
title: Mobile - Quiz Frontmatter
section: Components
redirect_from: /docs/ui-components/mobile-quiz-frontMatter/
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
  This component defines the standard visual style for the quiz frontmatter screen.
features:
  - assignment date
  - due date
  - assignment title
  - number of questions
  - question point value
  - number of questions answered (current / total)
  - assignment status (unavailable, completed, not started, in-progress, overdue)
  - scoring policy
  - primary action (start, continue, review)
usage_guidelines: |
  The quiz frontmatter screen is used within ILP to view and access specific quizzes for a particular course.

blocks:
# IOS

  - type: section
    name: iOS

  - type: two column
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/frontMatter_ios_unavailable.png
        caption: unavailable assignment
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/frontMatter_ios_new.png
        caption: new (unaccessed) assignment
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/frontMatter_ios_continue.png
        caption: in-progress assignment
    text: tba
    contents:
      - type: ios image
        src: ./assets/ios/frontMatter_ios_pastDue.png
        caption: past due assignment
    text: tba
    contents:
      - type: ios image
      src: ./assets/ios/frontMatter_ios_complete.png
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

      - frontMatter_ios_unavailable:
        <https://zpl.io/1TDCPN>
      - frontMatter_ios_new:
        <https://zpl.io/iTpFk>
      - frontMatter_ios_continue:
        <https://zpl.io/7xx3V>
      - frontMatter_ios_pastDue:
        <https://zpl.io/1RnrcT>
      - frontMatter_ios_complete:
        <https://zpl.io/Z1jfBmg>

      ### Android

      tba

# CHANGELOG  

changelog:
  - version: 1.0.0-beta.1
    changes: Initial version
---
